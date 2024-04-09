'use client';
import React, { useState, useEffect, useRef } from 'react';
import { dataBase } from "../../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from 'next/navigation';
const page = () => {
    const router = useRouter();
    const handleLogout = () => {
        signOut(dataBase).then(val => {
            localStorage.removeItem('token');
            router.push("/login");
        })
    }
    return (
        <div>
            <header className='bg-gray-800 flex items-center h-[80px] w-full px-6'>
                <div className='flex justify-start'>
                    <svg onClick={() => { router.push('/dashboard') }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-7 h-7 text-white cursor-pointer hover:opacity-80 transition ease-in-out duration-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>
                <div className='flex justify-center text-center mx-auto'>
                    <h1 className='text-white sm:text-[28px] text-[24px] font-bold italic text-center'>LanguageLeap</h1>
                </div>
            </header>
            <div className='my-10 sm:mx-32 sm:flex gap-10 sm:px-2 px-6'>
                <div>
                    <div className='bg-gray-100 px-8 py-8 sm:w-80 rounded-2xl'>
                        <h1 className='flex gap-1 text-4xl font-semibold'>
                            <span>Ismail</span>
                            <span>Memon</span>
                        </h1>
                        <h4 className='pt-8'>Joined April 2024</h4>
                        <div className='flex items-center gap-4 mt-5'>
                            <span><img src="https://admin.talkpal.ai/uploads/2023/09/spanish.png" alt="" className='h-10 w-10' /></span>
                            <span className='bg-white rounded-full px-3 py-[2px] text-gray-500'>Spanish</span>
                        </div>
                    </div>
                    <div className='sm:block hidden'>
                        <div onClick={handleLogout} className='bg-gray-100 hover:bg-white transition ease-in-out duration-500 cursor-pointer text-red-500 text-xl px-8 py-8 sm:w-80 rounded-2xl mt-6'>
                            Logout
                        </div>
                    </div>
                </div>

                <div className='bg-gray-100 px-8 py-8 w-full rounded-2xl sm:mt-0 mt-5'>
                    <h1 className='flex gap-1 text-4xl font-semibold'>
                        My Profile
                    </h1>
                    <div className='mt-5'>
                        <div>
                            <h5 className='text-gray-500'>Email</h5>
                            <div className='bg-white rounded-lg px-3 py-[10px] sm:max-w-80 mt-2'>
                                iamismailmemon@gmail.com
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h5 className='text-gray-500'>First Name</h5>
                            <div className='bg-white rounded-lg px-3 py-[10px] sm:max-w-80 mt-2'>
                                Ismail
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h5 className='text-gray-500'>Last Name</h5>
                            <div className='bg-white rounded-lg px-3 py-[10px] sm:max-w-80 mt-2'>
                                Memon
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:hidden block'>
                    <div onClick={handleLogout} className='bg-gray-100 hover:bg-white transition ease-in-out duration-500 cursor-pointer text-red-500 text-xl px-8 py-8 sm:w-80 rounded-2xl mt-6'>
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
