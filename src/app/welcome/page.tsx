"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
const Page = () => {
  const router = useRouter();
  const [continuePage, setContinuePage] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const progressPercentage = (continuePage - 1) * (100 / 6);
  const [loadingContinue, setLoadingContinue] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedNetwrok, setSelectedNetwrok] = useState(null);
  const [selectedHear, setSelectedHear] = useState(null);
  const [selectedDailySpentTime, setSelectedDailySpentTime] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropDown, setIsDropDown] = useState(true);
  const dropdownRef = useRef(null);
  const [progressWidth, setProgressWidth] = useState(0);



  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);
  const languages = [
    {
      id: "1",
      name: "Spanish",
      learners: "43.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    },
    {
      id: "2",
      name: "Bahasa Indonesia",
      learners: "31.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/2560px-Flag_of_Indonesia.svg.png",
    },
    {
      id: "3",
      name: "Italiano",
      learners: "72.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    },
    {
      id: "4",
      name: "Nederlands",
      learners: "29.4M",
      flagUrl:
        "https://www.netherlands-tourism.com/wp-content/uploads/2013/07/Flag-of-The-Netherlands3.png",
    },
    {
      id: "5",
      name: "Polski",
      learners: "12.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Poland_%28normative%29.svg/2560px-Flag_of_Poland_%28normative%29.svg.png",
    },
    {
      id: "6",
      name: "Switzerland",
      learners: "22.4M",
      flagUrl:
        "https://cdn.britannica.com/43/4543-004-C0D5C6F4/Flag-Switzerland.jpg",
    },
    {
      id: "7",
      name: "Alba",
      learners: "13.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1200px-Flag_of_Scotland.svg.png",
    },
    {
      id: "8",
      name: "Spanish",
      learners: "43.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    },
    {
      id: "9",
      name: "Bahasa Indonesia",
      learners: "31.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/2560px-Flag_of_Indonesia.svg.png",
    },
    {
      id: "10",
      name: "Italiano",
      learners: "72.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    },
    {
      id: "11",
      name: "Nederlands",
      learners: "29.4M",
      flagUrl:
        "https://www.netherlands-tourism.com/wp-content/uploads/2013/07/Flag-of-The-Netherlands3.png",
    },
    {
      id: "12",
      name: "Polski",
      learners: "12.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Poland_%28normative%29.svg/2560px-Flag_of_Poland_%28normative%29.svg.png",
    },
    {
      id: "13",
      name: "Switzerland",
      learners: "22.4M",
      flagUrl:
        "https://cdn.britannica.com/43/4543-004-C0D5C6F4/Flag-Switzerland.jpg",
    },
    {
      id: "14",
      name: "Alba",
      learners: "13.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1200px-Flag_of_Scotland.svg.png",
    },
    {
      id: "15",
      name: "Spanish",
      learners: "43.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    },
    {
      id: "16",
      name: "Bahasa Indonesia",
      learners: "31.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/2560px-Flag_of_Indonesia.svg.png",
    },
    {
      id: "17",
      name: "Italiano",
      learners: "72.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    },
    {
      id: "18",
      name: "Nederlands",
      learners: "29.4M",
      flagUrl:
        "https://www.netherlands-tourism.com/wp-content/uploads/2013/07/Flag-of-The-Netherlands3.png",
    },
    {
      id: "19",
      name: "Polski",
      learners: "12.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Poland_%28normative%29.svg/2560px-Flag_of_Poland_%28normative%29.svg.png",
    },
    {
      id: "20",
      name: "Switzerland",
      learners: "22.4M",
      flagUrl:
        "https://cdn.britannica.com/43/4543-004-C0D5C6F4/Flag-Switzerland.jpg",
    },
    {
      id: "21",
      name: "Spanish",
      learners: "43.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    },
    {
      id: "22",
      name: "Bahasa Indonesia",
      learners: "31.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/2560px-Flag_of_Indonesia.svg.png",
    },
    {
      id: "23",
      name: "Italiano",
      learners: "72.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    },
    {
      id: "24",
      name: "Nederlands",
      learners: "29.4M",
      flagUrl:
        "https://www.netherlands-tourism.com/wp-content/uploads/2013/07/Flag-of-The-Netherlands3.png",
    },
    {
      id: "25",
      name: "Polski",
      learners: "12.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Poland_%28normative%29.svg/2560px-Flag_of_Poland_%28normative%29.svg.png",
    },
    {
      id: "26",
      name: "Switzerland",
      learners: "22.4M",
      flagUrl:
        "https://cdn.britannica.com/43/4543-004-C0D5C6F4/Flag-Switzerland.jpg",
    },
    {
      id: "27",
      name: "Alba",
      learners: "13.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1200px-Flag_of_Scotland.svg.png",
    },
    {
      id: "28",
      name: "Spanish",
      learners: "43.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    },
    {
      id: "29",
      name: "Switzerland",
      learners: "22.4M",
      flagUrl:
        "https://cdn.britannica.com/43/4543-004-C0D5C6F4/Flag-Switzerland.jpg",
    },
    {
      id: "30",
      name: "Nederlands",
      learners: "29.4M",
      flagUrl:
        "https://www.netherlands-tourism.com/wp-content/uploads/2013/07/Flag-of-The-Netherlands3.png",
    },
    {
      id: "31",
      name: "Spanish",
      learners: "43.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    },
    {
      id: "32",
      name: "Bahasa Indonesia",
      learners: "31.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/2560px-Flag_of_Indonesia.svg.png",
    },
    {
      id: "33",
      name: "Italiano",
      learners: "72.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    },
    {
      id: "34",
      name: "Nederlands",
      learners: "29.4M",
      flagUrl:
        "https://www.netherlands-tourism.com/wp-content/uploads/2013/07/Flag-of-The-Netherlands3.png",
    },
    {
      id: "35",
      name: "Polski",
      learners: "12.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_Poland_%28normative%29.svg/2560px-Flag_of_Poland_%28normative%29.svg.png",
    },
    {
      id: "36",
      name: "Switzerland",
      learners: "22.4M",
      flagUrl:
        "https://cdn.britannica.com/43/4543-004-C0D5C6F4/Flag-Switzerland.jpg",
    },
    {
      id: "37",
      name: "Alba",
      learners: "13.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1200px-Flag_of_Scotland.svg.png",
    },
    {
      id: "38",
      name: "Spanish",
      learners: "43.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    },
    {
      id: "39",
      name: "Bahasa Indonesia",
      learners: "31.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/2560px-Flag_of_Indonesia.svg.png",
    },
    {
      id: "40",
      name: "Italiano",
      learners: "72.4M",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    },
  ];

  const dropdownItems = [
    { name: "English", id: 1 },
    { name: "Hindi", id: 2 },
    { name: "Urdu", id: 3 },
    { name: "Spanish", id: 4 },
    { name: "French", id: 5 },
    { name: "Arabic", id: 6 },
    { name: "Bengali", id: 7 },
    { name: "Russian", id: 8 },
    { name: "Portuguese", id: 9 },
    { name: "German", id: 10 },
    { name: "Japanese", id: 11 },
    { name: "Chinese", id: 12 },
    { name: "Korean", id: 13 },
    { name: "Italian", id: 14 },
    { name: "Dutch", id: 15 },
    { name: "Turkish", id: 16 },
    { name: "Swedish", id: 17 },
    { name: "Polish", id: 18 },
    { name: "Vietnamese", id: 19 },
    { name: "Thai", id: 20 },
    { name: "Greek", id: 21 },
    { name: "Hebrew", id: 22 },
    { name: "Czech", id: 23 },
    { name: "Danish", id: 24 },
    { name: "Finnish", id: 25 },
    { name: "Hungarian", id: 26 },
    { name: "Norwegian", id: 27 },
    { name: "Romanian", id: 28 },
    { name: "Indonesian", id: 29 },
    { name: "Malay", id: 30 },
    { name: "Filipino", id: 31 },
    { name: "Slovak", id: 32 },
    { name: "Maltese", id: 33 },
    { name: "Icelandic", id: 34 },
    { name: "Latvian", id: 35 },
    { name: "Lithuanian", id: 36 },
    { name: "Estonian", id: 37 },
    { name: "Slovenian", id: 38 },
    { name: "Croatian", id: 39 },
    { name: "Serbian", id: 40 }

  ];
  const selectedLanguageMainName = languages.find(language => language.id === selectedLanguage)?.name;

  const network = [
    {
      id: 1,
      src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/f45d9d583cea02515c7140fd7e1a64cd.svg",
      name: `I’m new to ${selectedLanguageMainName}`,
    },
    {
      id: 2,
      src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/4ffe73e403bdaffab308c2bcd2f9d9fd.svg",
      name: "I know some words and phrases",
    },
    {
      id: 3,
      src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/4491ac5a10b0c9a9079abb992cdc0358.svg",
      name: "I can have simple conversations",
    },
    {
      id: 4,
      src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/93e96149851cc15df74ccc874bfc5134.svg",
      name: "I am intermediate or higher",
    },
  ];

  const hear = [
    {
      id: 1,
      src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/f382d7a1e1a958dc07fca0deae2d16b7.svg",
      name: "Spend time productively",
    },
    {
      id: 2,
      src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/d7315c6c7bbeba67df5ebda771d33da1.svg",
      name: "Support my education",
    },
    {
      id: 3,
      src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/5bbfb55fd21e21012a228bcef29bb557.svg",
      name: "Prepare for travel",
    },
    {
      id: 4,
      src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/484f1c9610935dd40094a9f7cf06e009.svg",
      name: "Connect with people",
    },
    {
      id: 5,
      src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/61a06f02b3b988d1c388d484bc0e52e6.svg",
      name: "Boost my career",
    },
    {
      id: 6,
      src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/ab81d610a8a79f174a4db0a6085e7e2c.svg",
      name: "Just for fun",
    },
    {
      id: 7,
      src: "https://d35aaqx5ub95lt.cloudfront.net/images/funboarding/0e2332e8d4074ed5db4ca9152ffd0d25.svg",
      name: "Other",
    },
  ];

  const dailySpentTime = [
    { id: 1, time: "5", label: "Casual" },
    { id: 2, time: "10", label: "Regular" },
    { id: 3, time: "15", label: "Serious" },
    { id: 4, time: "20", label: "Intense" },
  ];

  const blockNotification = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        // Notification.permission = "denied";
        console.log("Notification permission blocked");
      } else {
        console.log("Notification permission was not granted before");
      }
    });
  };

  const allowNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          setContinuePage((prevState) => prevState + 1);
          // Notification permission granted
          // You can now display notifications
          new Notification("Notification Permission Granted");
        } else {
          // Notification permission denied
          console.log("Notification permission denied");
        }
      });
    } else {
      // Notification permission already granted
      console.log("Notification permission already granted");
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleThirdContinue = (name) => {
    setSelectedCompany(name);
    setIsDropDown(false); // Close the dropdown after selection
  };

  useEffect(() => {
    // Function to handle outside click
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropDown(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSecondContinue = (languageId) => {
    setSelectedLanguage(languageId);
  };

  const handleForthContinue = (networkId) => {
    setSelectedNetwrok(networkId);
  };
  const handleFifthContinue = (hearId) => {
    setSelectedHear(hearId);
  };
  const handleContinue = (startingSpentTime) => {
    setSelectedDailySpentTime(startingSpentTime);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const selectedLanguageTooltipName = languages.find(language => language.id === selectedLanguage)?.name;
  return (
    <>

      {continuePage === 7 ? null : (
        <div
          className={`fixed w-full bg-white top-0 sm:pt-8 pt-5 sm:pb-3  ${isScrolled
            ? "border-gray-200 transition-all duration-100"
            : ""
            }`}
        >
          <div className="sm:mx-auto sm:max-w-6xl sm:px-6 px-4">
            <div className="flex justify-start items-center gap-4">
              <div className="">
                <svg
                  onClick={() => {
                    setContinuePage((prevState) => Math.max(prevState - 1, 1)); // Decrement the state by 1, but ensure it doesn't go below 1
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-left cursor-pointer hover:opacity-80 transition ease-in-out duration-200"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="#9ca3af"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M5 12l6 6" />
                  <path d="M5 12l6 -6" />
                </svg>
              </div>
              <div className="bg-gray-200 w-full h-[18px] rounded-l-full rounded-r-full">
                <div
                  className="h-full bg-gray-700 tranistion ease-in-out duration-300 rounded-l-full rounded-r-full"
                  style={{
                    width: `${progressPercentage}%`,
                    transition: "width 0.5s ease",
                  }}
                ></div>
              </div>
            </div>
            {/* 28 */}
            <div className="flex sm:gap-6 gap-5 items-center sm:mt-12 mt-5">
              <img
                src="https://seeklogo.com/images/D/duolingo-logo-23407F109C-seeklogo.com.png"
                alt=""
                className="sm:h-36 sm:w-36 h-24 w-24"
              />
              <div className="border-2 flex items-center justify-center rounded-[14px] sm:px-5 px-4 sm:py-[12px] sm:text-lg py-[12px] text-[17px] font-medium text-gray-700 mb-5 border-gray-200 sm:w-auto w-[calc(100vw-42vw)]">
                {continuePage === 1 && (
                  <h1 className="relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">
                    Which language do you want to learn?
                  </h1>
                )}
                {continuePage === 2 && (
                  <h1 className="relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">
                    What is your native language?
                  </h1>
                )}
                {continuePage === 3 && (
                  <h1 className="relative flex gap-2 w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">
                    <span>How much</span>
                    <span className="font-semibold text-black">{selectedLanguageTooltipName}</span>
                    <span>do you know?</span>
                  </h1>
                )}
                {continuePage === 4 && (
                  <h1 className="relative flex gap-2 w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">
                    <span> Why are you learning</span>  <span className="font-semibold text-black">{selectedLanguageTooltipName}</span>?
                  </h1>
                )}
                {continuePage === 5 && (
                  <h1 className="relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">
                    I’ll remind you to practice so it becomes a habit!
                  </h1>
                )}
                {continuePage === 6 && (
                  <h1 className="relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">
                    What’s your daily learning goal?
                  </h1>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {continuePage === 1 && (
        <div className="">
          <div className="my-6 sm:mt-[282px] mt-[218px] mx-auto sm:max-w-6xl sm:px-6 px-4">
            <div className="sm:block hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-28 ">
                {languages.map((language, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-[16px] border-2 py-12 ${selectedLanguage === language.id
                      ? "bg-sky-100 border-sky-300"
                      : "border-gray-200 hover:bg-gray-100"
                      }`}
                    onClick={() => handleSecondContinue(language.id)}
                  >
                    <img
                      src={language.flagUrl}
                      alt=""
                      className="mx-auto w-[80px] h-[62px] rounded-xl object-cover shadow"
                    />
                    <div className="pt-[13px]">
                      <h2
                        className={`${selectedLanguage === language.id
                          ? "text-sky-500"
                          : "text-gray-600"
                          } text-center font-semibold`}
                      >
                        {language.name}
                      </h2>
                    </div>
                    <div className="pt-[2px]">
                      <h4
                        className={`${selectedLanguage === language.id
                          ? "text-sky-500"
                          : "text-gray-600"
                          } text-center  font-medium`}
                      >
                        {language.learners} Learners
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:hidden block">
              <div className="sm:flex sm:justify-center">
                <div className="grid grid-cols-1 gap-4">
                  {languages.map((language, index) => (
                    <div
                      key={language.id}
                      className={`px-[18px] py-[8.7px] cursor-pointer flex items-center gap-5 rounded-[14px] border-2 w-full ${selectedLanguage === language.id
                        ? "border-sky-300 bg-sky-100"
                        : "border-gray-200 hover:bg-gray-100"
                        }`}
                      onClick={() => handleSecondContinue(language.id)}
                    >
                      <img
                        src={language.flagUrl}
                        alt=""
                        className="w-[48px] h-[38px] rounded-lg object-cover shadow"
                      />
                      <h1
                        className={`${selectedLanguage === language.id
                          ? "text-sky-500"
                          : "text-gray-600"
                          } text-[17px] font-bold`}
                      >
                        {language.name}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {continuePage === 2 && (
        <div className="">
          <div className="my-6 sm:mt-[282px] mt-[218px] mx-auto sm:max-w-6xl sm:px-5 px-4">
            <div className="sm:flex sm:justify-center sm:mt-20 my-8">
              <div className=" flex items-center justify-center">

                <div ref={dropdownRef} className={`mt-2 relative rounded-md shadow-lg sm:w-96 w-full ring-1 ring-black ring-opacity-5 space-y-2`}>
                  {/* Search input */}
                  {isDropDown === true ? (
                    <input
                      onChange={handleInputChange}
                      value={searchTerm}
                      onFocus={() => setIsDropDown(true)} // Show dropdown when input is focused
                      className="block w-full px-4 py-2 h-10 placeholder:text-white rounded-md text-white bg-gray-700 focus:outline-none"
                      type="text"
                      placeholder="Search Language"
                      autoComplete="off"
                    />
                  ) : (
                    <div onClick={() => { setIsDropDown(true); }} className="cursor-default flex items-center justify-between h-10 block w-full px-4 py-2 text-white bg-gray-700 rounded-md focus:outline-none">
                    {selectedLanguage ? dropdownItems.find(item => item.id === selectedLanguage)?.name || 'Search Language' : 'Search Language'}
    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-[18px] h-[18px]">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
    
                  </div>
                  )}
                  {/* Dropdown content goes here */}

                  {isDropDown && (
                    <div className='absolute h-64 bg-white shadow border rounded-lg overflow-y-scroll w-full z-[100]'>
                      <div className=''>
                        {dropdownItems
                          .filter((item) =>
                            item.name.toLowerCase().includes(searchTerm.toLowerCase())
                          )
                          .map((item, index) => (
                            <a
                              key={index}
                              onClick={() => handleThirdContinue(item.id)}
                              className={`${selectedCompany === item.id ? 'bg-gray-200' : 'hover:bg-gray-200'} border-b block px-5 py-[10px] text-gray-700 cursor-pointer`}
                            >
                              {item.name}
                            </a>
                          ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {continuePage === 3 && (
        <div className="">
          <div className="my-6 sm:mt-[282px] mt-[218px] mx-auto sm:max-w-6xl sm:px-6 px-4">
            <div className="sm:flex sm:justify-center sm:mt-20 my-8">
              <div className="grid grid-cols-1 gap-4">
                {network.map((network, index) => (
                  <div
                    key={network.id}
                    className={`sm:px-[18px] sm:py-[13px] px-[20px] py-[8.7px] cursor-pointer flex items-center gap-5 rounded-[14px] border-2 sm:w-[530px] w-full ${selectedNetwrok === network.id
                      ? "border-sky-300 bg-sky-100"
                      : "border-gray-200 hover:bg-gray-100"
                      }`}
                    onClick={() => handleForthContinue(network.id)}
                  >
                    <img src={network.src} alt="" />
                    <h1
                      className={`${selectedNetwrok === network.id
                        ? "text-sky-500"
                        : "text-gray-600"
                        } text-[17px] font-bold`}
                    >
                      {network.name}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {continuePage === 4 && (
        <div className="">
          <div className="my-6 sm:mt-[282px] mt-[218px] mx-auto sm:max-w-6xl sm:px-6 px-4">
            <div className="sm:flex sm:justify-center sm:mt-20 my-8">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:max-w-[780px] w-full">
                {hear.map((hear, index) => (
                  <div
                    key={hear.id}
                    className={`sm:px-[18px] sm:py-[20px] px-[18px] py-[8.7px] cursor-pointer flex items-center gap-5 rounded-[14px] border-2 w-full sm:max-w-[390px] w-full ${selectedHear === hear.id
                      ? "border-sky-300 bg-sky-100"
                      : "border-gray-200 hover:bg-gray-100"
                      }`}
                    onClick={() => handleFifthContinue(hear.id)}
                  >
                    <img src={hear.src} alt="" />
                    <h1
                      className={`${selectedHear === hear.id
                        ? "text-sky-500"
                        : "text-gray-600"
                        } text-[17px] font-bold`}
                    >
                      {hear.name}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {continuePage === 5 && (
        <div className="">
          <div className="my-6 sm:mt-[282px] mt-[218px] mx-auto sm:max-w-6xl sm:px-6 px-4">
            <div className="sm:flex sm:justify-center sm:mt-20 my-8">
              <div>
                <div className="bg-white shadow border-2 border-gray-200 sm:w-[490px] rounded-lg pl-6 pr-2 pt-2 pb-7">
                  <div className="flex justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer icon icon-tabler icon-tabler-x hover:opacity-80 transition ease-in-out dur"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#374151"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 6l-12 12" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </div>
                  <h1 className="sm:text-[21px] text-[18px] font-medium text-gray-700">
                    www.languageleap.com wants to
                  </h1>
                  <div className="mt-2">
                    <h3 className="flex items-center gap-3">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-bell-filled text-gray-600"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z"
                            stroke-width="0"
                            fill="currentColor"
                          />
                          <path
                            d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z"
                            stroke-width="0"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <span className="font-medium sm:text-lg text-gray-700">
                        Show notifications
                      </span>
                    </h3>
                  </div>
                  <div className="flex justify-end gap-4 mt-6 pr-4">
                    <button
                      className="hover:bg-gray-50 transition ease-in-out duration-300 flex justify-center items-center text-gray-400 text-[17px] sm:text-[20px] border-2 border-gray-200 rounded-lg sm:h-[50px] h-[44px] sm:w-[106px] w-[85px] font-semibold"
                      onClick={blockNotification}
                    >
                      Block
                    </button>
                    <button
                      className="hover:bg-gray-50 transition ease-in-out duration-300 flex justify-center items-center text-sky-400 text-[15px] sm:text-[18px] border-2 border-gray-200 rounded-lg sm:h-[50px] h-[44px] sm:w-[106px] w-[85px] font-semibold"
                      onClick={allowNotification}
                    >
                      ALLOW
                    </button>
                  </div>
                </div>
                <div className="flex justify-end pr-16 mt-5">
                  <img
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/primerOptInPage/aad3ce804b94d99d256978bb84aa4ab0.svg"
                    alt=""
                    className="cursor-pointer imageUp-hover-effect"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {continuePage === 6 && (
        <div className="">
          <div className="my-6 sm:mt-[282px] mt-[218px] mx-auto sm:max-w-6xl sm:px-6 px-4">
            <div className="sm:flex sm:justify-center sm:mt-20 mt-12">
              <div className="grid grid-cols-1 gap-4">
                {dailySpentTime.map((dailySpentTime, index) => (
                  <div
                    key={dailySpentTime.id}
                    className={`sm:px-[20px] sm:py-[17px] px-[18px] py-[13px] cursor-pointer flex justify-between items-center gap-5 rounded-[14px] border-2 sm:w-[530px] w-full ${selectedDailySpentTime === dailySpentTime.id
                      ? "border-sky-300 bg-sky-100"
                      : "border-gray-200 hover:bg-gray-100"
                      }`}
                    onClick={() => handleContinue(dailySpentTime.id)}
                  >
                    <h1
                      className={`${selectedDailySpentTime === dailySpentTime.id
                        ? "text-sky-500"
                        : "text-gray-700"
                        } text-[17px]  font-bold`}
                    >
                      {dailySpentTime.time} min / day
                    </h1>
                    <h1
                      className={`${selectedDailySpentTime === dailySpentTime.id
                        ? "text-sky-500"
                        : "text-gray-600"
                        } text-lg  font-mediumn`}
                    >
                      {dailySpentTime.label}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {continuePage === 7 && (
        <div className="h-[calc(100vh-14vh)]">
          <div className="flex justify-center items-center h-full">
            <div>

              <div className="">
                <div>
                  <div className="mb-4">
                    <div className="text-[#22AE73] sm:text-3xl text-xl flex justify-center font-semibold transition ease-in-out duration-300">
                      {progressWidth >= 100 ? 'Personalization completed!' : 'Analyzing your answers . . .'}
                    </div>

                    <div className="flex justify-center mt-8">
                      {progressWidth >= 100 ? (<div>
                        <div className="animation-ctn">
                          <style jsx>{`
        .animation-ctn {
          text-align: center;
        }

        @-webkit-keyframes checkmark {
          0% {
            stroke-dashoffset: 100px;
          }

          100% {
            stroke-dashoffset: 0px;
          }
        }

        @-ms-keyframes checkmark {
          0% {
            stroke-dashoffset: 100px;
          }

          100% {
            stroke-dashoffset: 0px;
          }
        }

        @keyframes checkmark {
          0% {
            stroke-dashoffset: 100px;
          }

          100% {
            stroke-dashoffset: 0px;
          }
        }

        @-webkit-keyframes checkmark-circle {
          0% {
            stroke-dashoffset: 480px;
          }

          100% {
            stroke-dashoffset: 960px;
          }
        }

        @-ms-keyframes checkmark-circle {
          0% {
            stroke-dashoffset: 480px;
          }

          100% {
            stroke-dashoffset: 960px;
          }
        }

        @keyframes checkmark-circle {
          0% {
            stroke-dashoffset: 480px;
          }

          100% {
            stroke-dashoffset: 960px;
          }
        }

        @keyframes colored-circle {
          0% {
            opacity: 0;
          }

          100% {
            opacity: 100;
          }
        }

        .inlinesvg .svg svg {
          display: inline;
        }

        .icon--order-success svg polyline {
          -webkit-animation: checkmark 0.25s ease-in-out 0.7s backwards;
          animation: checkmark 0.25s ease-in-out 0.7s backwards;
        }

        .icon--order-success svg circle {
          -webkit-animation: checkmark-circle 0.6s ease-in-out backwards;
          animation: checkmark-circle 0.6s ease-in-out backwards;
        }

        .icon--order-success svg circle#colored {
          -webkit-animation: colored-circle 0.6s ease-in-out 0.7s backwards;
          animation: colored-circle 0.6s ease-in-out 0.7s backwards;
        }
                          `}</style>
                          <div className="animation-ctn">
                            <div className="icon icon--order-success svg">
                              <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">
                                <g fill="none" stroke="#22AE73" strokeWidth="2">
                                  <circle cx="77" cy="77" r="72" style={{ strokeDasharray: '480px, 480px', strokeDashoffset: '960px' }}></circle>
                                  <circle id="colored" fill="#22AE73" cx="77" cy="77" r="72" style={{ strokeDasharray: '480px, 480px', strokeDashoffset: '960px' }}></circle>
                                  <polyline className="st0" stroke="#fff" strokeWidth="10" points="43.5,77.8 63.7,97.9 112.2,49.4 " style={{ strokeDasharray: '100px, 100px', strokeDashoffset: '200px' }} />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>

                      </div>) : (
                        <div className="bg-white text-gray-700 border-2 border-[#22AE73] w-52 h-52 relative rounded-full overflow-hidden mt-8 transition ease-in-out duration-300">
                          <div className={`${progressWidth > 50 ? 'text-white' : 'text-black'} bg-[#22AE73] flex items-center justify-center h-full`} style={{ width: `${progressWidth}%` }}>
                            <span className=" absolute left-[43%] text-2xl">{progressWidth}</span>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      <div className="sm:mt-32 mt-28">
        <div className="border-t-2 bg-white fixed bottom-0 w-full border-gray-200">
          <div className="sm:py-7 py-4 sm:px-6 px-4 flex justify-end sm:max-w-6xl mx-auto">
            <button
              className={`${loadingContinue === true
                ? "bg-gray-700 tranistion ease-in-out duration-300 borderGreen text-white cursor-not-allowed"
                : (continuePage === 1 && selectedLanguage === null) ||
                  (continuePage === 2 && selectedCompany === null) ||
                  (continuePage === 3 && selectedNetwrok === null) ||
                  (continuePage === 4 && selectedHear === null) ||
                  (continuePage === 6 && selectedDailySpentTime === null)
                  ? "bg-gray-200 tranistion ease-in-out duration-300 text-gray-400 cursor-not-allowed"
                  : "bg-gray-700 tranistion ease-in-out duration-300 borderGreen hover:opacity-70 text-white"
                } text-center text-[15px] rounded-[16px] h-[50px] sm:h-[54px] flex justify-center items-center w-full sm:w-44 font-bold`}
              onClick={(e) => {
                if (
                  (continuePage === 1 && selectedLanguage === null) ||
                  (continuePage === 2 && selectedCompany === null) ||
                  (continuePage === 3 && selectedNetwrok === null) ||
                  (continuePage === 4 && selectedHear === null)

                ) {
                } else {
                  if (continuePage === 6) {
                    setLoadingContinue(true);

                    setTimeout(() => {
                      e.preventDefault();

                      let width = 0;
                      const intervalId = setInterval(() => {
                        if (width < 100) {
                          setProgressWidth(++width);
                        } else {
                          clearInterval(intervalId);

                        }
                      }, 20);
                    }, 2000);
                  }
                  if (continuePage === 7) {
                    setLoadingContinue(true);

                    setTimeout(() => {
                      router.push("/dashboard");
                    }, 2000);

                  } else {
                    setLoadingContinue(true);
                    setTimeout(() => {
                      setLoadingContinue(false);
                      setContinuePage((prevState) => prevState + 1);
                    }, 2000);
                  }
                }
              }}
              disabled={
                loadingContinue === true ||
                (continuePage === 1 && selectedLanguage === null) ||
                (continuePage === 2 && selectedCompany === null) ||
                (continuePage === 3 && selectedNetwrok === null) ||
                (continuePage === 4 && selectedHear === null) ||
                (continuePage === 6 && selectedDailySpentTime === null)
              }
            >
              {loadingContinue === false ? (
                " CONTINUE"
              ) : (
                <div className="spinner-box text-[#FFFFFF]">
                  <div className="pulse-container">
                    <div className="pulse-bubble pulse-bubble-1"></div>
                    <div className="pulse-bubble pulse-bubble-2"></div>
                    <div className="pulse-bubble pulse-bubble-3"></div>
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>

      </div>

      {/*  */}
    </>
  );
};

export default Page;
