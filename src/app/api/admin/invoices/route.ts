import db from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import Invoice from "@/models/Invoice";
import Client from "@/models/Client";
import { formatInvoiceNumber, COMPANY_INFO } from "@/lib/invoice-data";
import { sendInvoiceEmail } from "@/lib/invoice-email";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await db.connect()
    const auth = requireAdmin(req)
    if (!auth.ok) return auth.response

    try {
        const invoices = await Invoice.find({}).populate("client").sort({ issueDate: -1 })
        return NextResponse.json(invoices)
    } catch (error) {
        return NextResponse.json(null, { status: 500 })
    }
}

async function resolveInvoiceNumber(base: string) {
    let candidate = base
    let suffix = 2
    while (await Invoice.findOne({ invoiceNumber: candidate })) {
        candidate = `${base}-${suffix}`
        suffix++
    }
    return candidate
}

export async function POST(req: NextRequest) {
    await db.connect()
    const auth = requireAdmin(req)
    if (!auth.ok) return auth.response

    try {
        const body = await req.json()
        const {
            client: clientId,
            issueDate,
            dueDate,
            invoiceNumber,
            lineItems,
            taxRate = 0,
            shipping = 0,
            exchangeRateNote,
            terms,
            currency,
            send,
        } = body

        if (!clientId || !issueDate || !dueDate || !Array.isArray(lineItems) || lineItems.length === 0) {
            return NextResponse.json({ error: "missing required fields" }, { status: 400 })
        }

        const client = await Client.findById(clientId)
        if (!client) return NextResponse.json({ error: "client not found" }, { status: 404 })

        const subtotal = lineItems.reduce((sum: number, item: any) => sum + Number(item.amount || 0), 0)
        const tax = subtotal * (Number(taxRate) / 100)
        const total = subtotal + tax + Number(shipping || 0)

        const baseNumber = invoiceNumber?.trim() || formatInvoiceNumber(new Date(issueDate))
        const resolvedNumber = await resolveInvoiceNumber(baseNumber)

        const invoice = await Invoice.create({
            invoiceNumber: resolvedNumber,
            client: client._id,
            issueDate,
            dueDate,
            lineItems,
            subtotal,
            taxRate,
            tax,
            shipping,
            total,
            currency: currency || client.currency || "EUR",
            exchangeRateNote,
            terms: terms || COMPANY_INFO.defaultTerms,
        })

        if (send) {
            const populated = await Invoice.findById(invoice._id).populate("client")
            await sendInvoiceEmail(populated)
            populated.status = "sent"
            populated.sentAt = new Date()
            await populated.save()
        }

        const result = await Invoice.findById(invoice._id).populate("client")
        return NextResponse.json(result, { status: 201 })
    } catch (error) {
        console.error("[invoices] create error:", error)
        return NextResponse.json(null, { status: 500 })
    }
}
