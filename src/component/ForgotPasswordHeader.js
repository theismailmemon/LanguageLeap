'use client';
import React, { useState } from 'react';
import '../../src/app/globals.css';
import { useRouter } from 'next/navigation';


const Header = () => {
  const router = useRouter();
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

  return (
    <header className='bg-gray-800 sm:max-full h-[68px] w-full sm:px-6 px-4'>
      <div className='flex justify-between items-center h-full mx-auto relative sm:max-w-6xl'>
        <div>
        <italic className='text-white sm:text-[28px] text-[24px] font-bold italic '>LanguageLeap</italic>
          {/* <img src='https://d35aaqx5ub95lt.cloudfront.net/images/splash/f92d5f2f7d56636846861c458c0d0b6c.svg' alt='duolingo-logo' /> */}
        </div>

    
        <div>
          <div className=''>
            <button onClick={handleLogin} className='transition ease-in-out duration-300 bg-white hover:opacity-95 text-gray-700 text-center sm:text-[14px] text-[12px] sm:rounded-[14px] rounded-[12px] border-sky-300 sm:h-[42px] h-[38px] sm:px-4 px-3 font-bold'>
              LOGIN
            </button>

          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;