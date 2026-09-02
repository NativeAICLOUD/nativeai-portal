import db from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import Client from "@/models/Client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await db.connect()
    const auth = requireAdmin(req)
    if (!auth.ok) return auth.response

    try {
        const clients = await Client.find({}).sort({ name: 1 })
        return NextResponse.json(clients)
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
        const { name, company, email, addressLines, currency, notes } = body

        if (!name || !email) {
            return NextResponse.json({ error: "name and email are required" }, { status: 400 })
        }

        const client = await Client.create({ name, company, email, addressLines, currency, notes })
        return NextResponse.json(client, { status: 201 })
    } catch (error) {
        return NextResponse.json(null, { status: 500 })
    }
}
