import React from 'react'

const LeapLanguage = ({ languageButton }) => {
    return (
        <div>
            <div className="sm:flex sm:gap-5 sm:justify-between sm:items-center">
                <div className="sm:w-[63%]">
                    <h1 className="sm:text-[65px] text-3xl text-black font-bold sm:leading-[68px]">The Most Efficient Way to Learn a Language</h1>
                    <p className="pt-6 sm:text-[21px] text-gray-600">LanguageLeap is a GPT-powered AI language tutor. Chat about unlimited amount of interesting topics either by writing or speaking while receiving messages with realistic voice.</p>
                    <div className="mt-7">
                        <h4 className="text-black text-2xl font-medium">You will practice:</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 mt-4">
                            <button className="flex items-center gap-2">
                                <span className="bg-gray-700 rounded-full h-[18px] w-[18px] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="14" height="14" viewBox="0 0 24 24" stroke-width="4" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </span>
                                <span className="text-black text-lg font-semibold">Listening</span>
                            </button>
                            <button className="flex items-center gap-2">
                                <span className="bg-gray-700 rounded-full h-[18px] w-[18px] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="14" height="14" viewBox="0 0 24 24" stroke-width="4" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </span>
                                <span className="text-black text-lg font-semibold">Speaking</span>
                            </button>
                            <button className="flex items-center gap-2">
                                <span className="bg-gray-700 rounded-full h-[18px] w-[18px] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="14" height="14" viewBox="0 0 24 24" stroke-width="4" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </span>
                                <span className="text-black text-lg font-semibold">Reading</span>
                            </button>
                            <button className="flex items-center gap-2">
                                <span className="bg-gray-700 rounded-full h-[18px] w-[18px] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="14" height="14" viewBox="0 0 24 24" stroke-width="4" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </span>
                                <span className="text-black text-lg font-semibold">Writing</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="relative sm:w-64 sm:mt-0 mt-8 flex sm:justify-start justify-center">
                    <img onClick={() => { setShowModal(true) }} src="https://talkpal.ai/wp-content/uploads/2024/03/Introducing-TalkPal.jpg" class="w-full transition-transform duration-300 transform-gpu hover:scale-105" />
                </div>
            </div>
            <div className="mt-10">
                <h4 className="text-black text-2xl font-medium">Which language do you want to learn?</h4>
                <div className="mt-6">
                    <div className="sm:block hidden">
                        <div className="flex gap-5 justify-between">
                            {languageButton.map((button, index) => (
                                <button key={index} className="hover:scale-105 transform transition-transform duration-300">
                                    <span>
                                        <img src={button.imageUrl} alt={button.altText} className="w-20 h-20" />
                                    </span>
                                    <h6 className="text-black text-lg font-semibold pt-2">{button.language}</h6>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 flex">
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-x-6 gap-y-6 sm:gap-x-5 sm:gap-y-8">
                            {languageButton.map((button, index) => (
                                <button key={index} className="flex gap-5 w-full items-center hover:scale-105 transform transition-transform duration-300">
                                    <span>
                                        <img src={button.imageUrl} alt={button.altText} className="w-8 h-8" />
                                    </span>
                                    <span className="text-gray-700 text-lg">{button.language}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeapLanguage
