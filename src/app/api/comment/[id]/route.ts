import db from "@/lib/db";
import { verifyJwtToken } from "@/lib/jwt";
import Comment from "@/models/Comment";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: any) {
    await db.connect()

    // blog id !!
    const id = res.params.id

    try {
        const comments = await Comment.find({ blogId: id }).populate('authorId')

        return new Response(JSON.stringify(comments), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}

export async function DELETE(req: NextRequest, res: any) {
    await db.connect()

    const id = res?.params?.id
    const accessToken = req.headers.get('authorization') as any;
    const token = accessToken ? accessToken?.split(" ")[1] : '';

    const decodedToken = verifyJwtToken(token)

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const comment = await Comment.findById(id).populate("authorId")
        if (comment.authorId._id.toString() !== decodedToken._id.toString()) {
            return new Response(JSON.stringify({ msg: "Only author can delete his blog" }), { status: 401 })
        }

        await Comment.findByIdAndDelete(id)

        return new Response(JSON.stringify({ msg: 'Successfully deleted comment' }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}