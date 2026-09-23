import db from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import Job from "@/models/Job";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    await db.connect()
    const auth = requireAdmin(req)
    if (!auth.ok) return auth.response

    try {
        const body = await req.json()
        const {
            title, slug, department, location, workModel, type, duration,
            description, about, responsibilities, requirements, preferredRequirements,
            benefits, skills, order, active,
        } = body

        const job = await Job.findByIdAndUpdate(
            params.id,
            {
                title, slug, department, location, workModel, type, duration,
                description, about, responsibilities, requirements, preferredRequirements,
                benefits, skills, order, active,
            },
            { new: true, runValidators: true }
        )
        if (!job) return NextResponse.json({ error: "not found" }, { status: 404 })
        return NextResponse.json(job)
    } catch (error: any) {
        if (error?.code === 11000) {
            return NextResponse.json({ error: "a job with this slug already exists" }, { status: 409 })
        }
        return NextResponse.json(null, { status: 500 })
    }
}

export async function DELETE(req: NextRequest, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    await db.connect()
    const auth = requireAdmin(req)
    if (!auth.ok) return auth.response

    try {
        const job = await Job.findByIdAndDelete(params.id)
        if (!job) return NextResponse.json({ error: "not found" }, { status: 404 })
        return NextResponse.json({ ok: true })
    } catch (error) {
        return NextResponse.json(null, { status: 500 })
    }
}
