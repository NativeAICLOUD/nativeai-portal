import db from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import ContactSubject from "@/models/ContactSubject";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await db.connect()
    const auth = requireAdmin(req)
    if (!auth.ok) return auth.response

    try {
        const subjects = await ContactSubject.find({}).sort({ order: 1, createdAt: 1 })
        return NextResponse.json(subjects)
    } catch (error) {
        return NextResponse.json(null, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    await db.connect()
    const auth = requireAdmin(req)
    if (!auth.ok) return auth.response

    try {
        const body = await req.json()
        const { label, order, active } = body

        if (!label) {
            return NextResponse.json({ error: "label is required" }, { status: 400 })
        }

        const highest = await ContactSubject.findOne({}).sort({ order: -1 })
        const subject = await ContactSubject.create({
            label,
            order: order ?? (highest ? highest.order + 1 : 0),
            active: active ?? true,
        })
        return NextResponse.json(subject, { status: 201 })
    } catch (error) {
        return NextResponse.json(null, { status: 500 })
    }
}
