'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';


const Page = () => {

  const router = useRouter();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const dropdownRef = useRef(null);

  const handleSelectLanguage = (input) => {
    setSelectedLanguage(input);
    setDropdownVisible(false);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  const dropdownItems = [
    {
      name: "Russia",
    },
    {
      name: "United Arab Emirates",
    },
    {
      name: "Saudi Arabia",
    },
    {
      name: "New Zealand",
    },
    {
      name: "Canada",
    },
    {
      name: "Japan",
    },
  ];

  return (
    <div>
      <header className='bg-gray-800 flex items-center h-[80px] w-full px-6'>
        <div className='flex justify-center text-center mx-auto'>
          <a href=""><h1 className='text-white sm:text-[28px] text-[24px] font-bold italic text-center'>LanguageLeap</h1></a>
        </div>
        <div className='flex justify-end'>
          <svg onClick={() => { router.push('/account') }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-6 h-6 cursor-pointer hover:opacity-80 transition ease-in-out duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        </div>
      </header>
      <div className='mt-8 sm:max-w-5xl sm:px-2 px-6 mx-auto'>
        <h4 className='text-center'>Choose your target language</h4>
        <div className='flex justify-center mt-2'>
          <div ref={dropdownRef} className={`mt-2 relative rounded-md shadow-lg sm:w-96 w-full ring-1 ring-black ring-opacity-5 space-y-1`}>
            {/* Search input */}
            {dropdownVisible === true ? (
              <input
                onChange={handleInputChange}
                value={searchTerm}
                onFocus={() => setDropdownVisible(true)} // Show dropdown when input is focused
                className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-200 focus:outline-none"
                type="text"
                placeholder="Search items"
                autoComplete="off"
              />
            ) : (
              <div onClick={() => { setDropdownVisible(true); }} className="cursor-default h-10 block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-200 focus:outline-none">
                {selectedLanguage || 'Select Language'}
              </div>
            )}
            {/* Dropdown content goes here */}
            <div className=' absolute bg-white w-full z-[100]'>
              {dropdownVisible && (
                <div className=''>
                  {dropdownItems
                    .filter((item) =>
                      item.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((item, index) => (
                      <a
                        key={index}
                        onClick={() => handleSelectLanguage(item.name)}
                        className={`${selectedLanguage === item.name ? 'bg-gray-200' : 'hover:bg-gray-200'} my-2 block px-4 mx-2 py-2 text-gray-700 cursor-pointer rounded-md`}
                      >
                        {item.name}
                      </a>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=''>
          <div onClick={() => { router.push('/chat') }} className='bg-black sm:h-44 h-52 sm:flex rounded-2xl cursor-pointer mt-8 transition-transform transform-gpu hover:scale-105 duration-500'>
            <div className='sm:h-auto h-[60%] sm:w-[50%] sm:rounded-l-2xl rounded-t-2xl sm:rounded-tr-none flex text-white text-4xl font-semibold justify-center items-center' style={{ backgroundImage: "url('https://app.talkpal.ai/static/media/Chat-Mode.c505bbb6ecbf5c1b429e.jpg')" }}>
              Chat
            </div>
            <div className='sm:h-auto h-[40%] px-8 flex justify-center items-center sm:w-[50%] text-white sm:px-16 sm:text-sm text-xs'>
              Enhance your language skills with the Chat mode by talking to our AI tutor. Pick a topic, or let our AI introduce fun and interesting topics to you.
            </div>
          </div>

          <div onClick={() => { router.push('/roleplay') }} className='bg-black sm:h-44 h-52 sm:flex rounded-2xl cursor-pointer mt-8 transition-transform transform-gpu hover:scale-105 duration-500'>
            <div className='sm:h-auto h-[60%] sm:w-[50%] sm:rounded-l-2xl rounded-t-2xl sm:rounded-tr-none flex text-white text-4xl font-semibold justify-center items-center' style={{ backgroundImage: "url('https://app.talkpal.ai/static/media/Chat-Mode.c505bbb6ecbf5c1b429e.jpg')" }}>
              RolePlays
            </div>
            <div className='sm:h-auto h-[40%] px-8 flex justify-center items-center sm:w-[50%] text-white sm:px-16 sm:text-sm text-xs'>
              With the Roleplay mode practicing language will be fun and exciting. You can pick various settings from daily conversations to creative and fantastic dialogues.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;
