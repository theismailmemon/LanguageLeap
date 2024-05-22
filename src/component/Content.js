"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "./Footer";
import FeedbackItem from "./FeedbackItem";
import FAQ from "./FAQ";
import PlanCard from "./PlanCard";
import Feature from "./Feature";
import IntroductionPremium from "./IntroductionPremium";
import LeapLanguage from "./LeapLanguage";

const Content = () => {
  const router = useRouter();
  const [mainLoadingAnimation, setMainLoadingAnimation] = useState(false);
  const [showModal, setShowModal] = useState(false);



  const features = [
    {
      icon: "https://talkpal.ai/wp-content/uploads/2024/03/Comment.png",
      title: "Immersive Conversations",
      description: "Dive into captivating dialogues designed to optimize language retention and improve fluency."
    },
    {
      icon: "https://talkpal.ai/wp-content/uploads/2024/03/Time.png",
      title: "Immersive Conversations",
      description: "Dive into captivating dialogues designed to optimize language retention and improve fluency."
    },
    {
      icon: "https://talkpal.ai/wp-content/uploads/2024/03/Valume.png",
      title: "Immersive Conversations",
      description: "Dive into captivating dialogues designed to optimize language retention and improve fluency."
    }
  ];

  const introductionPremiumes = [
    {
      image: "https://talkpal.ai/wp-content/uploads/2024/03/TalkPal-Roleplays-2x.png",
      title: "Roleplays, Debates & Characters",
      description: "Immerse into fun, professional, or lifelike situations to boost your language skills."
    },
    {
      image: "https://talkpal.ai/wp-content/uploads/2024/03/TalkPal-Benefits-2x.png",
      title: "300+ Unique Experiences",
      description: "Tailored and engaging sessions based on your goals, learning pace, and language level."
    },
    {
      image: "https://talkpal.ai/wp-content/uploads/2024/03/TalkPal-Chat-2x.png",
      title: "Personalization",
      description: "Unlimited usage of built-in real-time translations and personalized feedback."
    }
  ];

  const feedbackData = [
    {
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s"
      ],
      text: "The most amazing thing that I discovered from now on to really improve my language skills, and it did, I very grateful for finding a so suitable and effective tool. The support is very attentive, they replied you and they are very polite. They really permit you to make the test for free.",
      author: "Tatiane",
      source: "Trustpilot"
    },
    {
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s"
      ],
      text: "Loving the feedback. The A.I really feels like you are talking to a real individual. I also like that it gives you feedback for your responses. The different scenarios are also awesome. I can see myself using each of the different roleplays in real life. Definitely feel more confident.",
      author: "Tatiane",
      source: "Trustpilot"
    },
    {
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s"
      ],
      text: "I’ve been using Talkpal AI for a week now and I’m genuinely impressed with its effectiveness in helping me learn German. Definitely great app to learn language with so much fun. Impressed with characters option. So fun to chat with mythological heroes.",
      author: "Tatiane",
      source: "Trustpilot"
    },
    {
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s"
      ],
      text: "My parents are learning English by themselves; currently using Google Translate and some basic English book. They can read some small words now but as usual they are struggling with speaking. I’ve been looking for a product that help them speak and I’m glad I found Talkpal. I tried myself and it’s fun and the Ai seems to be very intuitive. Can’t wait to see my parents’ improvement!",
      author: "Tatiane",
      source: "Trustpilot"
    },
    {
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s"
      ],
      text: "It’s mind blowing that this is AI-generated. I can practice several languages on a daily basis whenever I can/want. I had lost a big chunk of my knowledge over the years but I can feel that I’m already getting better again through Talkpal. Learning also new facts about history etc. is a bonus. I definitely recommend to try it out.",
      author: "Tatiane",
      source: "Trustpilot"
    },
    {
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj49B52Tba7q2_rS4XlkRmktIhZkTXhlT1RmmIL_31HA&s"
      ],
      text: "Loving this app!! Talkpal is unique from the more traditional language learning apps and gives you a much more realistic setting to practice your vocab and grammar skills. A must-have for anyone learning a new language.",
      author: "Tatiane",
      source: "Trustpilot"
    }
  ];

  const faqs = [
    {
      question: 'How is Talkpal different from other language learning apps?',
      answer: 'How is Talkpal different from other language learning apps?',
    },
    {
      question: 'What subscription options does Talkpal offer?',
      answer: 'How is Talkpal different from other language learning apps?',
    },
    {
      question: 'Can I cancel my Talkpal Premium subscription anytime?',
      answer: 'How is Talkpal different from other language learning apps?',
    },
    {
      question: 'Do you offer subscription options for educational institutions?',
      answer: 'How is Talkpal different from other language learning apps?',
    },
  ];

  const plans = [
    {
      title: "Limited Features",
      subtitle: "Basic Plan",
      price: "Free",
      buttonText: "Basic Plan",
      buttonColor: "border-gray-700",
      buttonBgColor: "bg-white",
      buttonTextColor: "hover:text-white",
      buttonTextHoverColor: "text-gray-700",
      buttonHoverBgColor: "hover:bg-gray-700",
      features: [
        { text: "Basic chat", strike: false },
        { text: "10 minute daily limit", strike: false },
        { text: "Roleplay & modes", strike: true },
        { text: "Personalized learning", strike: true },
        { text: "Advanced voices", strike: true },
        { text: "Ads free", strike: true }
      ]
    },
    {
      title: "14 Days Free",
      subtitle: "Premium 12 Month",
      price: "$4.99 / month",
      buttonText: "Free Trial",
      buttonColor: "border-gray-700",
      buttonBgColor: "bg-gray-700",
      buttonTextColor: "hover:text-white",
      buttonTextHoverColor: "text-white",
      buttonHoverBgColor: "hover:bg-gray-700",
      features: [
        { text: "Basic chat", strike: false },
        { text: "10 minute daily limit", strike: false },
        { text: "Roleplay & modes", strike: true },
        { text: "Personalized learning", strike: true },
        { text: "Advanced voices", strike: true },
        { text: "Ads free", strike: true }
      ]
    },
    {
      title: "14 Days Free",
      subtitle: "Premium 12 Months",
      price: "$9.99 / month",
      buttonText: "Free Trial",
      buttonColor: "border-gray-700",
      buttonBgColor: "bg-gray-700",
      buttonTextColor: "hover:text-white",
      buttonTextHoverColor: "text-white",
      buttonHoverBgColor: "hover:bg-gray-700",
      features: [
        { text: "Basic chat", strike: false },
        { text: "10 minute daily limit", strike: false },
        { text: "Roleplay & modes", strike: true },
        { text: "Personalized learning", strike: true },
        { text: "Advanced voices", strike: true },
        { text: "Ads free", strike: true }
      ]
    }
  ];

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
      {mainLoadingAnimation === true ? (<div className="">
        <div>
          <div className='absolute right-[50%] top-[50%] z-[100]'>
            <div className="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-indigo-700">
              <div className="absolute z-10 -ml-2 h-8 w-8 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin" fill="currentColor" stroke="currentColor" strokeWidth="0" viewBox="0 0 16 16">
                  <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z"></path>
                </svg>
              </div>
              <div className="absolute top-4 h-5 w-4 animate-bounce border-l-2 border-gray-200" style={{ transform: 'rotate(-90deg)' }}></div>
              <div className="absolute top-4 h-5 w-4 animate-bounce border-r-2 border-gray-200" style={{ transform: 'rotate(90deg)' }}></div>
            </div>
          </div>
        </div>
      </div>) : (
        <div>
          {showModal === true && (
            <div className="sm:px-6 px-4">
              <div onClick={() => { setShowModal(false) }} className="fixed inset-0 z-[100] bg-black bg-opacity-50 flex items-center justify-center">
                <div onClick={(e) => { e.stopPropagation() }}>
                  <iframe className="rounded-2xl sm:w-[560px] w-[350px] h-[240px] sm:h-[315px]" src="https://www.youtube.com/embed/-WMGWaLLgsc?si=Dxd0ku5ugL_dBAty" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          )}

          <div className="sm:pt-40 pt-10">
            <div className="sm:max-w-5xl mx-auto sm:px-6 px-4">
              <LeapLanguage languageButton={languageButton}/>
            </div>

            <div className="bg-gray-100 sm:mt-24 mt-16 sm:py-20 py-10 sm:px-6 px-4">
              <div className="sm:max-w-5xl mx-auto">
                <Feature features={features} />
              </div>
            </div>

            <div className="bg-black sm:py-20 py-10 px-4">
              <div className="sm:max-w-5xl mx-auto">
                <IntroductionPremium introductionPremiumes={introductionPremiumes} />
              </div>
            </div>

            <div className="bg-gray-100 sm:py-20 py-10 px-4">
              <div className="sm:max-w-5xl mx-auto">
                <div>
                  <PlanCard plans={plans} />
                </div>

                <div className="">
                  <FeedbackItem feedbackData={feedbackData} />
                </div>

                <div>
                  <FAQ faqs={faqs} />
                </div>

              </div>
            </div>

            <div>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content; 