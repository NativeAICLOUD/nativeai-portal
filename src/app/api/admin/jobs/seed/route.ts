import fs from "fs";
import path from "path";
import db from "@/lib/db";
import { requireAdmin } from "@/lib/admin";
import Job from "@/models/Job";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await db.connect()
    const auth = requireAdmin(req)
    if (!auth.ok) return auth.response

    try {
        const filePath = path.join(process.cwd(), "public", "jobs.json")
        const jobs = JSON.parse(fs.readFileSync(filePath, "utf-8"))

        let imported = 0
        for (let i = 0; i < jobs.length; i++) {
            const j = jobs[i]
            const exists = await Job.findOne({ slug: j.slug })
            if (exists) continue
            await Job.create({
                title: j.title,
                slug: j.slug,
                department: j.department,
                location: j.location,
                workModel: j.workModel,
                type: j.type,
                duration: j.duration,
                description: j.description,
                about: j.about,
                responsibilities: j.responsibilities ?? [],
                requirements: j.requirements ?? [],
                preferredRequirements: j.preferredRequirements ?? [],
                benefits: j.benefits ?? [],
                skills: j.skills ?? [],
                order: i,
                active: true,
            })
            imported++
        }

        return NextResponse.json({ imported })
    } catch (error) {
        return NextResponse.json(null, { status: 500 })
    }
}
