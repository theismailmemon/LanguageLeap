'use client';
import React, { useState } from 'react';
import '../../src/app/globals.css';
import { useRouter } from 'next/navigation';


const Header = () => {
  const router = useRouter();
  const [showLanguage, setShowLanguage] = useState(false);
  const [openMenuBarModal, setOpenMenuBarModal] = useState(false);

  const handleMenuBar = () => {
    if (openMenuBarModal === true) {
      setOpenMenuBarModal(false)
    } else {
      setOpenMenuBarModal(true)
    }
  }

  const handleLogin = () => {
    router.push('/login')
  }
  const handleGetStarted = () => {
    router.push('/direct_register')
  }

  const handleMouseHover = () => {
    setShowLanguage(true);
  };
  return (
    <header className='bg-gray-800 sm:max-full h-[68px] w-full px-6'>
      <div className='flex justify-between items-center h-full mx-auto relative sm:max-w-6xl'>
        <div>
        <italic className='text-white sm:text-[28px] text-[24px] font-bold italic '>LanguageLeap</italic>
          {/* <img src='https://d35aaqx5ub95lt.cloudfront.net/images/splash/f92d5f2f7d56636846861c458c0d0b6c.svg' alt='duolingo-logo' /> */}
        </div>

        <div className='sm:hidden block'>
          <svg onClick={handleMenuBar} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2 cursor-pointer" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </div>
        <div className='sm:block hidden'>
          <div className='flex items-center gap-3'>
            <button onClick={handleLogin} className='transition ease-in-out duration-300 button bg-white hover:opacity-95 text-gray-700 text-center text-[14px] rounded-[14px] border-sky-300 h-[42px] px-4 font-bold'>
              LOGIN
            </button>
            <button onClick={handleGetStarted} className='transition ease-in-out duration-300 button greenColor borderGreen hover:opacity-70 text-center text-[15px] text-white rounded-[14px] border-slate-400 h-[42px] px-4 font-bold'>
              GET STARTED
            </button>
          </div>
        </div>
        {openMenuBarModal === true && (
          <div className='absolute -right-4 top-[70px] sm:hidden block'>
            <div className='bg-white shadow rounded-xl w-56 border-2 border-gray-200'>
              <div onClick={handleLogin} className='border-gray-200 py-[10px] hover:bg-gray-200'>
                <button className='px-6 text-gray-700 text-[17px] font-semibold'>Sign in</button>
              </div>
              <div onClick={handleGetStarted} className='border-gray-200 py-[10px] hover:bg-gray-200'>
                <button className='px-6 text-gray-700 text-[17px] font-semibold'>Get started</button>
              </div>


            </div>
          </div>
        )}

      </div>

    </header>
  );
};

export default Header;