import db from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import ContactSubject from "@/models/ContactSubject";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    await db.connect()
    const auth = requireAdmin(req)
    if (!auth.ok) return auth.response

    try {
        const body = await req.json()
        const { label, order, active } = body

        const subject = await ContactSubject.findByIdAndUpdate(
            params.id,
            { label, order, active },
            { new: true, runValidators: true }
        )
        if (!subject) return NextResponse.json({ error: "not found" }, { status: 404 })
        return NextResponse.json(subject)
    } catch (error) {
        return NextResponse.json(null, { status: 500 })
    }
}

export async function DELETE(req: NextRequest, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    await db.connect()
    const auth = requireAdmin(req)
    if (!auth.ok) return auth.response

    try {
        const subject = await ContactSubject.findByIdAndDelete(params.id)
        if (!subject) return NextResponse.json({ error: "not found" }, { status: 404 })
        return NextResponse.json({ ok: true })
    } catch (error) {
        return NextResponse.json(null, { status: 500 })
    }
}
