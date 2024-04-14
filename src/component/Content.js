"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "./Footer";

const Content = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const languageButton = [
    {
      language: 'English',
      imageUrl: 'http://talkpal.ai/wp-content/uploads/2023/03/united-kingdom.png',
      altText: 'English Flag',
    },
    {
      language: 'Spanish',
      imageUrl: 'http://talkpal.ai/wp-content/uploads/2023/03/spain.png',
      altText: 'Spanish Flag',
    },
    {
      language: 'French',
      imageUrl: 'http://talkpal.ai/wp-content/uploads/2023/03/france.png',
      altText: 'French Flag',
    },
    {
      language: 'Italian',
      imageUrl: 'http://talkpal.ai/wp-content/uploads/2023/03/italy.png',
      altText: 'Italian Flag',
    },
    {
      language: 'German',
      imageUrl: 'http://talkpal.ai/wp-content/uploads/2023/03/germany.png',
      altText: 'German Flag',
    },
    {
      language: 'Ukrainian',
      imageUrl: 'http://talkpal.ai/wp-content/uploads/2023/04/ukraine.png',
      altText: 'Ukrainian Flag',
    },
    {
      language: 'Swedish',
      imageUrl: 'https://admin.talkpal.ai/uploads/2023/09/swedish.png',
      altText: 'Swedish Flag',
    },
  ];
  return (
    <div className="sm:pt-[76px] pt-[76px]">

      {showModal === true && (
        <div onClick={() => { setShowModal(false) }} className="fixed inset-0 z-[100] bg-black bg-opacity-50 flex items-center justify-center">
          <div onClick={(e) => { e.stopPropagation() }}>
            <iframe className="rounded-2xl sm:w-[560px] w-[360px] h-[240px] sm:h-[315px]" src="https://www.youtube.com/embed/-WMGWaLLgsc?si=Dxd0ku5ugL_dBAty" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      )}


      <div className="sm:pt-40 pt-10">
        <div className="sm:max-w-5xl mx-auto sm:px-3 px-3">
          <div className="sm:flex sm:gap-5 sm:justify-between sm:items-center">
            <div className="sm:w-[63%]">
              <h1 className="sm:text-[65px] text-3xl text-black font-bold sm:leading-[68px]">The Most Efficient Way to Learn a Language</h1>
              <p className="pt-6 sm:text-[21px] text-gray-600">Talkpal is a GPT-powered AI language tutor. Chat about unlimited amount of interesting topics either by writing or speaking while receiving messages with realistic voice.</p>
              <div className="mt-7">
                <h4 className="text-black text-2xl font-medium">You will practice:</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 mt-4 px-4">
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
            <div class="relative sm:w-64 sm:mt-0 mt-6 flex sm:justify-start justify-center">
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

              <div className="mt-12 flex sm:justify-start justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-x-6 gap-y-6 sm:gap-x-5 sm:gap-y-8">
                  {languageButton.map((button, index) => (
                    <button key={index} className="flex gap-5 w-full px-3 items-center">
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

        <div className="bg-gray-100 sm:mt-24 mt-16 sm:py-20 py-10 px-4">
          <div className="sm:max-w-5xl mx-auto sm:px-3 px-3">
            <h2 className="text-black sm:text-5xl text-2xl text-center font-bold">THE TALKPAL DIFFERENCE</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 sm:gap-8 sm:mt-20 mt-10">
              <div className="bg-white rounded-md cursor-pointer px-6 py-6">
                <img src="https://talkpal.ai/wp-content/uploads/2024/03/Comment.png" className="sm:w-16 w-14" />
                <h2 className="font-medium sm:leading-[35px] sm:text-[26px] text-[20px] pt-5">Immersive Conversations</h2>
                <p className="text-lg pt-3">Dive into captivating dialogues designed to optimize language retention and improve fluency.</p>
              </div>
              <div className="bg-white rounded-md cursor-pointer px-6 py-6">
                <img src="https://talkpal.ai/wp-content/uploads/2024/03/Time.png" className="sm:w-16 w-14" />
                <h2 className="font-mesm:dium leading-8 sm:text-[26px] text-[20px] pt-5">Immersive Conversations</h2>
                <p className="text-lg pt-3">Dive into captivating dialogues designed to optimize language retention and improve fluency.</p>
              </div>
              <div className="bg-white rounded-md cursor-pointer px-6 py-6">
                <img src="https://talkpal.ai/wp-content/uploads/2024/03/Valume.png" className="sm:w-16 w-14" />
                <h2 className="font-mesm:dium leading-8 sm:text-[26px] text-[20px] pt-5">Immersive Conversations</h2>
                <p className="text-lg pt-3">Dive into captivating dialogues designed to optimize language retention and improve fluency.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black sm:py-20 py-10 px-4">
          <div className="sm:max-w-5xl mx-auto sm:px-3 px-3">
            <h2 className="text-white sm:text-5xl text-2xl text-center font-bold">INTRODUCING TALKPAL PREMIUM</h2>
            <h2 className="text-white sm:text-base text-base text-center pt-4 font-bold">AVAILABLE IN 57+ LANGUAGES</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 sm:gap-8 mt-10">
              <div className="">
                <img src="https://talkpal.ai/wp-content/uploads/2024/03/TalkPal-Roleplays-2x.png" className="cursor-pointer" />
                <h2 className="font-medium sm:leading-[35px] sm:text-[26px] text-[20px] pt-5 text-white">Roleplays, Debates & Characters</h2>
                <p className="text-lg pt-3 text-white">Immerse into fun, professional, or lifelike situations to boost your language skills..</p>
              </div>
              <div className="">
                <img src="https://talkpal.ai/wp-content/uploads/2024/03/TalkPal-Benefits-2x.png" className="cursor-pointer" />
                <h2 className="font-mesm:dium leading-8 sm:text-[26px] text-[20px] pt-5 text-white">300+ Unique Experiences</h2>
                <p className="text-lg pt-3 text-white">Tailored and engaging sessions based on your goals, learning pace, and language level..</p>
              </div>
              <div className="">
                <img src="https://talkpal.ai/wp-content/uploads/2024/03/TalkPal-Chat-2x.png" className="cursor-pointer" />
                <h2 className="font-mesm:dium leading-8 sm:text-[26px] text-[20px] pt-5 text-white">Personalization</h2>
                <p className="text-lg pt-3 text-white">Unlimited usage of built-in real-time translations and personalized feedback.</p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <button className="bg-white text-black py-5 px-[36px] sm:w-auto w-full text-sm font-semibold">START FREE 14 DAYS TRIAL</button>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 sm:py-20 py-10 px-4">
          <div className="sm:max-w-5xl mx-auto sm:px-3 px-3">
            <div>
              <div>
                <h2 className="text-gray-700 font-bold">PRICING PLANS</h2>
                <h2 className="text-black sm:text-5xl text-2xl font-bold pt-2">CHOOSE THE RIGHT PLAN FOR YOU</h2>
              </div>
              <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 sm:gap-8 mt-10">

                <div className="bg-white rounded-lg cursor-pointer px-6 py-6">
                  <div>
                    <h6 className="font-semibold text-black">Limited Features</h6>
                    <h6 className="font-semibold pt-4 text-black">Basic Plan</h6>
                    <h6 className="font-semibold pt-4 text-black">Free</h6>
                    <div className="bg-gray-200 h-[4px] mt-4"></div>
                  </div>
                  <div className="mt-1">
                    <h6 className="text-lg">Basic chat</h6>
                    <h6 className="text-lg">10 minute daily limit</h6>
                    <strike className="block text-lg text-gray-400">Roleplay & modes</strike>
                    <strike className="block text-lg text-gray-400">Personalized learning</strike>
                    <strike className="block text-lg text-gray-400">Advanced voices</strike>
                    <strike className="block text-lg text-gray-400">Ads free</strike>
                  </div>
                  <div className="mt-10">
                    <button className="border border-gray-700 rounded-lg text-gray-700 py-1 text-lg hover:text-white hover:bg-gray-700 transition ease-in-out duration-300 w-full">Basic Plan</button>
                    <h6 className="mt-5 text-center text-[13px] text-gray-500">Limited features</h6>
                  </div>
                </div>
                <div className="bg-white rounded-lg cursor-pointer px-6 py-6">
                  <div>
                    <h6 className="font-semibold text-black">14 Days Free</h6>
                    <h6 className="font-semibold pt-4 text-black">Premium 12 Month</h6>
                    <h6 className="font-medium pt-4 text-gray-400">$4.99 / month</h6>
                    <div className="bg-gray-200 h-[4px] mt-4"></div>
                  </div>
                  <div className="mt-1">
                    <h6 className="text-lg">Basic chat</h6>
                    <h6 className="text-lg">10 minute daily limit</h6>
                    <strike className="block text-lg text-gray-400">Roleplay & modes</strike>
                    <strike className="block text-lg text-gray-400">Personalized learning</strike>
                    <strike className="block text-lg text-gray-400">Advanced voices</strike>
                    <strike className="block text-lg text-gray-400">Ads free</strike>
                  </div>
                  <div className="mt-10">
                    <button className="border border-gray-700 rounded-lg py-1 text-lg text-white bg-gray-700 transition ease-in-out duration-300 w-full">Free Trial</button>
                    <h6 className="mt-5 text-center text-[13px] text-gray-500">No payment today. Cancel anytime</h6>
                  </div>
                </div>
                <div className="bg-white rounded-lg cursor-pointer px-6 py-6">
                  <div>
                    <h6 className="font-semibold text-black">14 Days Free</h6>
                    <h6 className="font-semibold pt-4 text-black">Premium 12 Months</h6>
                    <h6 className="font-medium pt-4 text-gray-400">$9.99 / month</h6>
                    <div className="bg-gray-200 h-[4px] mt-4"></div>
                  </div>
                  <div className="mt-1">
                    <h6 className="text-lg">Basic chat</h6>
                    <h6 className="text-lg">10 minute daily limit</h6>
                    <strike className="block text-lg text-gray-400">Roleplay & modes</strike>
                    <strike className="block text-lg text-gray-400">Personalized learning</strike>
                    <strike className="block text-lg text-gray-400">Advanced voices</strike>
                    <strike className="block text-lg text-gray-400">Ads free</strike>
                  </div>
                  <div className="mt-10">
                    <button className="border border-gray-700 rounded-lg py-1 text-lg text-white bg-gray-700 transition ease-in-out duration-300 w-full">Free Trial</button>
                    <h6 className="mt-5 text-center text-[13px] text-gray-500">No payment today. Cancel anytime</h6>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <h6 className="mt-5 text-center text-[14px] text-gray-500">*Prices & currencies may vary depending on your location</h6>
              <div className="mt-16">
                <h2 className="text-black sm:text-5xl text-xl font-bold pt-2 text-center">LEARN ANYWHERE ANYTIME</h2>
                <h2 className="text-gray-700 font-bold pt-4 text-center">DOWNLOAD TALKPAL APP</h2>
                <div className="mt-8 flex items-center justify-center sm:gap-10 gap-5">
                  <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1701561600" className="sm:w-40 w-36 h-16 cursor-pointer" />
                  <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" className="sm:w-40 w-36 h-16 cursor-pointer" />
                </div>
                <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 sm:gap-8 mt-20 sm:mt-20">
                  <div className="bg-white rounded-lg px-6 py-6 relative">
                    <div className="flex justify-center">
                      <div className="absolute -top-4">
                        <div className="border-2 border-gray-700 rounded-full h-8 w-8 flex justify-center items-start text-2xl font-extrabold"></div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center justify-center gap-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                      </div>
                      <p className="pt-5 text-gray-600">The most amazing thing that I discovered from now on to really improve my language skills, and it did, I very grateful for finding a so suitable and effective tool. The support is very attentive, they replied you and they are very polite. They really permit you to make the test for free.</p>
                    </div>
                    <div className="mt-8">
                      <h6 className="text-black font-semibold">Tatiane</h6>
                      <h6 className="text-gray-600">on Trustpilot</h6>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg px-6 py-6 relative">
                    <div className="flex justify-center">
                      <div className="absolute -top-4">
                        <div className="border-2 border-gray-700 rounded-full h-8 w-8 flex justify-center items-start text-2xl font-extrabold"></div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center justify-center gap-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                      </div>
                      <p className="pt-5 text-gray-600">Loving the feedback. The A.I really feels like you are talking to a real individual. I also like that it gives you feedback for your responses. The different scenarios are also awesome. I can see myself using each of the different roleplays in real life. Definitely feel more confident.</p>
                    </div>
                    <div className="mt-8">
                      <h6 className="text-black font-semibold">Tatiane</h6>
                      <h6 className="text-gray-600">on Trustpilot</h6>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg px-6 py-6 relative">
                    <div className="flex justify-center">
                      <div className="absolute -top-4">
                        <div className="border-2 border-gray-700 rounded-full h-8 w-8 flex justify-center items-start text-2xl font-extrabold"></div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center justify-center gap-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                      </div>
                      <p className="pt-5 text-gray-600">I’ve been using Talkpal AI for a week now and I’m genuinely impressed with its effectiveness in helping me learn German. Definitely great app to learn language with so much fun. Impressed with characters option. So fun to chat with mythological heroes.</p>
                    </div>
                    <div className="mt-8">
                      <h6 className="text-black font-semibold">Tatiane</h6>
                      <h6 className="text-gray-600">on Trustpilot</h6>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg px-6 py-6 relative">
                    <div className="flex justify-center">
                      <div className="absolute -top-4">
                        <div className="border-2 border-gray-700 rounded-full h-8 w-8 flex justify-center items-start text-2xl font-extrabold"></div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center justify-center gap-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                      </div>
                      <p className="pt-5 text-gray-600">My parents are learning English by themselves; currently using Google Translate and some basic English book. They can read some small words now but as usual they are struggling with speaking. I’ve been looking for a product that help them speak and I’m glad I found Talkpal. I tried myself and it’s fun and the Ai seems to be very intuitive. Can’t wait to see my parents’ improvement!</p>
                    </div>
                    <div className="mt-8">
                      <h6 className="text-black font-semibold">Tatiane</h6>
                      <h6 className="text-gray-600">on Trustpilot</h6>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg px-6 py-6 relative">
                    <div className="flex justify-center">
                      <div className="absolute -top-4">
                        <div className="border-2 border-gray-700 rounded-full h-8 w-8 flex justify-center items-start text-2xl font-extrabold"></div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center justify-center gap-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                      </div>
                      <p className="pt-5 text-gray-600">It’s mind blowing that this is AI-generated. I can practice several languages on a daily basis whenever I can/want. I had lost a big chunk of my knowledge over the years but I can feel that I’m already getting better again through Talkpal. Learning also new facts about history etc. is a bonus. I definitely recommend to try it out.</p>
                    </div>
                    <div className="mt-8">
                      <h6 className="text-black font-semibold">Tatiane</h6>
                      <h6 className="text-gray-600">on Trustpilot</h6>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg px-6 py-6 relative">
                    <div className="flex justify-center">
                      <div className="absolute -top-4">
                        <div className="border-2 border-gray-700 rounded-full h-8 w-8 flex justify-center items-start text-2xl font-extrabold"></div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center justify-center gap-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s" className="h-5 w-5" />
                      </div>
                      <p className="pt-5 text-gray-600">Loving this app!! Talkpal is unique from the more traditional language learning apps and gives you a much more realistic setting to practice your vocab and grammar skills. A must-have for anyone learning a new language.</p>
                    </div>
                    <div className="mt-8">
                      <h6 className="text-black font-semibold">Tatiane</h6>
                      <h6 className="text-gray-600">on Trustpilot</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="sm:mt-32 mt-10">
                <h2 className="text-black sm:text-5xl text-2xl font-bold pt-2">FAQ</h2>
                <div className="sm:mt-16 mt-8">
                  <div className="w-full cursor-pointer py-3 px-6 bg-white border sm:my-8 my-4 border-gray-300 rounded flex items-center justify-between gap-8">
                    <div>
                      <h1 className="text-gray-700 sm:text-2xl font-medium">How is Talkpal different from other language learning apps?</h1>
                    </div>
                    <div>
                      <div className="flex justify-center items-center bg-gray-700 rounded-full h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="16" height="16" viewBox="0 0 24 24" stroke-width="3" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 5l0 14" />
                          <path d="M5 12l14 0" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full cursor-pointer py-3 px-6 bg-white border sm:my-8 my-4 border-gray-300 rounded flex items-center justify-between gap-8">
                    <div>
                      <h1 className="text-gray-700 sm:text-2xl font-medium">What subscription options does Talkpal offer?</h1>
                    </div>
                    <div>
                      <div className="flex justify-center items-center bg-gray-700 rounded-full h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="16" height="16" viewBox="0 0 24 24" stroke-width="3" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 5l0 14" />
                          <path d="M5 12l14 0" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full cursor-pointer py-3 px-6 bg-white border sm:my-8 my-4 border-gray-300 rounded flex items-center justify-between gap-8">
                    <div>
                      <h1 className="text-gray-700 sm:text-2xl font-medium">Can I cancel my Talkpal Premium subscription anytime?</h1>
                    </div>
                    <div>
                      <div className="flex justify-center items-center bg-gray-700 rounded-full h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="16" height="16" viewBox="0 0 24 24" stroke-width="3" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 5l0 14" />
                          <path d="M5 12l14 0" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full cursor-pointer py-3 px-6 bg-white border sm:my-8 my-4 border-gray-300 rounded flex items-center justify-between gap-8">
                    <div>
                      <h1 className="text-gray-700 sm:text-2xl font-medium">Do you offer subscription options for educational institutions?</h1>
                    </div>
                    <div>
                      <div className="flex justify-center items-center bg-gray-700 rounded-full h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="16" height="16" viewBox="0 0 24 24" stroke-width="3" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 5l0 14" />
                          <path d="M5 12l14 0" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-12">
                    <button className="text-white bg-black py-[14px] px-[36px] sm:w-auto w-full text- font-semibold">About Us</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Content; 