'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { showToast } from '../components/controls/Toast'

const CreateBlog = () => {
    const CLOUD_NAME = 'doojo83ea'
    const UPLOAD_PRESET = 'blog_app'

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [category, setCategory] = useState("Nature")
    const [photo, setPhoto] = useState('')

    const { data: session, status } = useSession()
    const router = useRouter()


    if (status === 'loading') {
        return <p>Loading...</p>
    }

    if (status === 'unauthenticated') {
        return <p className={'w-full text-center mt-20 text-[32px] font-bold'}>
            Access Denied
        </p>
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (!photo || !title || !category || !desc) {
            showToast({
                title: 'Error',
                description: 'All fields are required',
                type: 'error'
            })
            return
        }

        try {
            const imageUrl = await uploadImage()

            const user = session?.user as any;
            const res = await fetch(`http://localhost:3000/api/blog`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user?.accessToken || ''}`
                },
                method: 'POST',
                body: JSON.stringify({ title, desc, category, imageUrl, authorId: user?._id })
            })

            if (!res.ok) {
                throw new Error("Error occured")
            }

            const blog = await res.json()

            router.push(`/blog/${blog?._id}`)
        } catch (error) {
            console.log(error)
        }
    }

    const uploadImage = async () => {
        if (!photo) return

        const formData = new FormData()

        formData.append("file", photo)
        formData.append("upload_preset", UPLOAD_PRESET)

        try {
            const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
                method: "POST",
                body: formData
            })

            const data = await res.json()

            const imageUrl = data['secure_url']

            return imageUrl
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={'mt-20 h-[calc(100vh-60px)] w-full'}>
            <div className={'w-[85%] mx-auto flex flex-col items-center'}>
                <h2 className='text-[32px] text-[#222] tracking-wide'>Create Post</h2>
                <form className="mt-8 w-[20%] p-6 border border-[#666] rounded-lg flex flex-col justify-start items-center gap-8" onSubmit={handleSubmit}>
                    <input className="outline-none border-none border-b border-[#666] p-2" type="text" placeholder='Title...' onChange={(e) => setTitle(e.target.value)} />
                    <textarea className="outline-none border-none border-b border-[#666] p-2 resize-none" placeholder='Description...' onChange={(e) => setDesc(e.target.value)} />
                    <select className="outline-none border-b border-[#666] p-2 text-[18px] w-[180px] bg-[#efefef] rounded-lg" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Nature">Nature</option>
                        <option value="Mountain">Mountain</option>
                        <option value="Ocean">Ocean</option>
                        <option value="Wildlife">Wildlife</option>
                        <option value="Forest">Forest</option>
                    </select>
                    <label className="w-[175px] flex items-center gap-5 text-[18px] font-bold cursor-pointer" htmlFor='image'>
                        Upload Image
                    </label>
                    <input id='image' type="file" style={{ display: 'none' }} onChange={(e: any) => setPhoto(e.target.files[0])} />
                    <button className={'mt-10 outline-none border border-transparent py-2.5 px-5 text-[18px] rounded-lg bg-[#22ab22] text-[#efefef] cursor-pointer transition duration-150 hover:bg-[#efefef] hover:border-[#22ab22] hover:text-[#22ab22]'}>Create</button>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog