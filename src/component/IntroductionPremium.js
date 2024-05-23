import React from 'react'

const IntroductionPremium = ({ introductionPremiumes }) => {
    return (
        <div>
            <div>
                <h2 className="text-white sm:text-5xl text-2xl text-center font-bold">INTRODUCING LANGUAGELEAP PREMIUM</h2>
                <h2 className="text-white sm:text-base text-base text-center pt-4 font-bold">AVAILABLE IN 57+ LANGUAGES</h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 sm:gap-8 mt-10">
            {introductionPremiumes.map((introductionPremium, index) => (
                <div className="">
                    <img src={introductionPremium.image} className="cursor-pointer" />
                    <h2 className="font-mesm:dium leading-8 sm:text-[26px] text-[20px] pt-5 text-white">{introductionPremium.title}</h2>
                    <p className="text-lg pt-3 text-white">{introductionPremium.description}</p>
                </div>
                 ))}
            </div>
            <div className="flex justify-center mt-12">
                  <button className="bg-white text-black py-5 px-[36px] sm:w-auto w-full text-sm font-semibold">START FREE 14 DAYS TRIAL</button>
                </div>
        </div>
    )
}

export default IntroductionPremium
