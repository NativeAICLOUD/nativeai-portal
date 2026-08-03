'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { showToast } from '../../components/controls/Toast'

const SignUpPage = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (username === '' || email === '' || password === '') {
            return showToast({
                title: 'Error',
                description: 'Fill all fields!',
                type: 'error'
            })
        }

        if (password.length < 6) {
            return showToast({
                title: 'Error',
                description: 'Password must be at least 6 characters!',
                type: 'error'
            })
        }

        try {
            const res = await fetch('http://localhost:3000/api/register', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ username, email, password })
            })

            console.log(await res.json())
            if (res.ok) {
                showToast({
                    title: 'Yayy!',
                    description: 'Successfully registered the user',
                    type: 'success'
                })
                setTimeout(() => {
                    signIn()
                }, 1500)
                return
            }
            return showToast({
                title: 'Error',
                description: 'All fields are required',
                type: 'error'
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={'mt-20 h-[calc(100vh-60px)] w-full'}>
            <div className={'w-[85%] mx-auto flex flex-col items-center'}>
                <h2 className='text-[32px] text-[#222] tracking-wide'>Register</h2>
                <form className='mt-8 w-[20%] p-6 border border-[#666] rounded-lg flex flex-col justify-center items-center gap-8' onSubmit={handleSubmit}>
                    <input className='outline-none border-none border-b border-[#666] p-2' type="text" placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />
                    <input className='outline-none border-none border-b border-[#666] p-2' type="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
                    <input className='outline-none border-none border-b border-[#666] p-2' type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
                    <button className={'outline-none py-2 px-4 border border-transparent text-[17px] font-bold bg-[#efefef] text-[#22ab22] cursor-pointer transition duration-150 tracking-wide hover:border-[#22ab22] hover:bg-[#22ab22] hover:text-[#efefef]'}>Register</button>
                    <button className={'bg-transparent outline-none border-none text-[18px] mt-7 cursor-pointer text-center transition duration-150 hover:text-[#555]'} onClick={() => signIn()}>
                        Don&apos;t have an account? <br /> Register now.
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage