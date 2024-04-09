'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import ForgotPasswordHeader from '../../component/ForgotPasswordHeader';
import { sendPasswordResetEmail } from 'firebase/auth';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { dataBase } from '../../../firebaseConfig';

const Register = () => {
  const router = useRouter();
  const [resetPasswordSent, setResetPasswordSent] = useState(false);
  const [loginEmailX, setLoginEmailX] = useState(false);
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const forgotPasswordEmailInputRef = useRef(null);
  const handleResetNotification = () => {
    setResetPasswordSent(true)
  }

  const handleLoginEmailClick = () => {
    setLoginEmailX(true);
  }

  const handleSubmit = () => {
    if (!validateEmail(forgotEmail)) {
      return; // Prevent sign-in if email or password is invalid
    }
    setLoadingAnimation(true)
    sendPasswordResetEmail(dataBase, forgotEmail)
      .then(data => {
        NotificationManager.success('Reset password sent successful!.', 'Success');
        setLoadingAnimation(false)
        setForgotEmail('')
        setResetPasswordSent(true)
      }).catch(err => {
        NotificationManager.error('Firebase error', 'Error');
        setLoadingAnimation(false)
        console.log(err.code)
      })
  }
  const validateEmail = (forgotEmail) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(forgotEmail);
  }
  const handleEmailChange = (e) => {
    const forgotEmail = e.target.value;
    setForgotEmail(forgotEmail);

    // Check if email is valid
    if (!validateEmail(forgotEmail)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    
  
  }

  const handleXLoginEmail = () => {
    setForgotEmail('')
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        forgotPasswordEmailInputRef.current &&
        !forgotPasswordEmailInputRef.current.contains(event.target)
      ) {
        setLoginEmailX(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);




  return (
    <div>
        <NotificationContainer/>
      <div>
        <ForgotPasswordHeader />
        <div className='sm:mx-10 mx-6'>
          <div className='sm:mt-44 mt-24 sm:max-w-[355px] mx-auto'>
            <div className=''>
              <h2 className='text-2xl font-bold text-gray-700 text-center'>Forgot password</h2>
              <div className='mt-2'>
                <p className='text-center  text-gray-900'>
                  We will send you instructions on how to reset your password by email.
                </p>
              </div>
              <div className='mt-8 relative' ref={forgotPasswordEmailInputRef}>
                <input type="email" className={`${passwordError === true ? "border-red-500" : "focus:border-gray-400 border-gray-200"} pr-[44px] text-[17px] px-[13px] bg-gray-50 text-gray-700 placeholder:text-gray-500 rounded-[13px] border-2 h-[50px] font-medium w-full focus:outline-none `} placeholder='Email' value={forgotEmail} onChange={handleEmailChange} onClick={handleLoginEmailClick} />
                {loginEmailX === true && (
                  <span className='absolute top-[14px] right-4 bg-gray-400 rounded-full h-[18px] w-[18px] flex justify-center items-center cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={handleXLoginEmail} className="icon icon-tabler icon-tabler-x" width="12" height="12" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 6l-12 12" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </span>
                )}
                {passwordError && (
                           
                           <p className="text-red-500 text-xs top-full mt-1">Please enter a vaild email</p>
                       
                        )}
              </div>
              <div className='mt-6'>
                <button onClick={handleSubmit} className={`bg-gray-700 text-center text-[15px] flex justify-center items-center text-white rounded-[14px] border-sky-600 sm:w-[360px] w-full h-[51px] font-bold tranision ease-in-out duration-300 ${passwordError || loadingAnimation ? 'pointer-events-none opacity-80' : 'cursor-pointer hover:opacity-80 button'}`}>
                {loadingAnimation === false ? "SUBMIT" : (
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
           {resetPasswordSent === true && (
               <div id="alert-3" className="mt-6 flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
               <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                 <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
               </svg>
               <span className="sr-only">Info</span>
               <div className="ms-3 text-sm font-medium">
               A password reset email has been sent to your email address. Please check your <a href="https://mail.google.com/mail/u/0/#inbox" target='blank' className="font-semibold underline hover:no-underline">Gmail</a>.
               
               </div>
               <button onClick={() => {setResetPasswordSent(false)}} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">
                 <span className="sr-only">Close</span>
                 <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                 </svg>
               </button>
             </div>
           )}
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Register;



