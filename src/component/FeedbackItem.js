import React from 'react'

const FeedbackItem = ({ feedbackData }) => {
    return (
        <div>
            <div>
            <h6 className="mt-5 text-center text-[14px] text-gray-500">*Prices & currencies may vary depending on your location</h6>
            <div className="mt-16">
              <h2 className="text-black sm:text-5xl text-xl font-bold pt-2 text-center">LEARN ANYWHERE ANYTIME</h2>
                <h2 className="text-gray-700 font-bold pt-4 text-center">DOWNLOAD TALKPAL APP</h2>
                <div className="mt-8 flex items-center justify-center sm:gap-10 gap-2">
                    <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1701561600" className="sm:w-40 w-36 h-16 cursor-pointer" />
                    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" className="sm:w-40 w-36 h-16 cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 sm:gap-8 mt-20 sm:mt-20">
                {feedbackData.map((item, index) => (
                    <div className="bg-white rounded-lg px-6 py-6 relative">
                        <div className="flex justify-center">
                            <div className="absolute -top-4">
                                <div className="border-2 border-gray-700 rounded-full h-8 w-8 flex justify-center items-start text-2xl font-extrabold"></div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="flex items-center justify-center gap-2">
                                {item.images.map((image, index) => (
                                    <img key={index} src={image} className="h-5 w-5" alt={`Image ${index}`} />
                                ))}
                            </div>
                            <p className="pt-5 text-gray-600">{item.text}</p>
                        </div>
                        <div className="mt-8">
                            <h6 className="text-black font-semibold">{item.author}</h6>
                            <h6 className="text-gray-600">on {item.source}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeedbackItem
