import React, { useEffect, useState } from "react";

const FAQ = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div>
           <div className="">
                <div className="sm:mt-32 mt-10">
                    <h2 className="text-black sm:text-5xl text-2xl font-bold pt-2">FAQ</h2>
                    <div className="sm:mt-16 mt-8">
                        <div>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div onClick={() => toggleAnswer(index)} key={index} className="w-full cursor-pointer py-3 px-6 bg-white border  border-gray-300 rounded">
                                        <div className="flex items-center justify-between cursor-pointer">
                                            <span className="text-xl">{faq.question}</span>
                                            <span className="">{openIndex === index ? (
                                                <div className="flex justify-center items-center bg-gray-700 rounded-full h-5 w-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minus" width="16" height="16" viewBox="0 0 24 24" stroke-width="3" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l14 0" />
                                                    </svg>
                                                </div>
                                            ) : (
                                                <div className="flex justify-center items-center bg-gray-700 rounded-full h-5 w-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="16" height="16" viewBox="0 0 24 24" stroke-width="3" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M12 5l0 14" />
                                                        <path d="M5 12l14 0" />
                                                    </svg>
                                                </div>
                                            )}</span>
                                        </div>
                                        {openIndex === index && <p className="text-lg mt-2">{faq.answer}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* <h1 className="text-gray-700 sm:text-2xl font-medium">How is Talkpal different from other language learning apps?</h1> */}



                        <div className="flex justify-center mt-12">
                            <button className="text-white bg-black py-[14px] px-[36px] sm:w-auto w-full text- font-semibold">About Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
