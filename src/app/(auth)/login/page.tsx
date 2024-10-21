'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { showToast } from '../../components/controls/Toast'
import { Link } from 'react-transition-progress/next'

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (password === '' || email === '') {
            return showToast({
                title: 'Error',
                description: 'Fill all fields!',
                type: 'error'
            })
        }

        if (password.length < 6) {
            return showToast({
                title: 'Error',
                description: 'Password must be at least 6 characters long!',
                type: 'error'
            })
        }

        try {
            const res = await signIn('credentials', { email, password, redirect: false })

            if (res?.error === null) {
                return router.push("/")
            }
            return showToast({
                title: 'Error',
                description: 'Error occured while logging!',
                type: 'error'
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={'mt-20 h-[calc(100vh-60px)] w-full'}>
            <div className={'w-[85%] mx-auto flex flex-col items-center'}>
                <h2 className='text-[32px] text-[#222] tracking-wide'>Log In</h2>
                <form className='mt-8 w-[20%] p-6 border border-[#666] rounded-lg flex flex-col justify-center items-center gap-8' onSubmit={handleSubmit}>
                    <input className='outline-none border-none border-b border-[#666] p-2' type="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
                    <input className='outline-none border-none border-b border-[#666] p-2' type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
                    <button className={'outline-none py-2 px-4 border border-transparent text-[17px] font-bold bg-[#efefef] text-[#22ab22] cursor-pointer transition duration-150 tracking-wide hover:border-[#22ab22] hover:bg-[#22ab22] hover:text-[#efefef]'}>Log in</button>
                    <Link className={'bg-transparent outline-none border-none text-[18px] mt-7 cursor-pointer text-center transition duration-150 hover:text-[#555]'} href='/register'>
                        Don&apos;t have an account? <br /> Register now.
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default LoginPage