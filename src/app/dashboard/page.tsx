'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';


const Page = () => {

  const router = useRouter();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(1);
  const dropdownRef = useRef(null);

  const handleSelectLanguage = (id) => {
    setSelectedLanguage(id);
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

  return (
    <div>
      <header className='bg-gray-800 flex items-center h-[80px] w-full sm:px-6 px-4'>
        <div className='flex justify-center text-center mx-auto'>
          <a href=""><h1 className='text-white sm:text-[28px] text-[24px] font-bold italic text-center'>LanguageLeap</h1></a>
        </div>
        <div className='flex justify-end'>
          <svg onClick={() => { router.push('/account') }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-6 h-6 cursor-pointer hover:opacity-80 transition ease-in-out duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        </div>
      </header>
      <div className='my-8 sm:max-w-5xl sm:px-6 px-4 mx-auto'>
        <h4 className='text-center text-sm'>Choose your target language</h4>
        <div className='flex justify-center mt-1'>
          <div ref={dropdownRef} className={`mt-2 relative rounded-md shadow-lg sm:w-96 w-full ring-1 ring-black ring-opacity-5 space-y-2`}>
            {/* Search input */}
            {dropdownVisible === true ? (
              <input
                onChange={handleInputChange}
                value={searchTerm}
                onFocus={() => setDropdownVisible(true)} // Show dropdown when input is focused
                className="block w-full px-4 py-2 h-10 placeholder:text-white rounded-md text-white bg-gray-700 focus:outline-none"
                type="text"
                placeholder="Search Language"
                autoComplete="off"
              />
            ) : (
              <div onClick={() => { setDropdownVisible(true); }} className="cursor-default flex items-center justify-between h-10 block w-full px-4 py-2 text-white bg-gray-700 rounded-md focus:outline-none">
              <div className='flex items-center gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h16.8" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
                {selectedLanguage ? dropdownItems.find(item => item.id === selectedLanguage)?.name || 'Search Language' : 'Search Language'}
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-[18px] h-[18px]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

              </div>
            )}
            {/* Dropdown content goes here */}

            {dropdownVisible && (
              <div className='absolute h-64 bg-white shadow border rounded-lg overflow-y-scroll w-full z-[100]'>
                <div className=''>
                  {dropdownItems
                    .filter((item) =>
                      item.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((item, index) => (
                      <a
                        key={index}
                        onClick={() => handleSelectLanguage(item.id)}
                        className={`${selectedLanguage === item.id ? 'bg-gray-200' : 'hover:bg-gray-200'} border-b block px-5 py-[10px] text-gray-700 cursor-pointer`}
                      >
                        {item.name}
                      </a>
                    ))}
                </div>
              </div>
            )}

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
