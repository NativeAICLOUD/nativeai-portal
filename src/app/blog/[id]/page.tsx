"use client"
import { showToast } from '@/app/components/controls/Toast'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Link } from 'react-transition-progress/next'
import { useRouter } from 'next/navigation'
import { useEffect, useState, use } from 'react';
import { format } from 'timeago.js'
import person from '../../../../public/img/person.jpg'
import BlogComment from '@/app/components/partials/blog/BlogComment'

const BlogDetails = (ctx: { params: Promise<{ id: string }> }) => {
    const params = use(ctx.params);
    const [blogDetails, setBlogDetails] = useState<any>("")
    const [isLiked, setIsLiked] = useState(false)
    const [blogLikes, setBlogLikes] = useState(0)

    const [commentText, setCommentText] = useState("")
    const [comments, setComments] = useState<any[]>([])

    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        async function fetchComments() {
            const res = await fetch(`http://localhost:3000/api/comment/${params.id}`, { cache: 'no-store' })
            const comments = await res.json()

            setComments(comments)
        }
        fetchComments()
    }, [])


    useEffect(() => {
        async function fetchBlog() {
            const res = await fetch(`http://localhost:3000/api/blog/${params.id}`, { cache: 'no-store' })
            const blog = await res.json()

            setBlogDetails(blog)
            setIsLiked(blog?.likes?.includes((session?.user as any)?._id))
            setBlogLikes(blog?.likes?.length || 0)
        }
        session && fetchBlog()
    }, [session])

    const handleDelete = async () => {
        try {
            const confirmModal = confirm("Are you sure you want to delete your blog?")

            if (confirmModal) {
                const res = await fetch(`http://localhost:3000/api/blog/${params.id}`, {
                    headers: {
                        'Authorization': `Bearer ${(session?.user as any)?.accessToken}`
                    },
                    method: "DELETE"
                })

                if (res.ok) {
                    router.push('/')
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleLike = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/blog/${params.id}/like`, {
                headers: {
                    'Authorization': `Bearer ${(session?.user as any)?.accessToken}`
                },
                method: 'PUT'
            })

            console.log(res)
            if (res.ok) {
                if (isLiked) {
                    setIsLiked(prev => !prev)
                    setBlogLikes(prev => prev - 1)
                } else {
                    setIsLiked(prev => !prev)
                    setBlogLikes(prev => prev + 1)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleComment = async () => {
        if (commentText?.length < 2) {
            showToast({
                title: 'Error',
                description: 'Comment must be at least 2 characters long',
                type: 'error'
            })
            return
        }

        try {
            const user = session?.user as any;
            const body = {
                blogId: params.id,
                authorId: user?._id,
                text: commentText
            }

            const res = await fetch(`http://localhost:3000/api/comment`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user?.accessToken}`
                },
                method: "POST",
                body: JSON.stringify(body)
            })

            const newComment = await res.json()

            setComments(prev => {
                return [newComment, ...prev]
            })

            setCommentText("")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={'min-h-[calc(100vh-60px)] w-full'}>
            <div className={'w-[85%] h-full mx-auto mt-20 flex flex-col items-center'}>
                <Image className="object-cover mb-10" src={blogDetails?.imageUrl} alt="" width='750' height='650' />
                <div className={'row px-4 w-[750px] flex justify-between items-center mb-15'}>
                    <h3 className={'title text-4xl text-[#333] capitalize'}>{blogDetails?.title}</h3>
                    {
                        blogDetails?.authorId?._id.toString() === (session?.user as any)?._id.toString()
                            ? (
                                <div className={'controls flex items-center gap-8'}>
                                    <Link className={'editButton outline-none border border-transparent bg-[#3eda22] text-white py-2 px-5 flex gap-3 items-center rounded-lg cursor-pointer text-lg font-bold transition duration-150 hover:bg-white hover:border-[#3eda22] hover:text-[#3eda22]'} href={`/blog/edit/${params.id}`}>
                                        Edit
                                    </Link>
                                    <button onClick={handleDelete} className={'deleteButton outline-none border border-transparent bg-red-600 text-white py-2 px-5 flex gap-3 items-center rounded-lg cursor-pointer text-lg font-bold transition duration-150 hover:bg-white hover:border-red-600 hover:text-red-600'}>
                                        Delete
                                    </button>
                                </div>
                            )
                            : (
                                <div className={'author flex items-center gap-3 text-xl text-[#444]'}>
                                    Author: <span>{blogDetails?.authorId?.username}</span>
                                </div>
                            )
                    }
                </div>
                <div className={'row px-4 w-[750px] flex justify-between items-center mb-15'}>
                    <div className={'category flex justify-start items-center gap-5 text-lg font-bold'}>
                        Category:
                        <span className='py-2 px-5 bg-[#3eda22] text-white rounded-lg text-base font-medium'>{blogDetails?.category}</span>
                    </div>
                    <div className={'right flex items-center gap-4 cursor-pointer'}>
                        {blogLikes} {" "} {isLiked ? 'Yes' : 'No' }
                    </div>
                </div>
                <div className={'row px-4 w-[750px] flex justify-between items-center mb-15'}>
                    <p>{blogDetails?.desc}</p>
                    <span>Posted: <span>{format(blogDetails?.createdAt)}</span></span>
                </div>
                <div className={'commentSection mx-auto mt-30 w-1/2 flex flex-col justify-center items-center border border-gray-600 rounded-2xl'}>
                    <div className={'commentInput p-4 w-full flex items-center gap-6 border-b border-gray-600'}>
                        <Image className="object-cover rounded-full" src={person} width='45' height='45' alt="" />
                        <input className="flex-1 outline-none border-none p-1 border-b border-gray-600" value={commentText} type="text" placeholder='Type message...' onChange={(e) => setCommentText(e.target.value)} />
                        <button className="outline-none border-none bg-[#0707b5] text-white py-1 px-3 rounded-lg text-[17px] cursor-pointer" onClick={handleComment}>Post</button>
                    </div>
                    <div className={'comments max-h-[300px] overflow-auto mt-5 w-full p-4 flex flex-col items-center gap-8'}>
                        {
                            comments?.length > 0
                                ? comments.map((comment) => (
                                    <BlogComment key={comment._id} comment={comment} setComments={setComments} />
                                ))
                                : <h4 className={'noComments p-5 text-2xl text-[#222]'}>No comments. Be the first one to leave a comment!</h4>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails