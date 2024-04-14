"use client";
import React, { useState, useEffect } from 'react';
import roleplaysData from "../../../RolePlay.json";
import { useRouter } from 'next/navigation';

function Roleplays() {
    const router = useRouter();
    const [roleplays, setRoleplays] = useState([]);
    const [categorizedRoleplays, setCategorizedRoleplays] = useState([]);
    const [currentRoleplay, setCurrentRoleplay] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login');
        }
      }, [router]);
    useEffect(() => {
        setRoleplays(roleplaysData);
    }, []);

    useEffect(() => {
        // Organize roleplays by category when roleplays state changes
        setCategorizedRoleplays(organizeRoleplaysByCategory(roleplays));
    }, [roleplays]);

    const organizeRoleplaysByCategory = (roleplays) => {
        const categories = {};

        // Group roleplays by category
        roleplays.forEach((roleplay) => {
            const { category } = roleplay;
            if (!categories[category]) {
                categories[category] = [];
            }
            categories[category].push(roleplay);
        });

        // Convert categories object into an array of objects
        const categorizedRoleplays = Object.keys(categories).map((category) => ({
            name: category,
            roleplays: categories[category],
        }));

        return categorizedRoleplays;
    };

    // Function to handle roleplay click
    const handleRoleplayClick = (roleplayId) => {
        router.push(`/roleplay?id=${roleplayId}`)
        setCurrentRoleplay(roleplays.find(roleplay => roleplay.id === roleplayId));
    };

    return (
        <div>
            <div>
                {currentRoleplay ? (
                    <div>
                          <header className='bg-gray-800 flex items-center justify-between h-[80px] w-full sm:px-6 px-4'>
                            <div className=''>
                                <svg onClick={() => { router.push('/roleplay'); setCurrentRoleplay(null) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="sm:w-7 w-6 sm:h-7 h-6 text-white cursor-pointer hover:opacity-80 transition ease-in-out duration-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </div>
                            <div className=''>
                                <svg onClick={() => { router.push('/account') }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-6 h-6 cursor-pointer hover:opacity-80 transition ease-in-out duration-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                        </header>
                        <div style={{ backgroundImage: `url(${currentRoleplay.image})` }} className='w-full h-screen flex justify-center'>
                            <div className='sm:py-8 py-6 sm:px-6 px-3 w-full'>
                                <h2 className='sm:text-6xl text-center text-4xl text-white font-bold mt-8'>{currentRoleplay.type}</h2>
                                <div className='sm:mt-20 mt-10 w-full'>
                                    <h2 className='sm:text-4xl text-center text-2xl font-bold text-white mt-10'>Ordering a taxi:</h2>
                                    <div className='mt-6 bg-black bg-opacity-40 rounded-lg px-3 sm:max-w-4xl sm:mx-auto sm:py-12 py-8'>
                                        <div className=''>
                                            <h2 className='text-white text-center sm:text-3xl text-xl font-semibold'>Setting</h2>
                                            <h4 className='text-white mt-2 text-center sm:text-lg'>{currentRoleplay.setting}</h4>
                                        </div>
                                        <div className='sm:pt-12 pt-8'>
                                            <h2 className='text-white text-center sm:text-3xl text-xl font-semibold'>Scenario</h2>
                                            <h4 className='text-white mt-2 text-center sm:text-lg'>{currentRoleplay.scenario}</h4>
                                        </div>
                                        <div className='sm:pt-12 pt-8'>
                                            <h2 className='text-white text-center sm:text-3xl text-xl font-semibold'>Your Role</h2>
                                            <h4 className='text-white mt-2 text-center sm:text-lg'>{currentRoleplay.role}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                ) : (
                    <div>
                        <header className='bg-gray-800 flex items-center justify-between h-[80px] w-full sm:px-6 px-4'>
                            <div className=''>
                                <svg onClick={() => { router.push('/dashboard'); setCurrentRoleplay(null) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="sm:w-7 w-6 sm:h-7 h-6 text-white cursor-pointer hover:opacity-80 transition ease-in-out duration-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </div>
                            <div className=''>
                                <svg onClick={() => { router.push('/account') }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-6 h-6 cursor-pointer hover:opacity-80 transition ease-in-out duration-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                        </header>
                        <div className='sm:max-w-[1600px] sm:mx-auto sm:px-6 px-4 sm:my-16 my-8'>
                            <div className='mx-auto sm:max-w-5xl text-center sm:mt-14 mt-8 sm:text-base text-sm'>
                                <h2 className='sm:text-5xl text-3xl font-bold'>ROLEPLAYS</h2>
                                <div className='w-full flex justify-center items-center bg-gray-100 rounded-2xl sm:px-30 px-6 sm:py-6 py-3 sm:mt-14 mt-8 sm:text-base text-sm text-black'>
                                    With the Roleplay mode practicing language will be fun and exciting. You can pick various settings from daily conversations to creative and fantastic dialogues.
                                </div>
                            </div>
                            {categorizedRoleplays.map((category, index) => (
                                <div key={index}>
                                    <h2 className='sm:text-3xl text-2xl font-bold mt-8'>{category.name}</h2>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-12 gap-6 sm:mt-12 mt-8 '>
                                        {category.roleplays.map((roleplay) => (
                                            <div key={roleplay.id}>
                                                <div onClick={() => { handleRoleplayClick(roleplay.id); }} style={{ backgroundImage: `url(${roleplay.image})` }} className='transition-transform transform-gpu hover:scale-105 duration-500 sm:h-[150px] h-[130px] rounded-3xl flex justify-center items-center text-white cursor-pointer px-3'>
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-center mt-2">{roleplay.title}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                )}
            </div>
        </div>
    );
}

export default Roleplays;
