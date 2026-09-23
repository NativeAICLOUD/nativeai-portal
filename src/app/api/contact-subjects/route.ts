import db from "@/lib/db";
import ContactSubject from "@/models/ContactSubject";
import { NextResponse } from "next/server";

export async function GET() {
    await db.connect()

    try {
        const subjects = await ContactSubject.find({ active: true }).sort({ order: 1, createdAt: 1 })
        return NextResponse.json(subjects.map((s) => s.label))
    } catch (error) {
        return NextResponse.json(null, { status: 500 })
    }
}
