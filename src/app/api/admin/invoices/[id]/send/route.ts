import db from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import Invoice from "@/models/Invoice";
import "@/models/Client";
import { sendInvoiceEmail } from "@/lib/invoice-email";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
    await db.connect()
    const auth = requireAdmin(req)
    if (!auth.ok) return auth.response

    try {
        const invoice = await Invoice.findById(params.id).populate("client")
        if (!invoice) return NextResponse.json({ error: "not found" }, { status: 404 })

        await sendInvoiceEmail(invoice)

        invoice.status = "sent"
        invoice.sentAt = new Date()
        await invoice.save()

        return NextResponse.json(invoice)
    } catch (error) {
        console.error("[invoices/:id/send] error:", error)
        return NextResponse.json(null, { status: 500 })
    }
}
