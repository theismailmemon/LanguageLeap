import React from 'react'

const PlanCard = ({ plans }) => {
    return (
       <div>
         <div>
        <h2 className="text-gray-700 font-bold">PRICING PLANS</h2>
        <h2 className="text-black sm:text-5xl text-2xl font-bold pt-2">CHOOSE THE RIGHT PLAN FOR YOU</h2>
      </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 sm:gap-8 mt-10">
             {plans.map((plan, index) => (
            <div className="bg-white rounded-lg cursor-pointer px-6 py-6">
                <div>
                    <h6 className="font-semibold text-black">{plan.title}</h6>
                    <h6 className="font-semibold pt-4 text-black">{plan.subtitle}</h6>
                    <h6 className="font-semibold pt-4 text-black">{plan.price}</h6>
                    <div className="bg-gray-200 h-[4px] mt-4"></div>
                </div>
                <div className="mt-1">
                    {plan.features.map((feature, index) => (
                        <h6 key={index} className={`text-lg ${feature.strike ? 'line-through text-gray-400' : 'text-black'}`}>{feature.text}</h6>
                    ))}
                </div>
                <div className="mt-10">
                    <button className={`border ${plan.buttonColor} rounded-lg py-1 text-lg ${plan.buttonTextColor} ${plan.buttonBgColor} ${plan.buttonTextHoverColor} ${plan.buttonHoverBgColor} transition ease-in-out duration-300 w-full`}>{plan.buttonText}</button>
                    <h6 className="mt-5 text-center text-[13px] text-gray-500">No payment today. Cancel anytime</h6>
                </div>
            </div>
               ))}
        </div>
       </div>
    )
}

export default PlanCard
