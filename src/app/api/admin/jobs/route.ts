import db from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import Job from "@/models/Job";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await db.connect()
    const auth = requireAdmin(req)
    if (!auth.ok) return auth.response

    try {
        const jobs = await Job.find({}).sort({ order: 1, createdAt: 1 })
        return NextResponse.json(jobs)
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
        const {
            title, slug, department, location, workModel, type, duration,
            description, about, responsibilities, requirements, preferredRequirements,
            benefits, skills, order, active,
        } = body

        if (!title || !slug || !department || !location || !workModel || !type || !description || !about) {
            return NextResponse.json({ error: "missing required fields" }, { status: 400 })
        }

        const job = await Job.create({
            title, slug, department, location, workModel, type, duration,
            description, about,
            responsibilities: responsibilities ?? [],
            requirements: requirements ?? [],
            preferredRequirements: preferredRequirements ?? [],
            benefits: benefits ?? [],
            skills: skills ?? [],
            order: order ?? 0,
            active: active ?? true,
        })
        return NextResponse.json(job, { status: 201 })
    } catch (error: any) {
        if (error?.code === 11000) {
            return NextResponse.json({ error: "a job with this slug already exists" }, { status: 409 })
        }
        return NextResponse.json(null, { status: 500 })
    }
}
