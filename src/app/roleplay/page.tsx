"use client";
import React from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
    return (
        <div>
            <header className='bg-gray-800 flex items-center justify-between h-[80px] w-full px-6'>
                <div className=''>
                    <svg onClick={() => { router.push('/dashboard') }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-7 h-7 text-white cursor-pointer hover:opacity-80 transition ease-in-out duration-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>
                <div className=''>
                    <svg onClick={() => { router.push('/account') }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-6 h-6 cursor-pointer hover:opacity-80 transition ease-in-out duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>
            </header>

            <div className='mb-5'>
                <div className='mx-auto sm:max-w-5xl text-center sm:mt-14 mt-8 sm:text-base text-sm sm:px-2 px-6'>
                    <h2 className='sm:text-5xl text-3xl font-bold'>ROLEPLAYS</h2>
                    <div className='w-full flex justify-center items-center bg-gray-100 rounded-2xl sm:px-14 px-8 sm:py-6 py-3 sm:mt-14 mt-8 sm:text-base text-sm text-black'>
                        With the Roleplay mode practicing language will be fun and exciting. You can pick various settings from daily conversations to creative and fantastic dialogues.
                    </div>
                </div>

                <div className='sm:max-w-[1600px] sm:mx-auto px-6 sm:mt-16 mt-8'>
                    <h2 className='sm:text-4xl text-2xl font-bold'>Basics</h2>
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-12 gap-6 sm:mt-12 mt-8 '>
                        <div onClick={() => { router.push(`/roleplay?id=${'2333246'}`); }} style={{ backgroundImage: "url('https://app.talkpal.ai/static/media/Chat-Mode.c505bbb6ecbf5c1b429e.jpg')" }} className='transition-transform transform-gpu hover:scale-105 duration-500 h-[150px] rounded-3xl flex justify-center items-center text-white font-semibold text-lg cursor-pointer'>
                            Ordering a taxi
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
