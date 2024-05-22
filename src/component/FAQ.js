import React, { useState } from "react";

const FAQ = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [rotatedIndices, setRotatedIndices] = useState([]);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const toggleRotation = (index) => {
        setRotatedIndices((prevIndices) =>
            prevIndices.includes(index)
                ? prevIndices.filter((i) => i !== index)
                : [...prevIndices, index]
        );
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
                                    <div
                                        onClick={() => {
                                            toggleAnswer(index);
                                            toggleRotation(index);
                                        }}
                                        key={index}
                                        className="w-full cursor-pointer py-3 px-6 bg-white border border-gray-300 rounded"
                                    >
                                        <div className="flex items-center justify-between cursor-pointer">
                                            <span className="text-xl">{faq.question}</span>
                                            <span className="">
                                                <div
                                                    className=""
                                                    style={{
                                                        transform: rotatedIndices.includes(index)
                                                            ? "rotate(50deg)"
                                                            : "rotate(0deg)",
                                                        transition: "transform 0.3s ease",
                                                    }}
                                                >
                                                   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M12 5l0 14" />
                                                        <path d="M5 12l14 0" />
                                                    </svg>
                                                </div>
                                            </span>
                                        </div>
                                        {openIndex === index && (
                                            <p className="text-lg mt-4">{faq.answer}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center mt-12">
                            <button className="text-white bg-black py-[14px] px-[36px] sm:w-auto w-full font-semibold">
                                About Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
