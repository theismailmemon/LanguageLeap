import React from 'react'

const Feature = ({ features }) => {
    return (
        <div>
            <h2 className="text-black sm:text-5xl text-2xl text-center font-bold">THE LANGUAGELEAP DIFFERENCE</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 sm:gap-8 sm:mt-20 mt-10">
                {features.map((feature, index) => (
                    <div className="bg-white rounded-md cursor-pointer px-6 py-6">
                        <img src={feature.icon} className="sm:w-16 w-14" alt="Feature Icon" />
                        <h2 className="font-medium sm:leading-[35px] sm:text-[26px] text-[20px] pt-5">{feature.title}</h2>
                        <p className="text-lg pt-3">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Feature
