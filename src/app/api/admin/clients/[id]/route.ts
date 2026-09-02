import db from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import Client from "@/models/Client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    await db.connect()
    const auth = requireAdmin(req)
    if (!auth.ok) return auth.response

    try {
        const client = await Client.findById(params.id)
        if (!client) return NextResponse.json({ error: "not found" }, { status: 404 })
        return NextResponse.json(client)
    } catch (error) {
        return NextResponse.json(null, { status: 500 })
    }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    await db.connect()
    const auth = requireAdmin(req)
    if (!auth.ok) return auth.response

    try {
        const body = await req.json()
        const { name, company, email, addressLines, currency, notes } = body

        const client = await Client.findByIdAndUpdate(
            params.id,
            { name, company, email, addressLines, currency, notes },
            { new: true, runValidators: true }
        )
        if (!client) return NextResponse.json({ error: "not found" }, { status: 404 })
        return NextResponse.json(client)
    } catch (error) {
        return NextResponse.json(null, { status: 500 })
    }
}
