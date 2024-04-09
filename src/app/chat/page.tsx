'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    const handleModalConfirm = () => {
        router.push('/dashboard');
        // Close the modal after redirection
        setShowModal(false);
    }

    return (
        <div>
            <header className='bg-gray-800 flex items-center justify-between h-[80px] w-full px-6'>
                <div className='flex gap-3'>
                    <div className=''>
                        <svg onClick={() => setShowModal(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-7 h-7 text-white cursor-pointer hover:opacity-80 transition ease-in-out duration-300">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div className='sm:hidden block'>
                        <div className='flex gap-3 items-center'>
                            <h2 className='text-white text-2xl'>Ismail</h2>
                        </div>
                    </div>
                </div>
                <div className='sm:block hidden'>
                    <div className='flex gap-3 items-center '>
                        <h2 className='text-white text-2xl'>Ismail</h2>
                    </div>
                </div>
                <div className='flex sm:gap-8 gap-3'>
                    <img src="https://app.talkpal.ai/static/media/icon_chat-add_.2396bbbf02d3f2e8e8fecad864c267a1.svg" alt="" className='cursor-pointer' />
                    <img src="https://app.talkpal.ai/static/media/History.6e2b0ef2ebb5471be6db7f6390eb08c6.svg" alt="" className='cursor-pointer' />
                    <img src="https://app.talkpal.ai/static/media/gear-icon.7a96a1edb6b58f4eee647e7e873ed409.svg" alt="" className='cursor-pointer' />
                </div>
            </header>

            {/* Confirmation Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white sm:max-w-sm sm:mx-0 mx-6 p-6 rounded-lg">
                        <p className='text-center text-xl font-semibold'>Are you sure you want to leave the chat?</p>
                        <p className='text-center text-xl text-gray-500 pt-2'>If you leave the chat, your conversation will be lost.</p>
                        <div className="flex justify-between mt-8">
                            <button onClick={() => setShowModal(false)} className="bg-gray-300 text-gray-800 hover:opacity-80 transition ease-in-out duration-300 font-bold py-2 px-5 rounded-lg">Cancel</button>
                            <button onClick={handleModalConfirm} className="bg-blue-500 text-white hover:opacity-80 transition ease-in-out duration-300 font-bold py-2 px-5 rounded-lg mr-2">Confirm</button>
                        </div>
                    </div>
                </div>
            )}

            <div className='bg-gray-100 mx-auto max-w-5xl h-screen'></div>
            <div className='fixed w-full bottom-0 bg-white py-3 px-3 border-t'>
                <div className='mx-auto max-w-5xl flex gap-4'>
                    <div className='relative w-full flex items-center'>
                        <input type="text" className='w-full bg-gray-100 rounded-full pr-16 px-6 py-[14px] outline-none' />
                        <span className='absolute right-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler icon-tabler-send-2" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#374151" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
                                <path d="M6.5 12h14.5" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
