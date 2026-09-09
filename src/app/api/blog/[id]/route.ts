import db from "@/lib/db";
import { verifyJwtToken } from "@/lib/jwt";
import Blog from "@/models/Blog";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: any) {
    await db.connect()

    const id = (await res.params).id

    try {
        const blog = await Blog.findById(id).populate("authorId").select('-password')

        return new Response(JSON.stringify(blog), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}

export async function PUT(req: NextRequest, res: any) {
    await db.connect()

    const id = (await res.params).id
    const accessToken = req.headers.get('authorization')
    const token = accessToken ? accessToken?.split(" ")[1] : '';

    const decodedToken: any = verifyJwtToken(token)

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const body = await req.json()
        const blog = await Blog.findById(id).populate('authorId')

        if (blog?.authorId?._id.toString() !== decodedToken._id.toString()) {
            return new Response(JSON.stringify({ msg: 'Only author can update his blog' }), { status: 403 })
        }

        const updatedBlog = await Blog.findByIdAndUpdate(id, { $set: { ...body } }, { new: true })

        return new Response(JSON.stringify(updatedBlog), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}

export async function DELETE(req: NextRequest, res: any) {
    await db.connect()

    const id = (await res.params).id

    const accessToken = req.headers.get('authorization')
    const token = accessToken ? accessToken?.split(" ")[1] : '';

    const decodedToken: any = verifyJwtToken(token)

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const blog = await Blog.findById(id).populate('authorId')
        if (blog?.authorId?._id.toString() !== decodedToken._id.toString()) {
            return new Response(JSON.stringify({ msg: 'Only author can delete his blog' }), { status: 403 })
        }

        await Blog.findByIdAndDelete(id)

        return new Response(JSON.stringify({ msg: 'Successfully deleted blog' }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}

// blog -> [id] -> like -> route.js


// http://localhost:3000/api/blog/someid/like