'use client';
import React, { useState, useEffect, useRef } from 'react';
import { dataBase } from "../../../firebaseConfig";


import { signOut } from "firebase/auth";
import { useRouter } from 'next/navigation';
const page = () => {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState(null);
    const [welcomeInfomation, setWelcomeInfomation] = useState(null);


    useEffect(() => {
        // Retrieve user info from localStorage
        const storedtWelcomeInfomation = localStorage.getItem('welcomeInfomation');
        if (storedtWelcomeInfomation) {
          setWelcomeInfomation(JSON.parse(storedtWelcomeInfomation));
        }
      }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        }
    }, [router]);
    useEffect(() => {
        // Retrieve user info from localStorage
        const storedUserInfo = localStorage.getItem('userInfo');
        if (storedUserInfo) {
            setUserInfo(JSON.parse(storedUserInfo));
        }
    }, []);
    const handleLogout = () => {
        // Clear user info from localStorage
        localStorage.removeItem('userInfo');
        // Clear token from localStorage
        localStorage.removeItem('token');
        // Redirect to the login page
        router.push("/login");
    }
    return (
        <div>

            <header className='bg-gray-800 flex items-center h-[80px] w-full sm:px-6 px-3'>
                <div className='flex justify-start'>
                    <svg onClick={() => { router.push('/dashboard') }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="sm:w-7 w-6 sm:h-7 h-6 text-white cursor-pointer hover:opacity-80 transition ease-in-out duration-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>
                <div className='flex justify-center text-center mx-auto'>
                    <a href=""><h1 className='text-white sm:text-[28px] text-[24px] font-bold italic text-center'>LanguageLeap</h1></a>
                </div>
            </header>
            <div className='my-10 mx-auto max-w-[1600px] sm:flex gap-10 sm:px-6 px-3'>
                <div>
                    <div>

                    </div>
                    <div className='bg-gray-100 px-8 py-8 sm:w-80 rounded-2xl'>
                        <h1 className='flex gap-2 text-4xl font-semibold'>
                            <span>{userInfo?.firstName}</span>
                            <span>{userInfo?.lastName}</span>
                        </h1>
                        <h1 className='flex text-sm text-gray-600 gap-2 pt-3'>
                            <span>Joined:</span>
                            <span>{userInfo?.createdAt}</span>
                        </h1>
                        {/* <h4 className='pt-8'>Joined April 2024</h4> */}
                        <div className='flex items-center gap-4 mt-5'>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                    <path d="M3.6 9h16.8" />
                    <path d="M3.6 15h16.8" />
                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                    <path d="M12.5 3a17 17 0 0 1 0 18" />
                  </svg>
                  </span>
                            <span className='bg-white rounded-full px-3 py-[2px] text-gray-500'>{welcomeInfomation?.learnLanguage}</span>
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
                        <div className='mt-5'>
                            <h5 className='text-gray-500'>First Name</h5>
                            <div className='bg-white rounded-lg h-10 px-3 py-[10px] sm:max-w-80 mt-2'>
                                {userInfo?.firstName}
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h5 className='text-gray-500'>Last Name</h5>
                            <div className='bg-white rounded-lg h-10 px-3 py-[10px] sm:max-w-80 mt-2'>
                                {userInfo?.lastName}
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h5 className='text-gray-500'>Email</h5>
                            <div className='bg-white rounded-lg h-10 px-3 py-[10px] sm:max-w-80 mt-2'>
                                {userInfo?.email}
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
