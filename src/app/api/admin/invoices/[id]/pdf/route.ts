import db from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import Invoice from "@/models/Invoice";
import "@/models/Client";
import { renderInvoicePdf, invoiceToPdfProps } from "@/lib/pdf/render";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    await db.connect()
    const auth = requireAdmin(req)
    if (!auth.ok) return auth.response

    try {
        const invoice = await Invoice.findById(params.id).populate("client")
        if (!invoice) return NextResponse.json({ error: "not found" }, { status: 404 })

        const pdfBuffer = await renderInvoicePdf(invoiceToPdfProps(invoice))

        return new NextResponse(pdfBuffer, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `inline; filename="Invoice-${invoice.invoiceNumber}.pdf"`,
            },
        })
    } catch (error) {
        console.error("[invoices/:id/pdf] error:", error)
        return NextResponse.json(null, { status: 500 })
    }
}
