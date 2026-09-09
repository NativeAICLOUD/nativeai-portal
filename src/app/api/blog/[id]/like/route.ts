import db from "@/lib/db";
import { verifyJwtToken } from "@/lib/jwt";
import Blog from "@/models/Blog";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, res: any) {
    await db.connect()

    const id = (await res.params).id

    const accessToken = req.headers.get("authorization")
    const token = accessToken ? accessToken?.split(" ")[1] : '';

    console.log(token)

    const decodedToken: any = verifyJwtToken(token)

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const blog = await Blog.findById(id)

        if (blog.likes.includes(decodedToken._id)) {
            blog.likes = blog.likes.filter((id: any) => id.toString() !== decodedToken._id.toString())
        } else {
            blog.likes.push(decodedToken._id)
        }

        await blog.save()

        return new Response(JSON.stringify({ msg: 'Successfully interacted with the blog' }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 200 })
    }
}