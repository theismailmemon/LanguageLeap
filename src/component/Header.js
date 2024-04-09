'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../../src/app/globals.css';
import SiteLanguage from './siteLanguage';
const Header = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [languageData, setLanguageData] = useState({
    label: "English"
  });

  const handleMouseHover = () => {
    setShowLanguage(true);
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full bg-white z-[100] ${isScrolled ? 'border-b-2 border-gray-200 transition-all duration-100' : ''}`}>
      <header className="sm:max-w-6xl mx-auto px-5 h-[71px]">
        <div className='flex justify-between items-center h-[71px]'>
          <div>
            <a href=''>
              <div className='flex items-center gap-2 cursor-pointer'>
                <img src='' alt='' className='sm:w-auto' />
                <italic className='text-black sm:text-[28px] text-[24px] font-bold italic '>LanguageLeap</italic>
              </div>
            </a>
          </div>
          <div className='block sm:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2 cursor-pointer" width="26" height="26" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </div>
          <div className='hidden sm:block'>
            <div className='flex gap-5'>
              <button className='flex items-end gap-2 text-gray-700 duration-500 transition ease-in-out hover:opacity-70 font-semibold' onClick={() => { router.push('/login') }}>Login</button>
              <button className='flex items-end gap-2 text-gray-700 duration-500 transition ease-in-out hover:opacity-70 font-semibold' onClick={() => { router.push('/register') }}>Signup</button>
              <button onMouseEnter={handleMouseHover} className='flex items-end gap-2 text-gray-700 duration-500 transition ease-in-out hover:opacity-70 font-semibold'>
                <span>
                  Language: {languageData.label}
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#3f3f46" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className='flex justify-end mt-1'>
          {showLanguage === true && <SiteLanguage setShowLanguage={setShowLanguage} setLanguageData={setLanguageData} />}
        </div>
      </header>

    </div>
  );
};

export default Header;
