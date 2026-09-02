import db from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import Invoice from "@/models/Invoice";
import "@/models/Client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    await db.connect()
    const auth = requireAdmin(req)
    if (!auth.ok) return auth.response

    try {
        const invoice = await Invoice.findById(params.id).populate("client")
        if (!invoice) return NextResponse.json({ error: "not found" }, { status: 404 })
        return NextResponse.json(invoice)
    } catch (error) {
        return NextResponse.json(null, { status: 500 })
    }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    await db.connect()
    const auth = requireAdmin(req)
    if (!auth.ok) return auth.response

    try {
        const invoice = await Invoice.findById(params.id)
        if (!invoice) return NextResponse.json({ error: "not found" }, { status: 404 })
        if (invoice.status !== "draft") {
            return NextResponse.json({ error: "only draft invoices can be edited" }, { status: 409 })
        }

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
        } = body

        if (!Array.isArray(lineItems) || lineItems.length === 0) {
            return NextResponse.json({ error: "at least one line item is required" }, { status: 400 })
        }

        const subtotal = lineItems.reduce((sum: number, item: any) => sum + Number(item.amount || 0), 0)
        const tax = subtotal * (Number(taxRate) / 100)
        const total = subtotal + tax + Number(shipping || 0)

        invoice.client = clientId || invoice.client
        invoice.issueDate = issueDate || invoice.issueDate
        invoice.dueDate = dueDate || invoice.dueDate
        invoice.invoiceNumber = invoiceNumber?.trim() || invoice.invoiceNumber
        invoice.lineItems = lineItems
        invoice.taxRate = taxRate
        invoice.shipping = shipping
        invoice.subtotal = subtotal
        invoice.tax = tax
        invoice.total = total
        invoice.currency = currency || invoice.currency
        invoice.exchangeRateNote = exchangeRateNote
        invoice.terms = terms || invoice.terms

        await invoice.save()

        const result = await Invoice.findById(invoice._id).populate("client")
        return NextResponse.json(result)
    } catch (error) {
        console.error("[invoices/:id] update error:", error)
        return NextResponse.json(null, { status: 500 })
    }
}
