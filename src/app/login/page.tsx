
             
              'use client';
              import {NotificationContainer, NotificationManager} from 'react-notifications';
              import 'react-notifications/lib/notifications.css';

              import React, { useState, useEffect, useRef } from 'react';
              import { useRouter } from 'next/navigation';
              import { dataBase } from '../../../firebaseConfig';
              import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
              
              const Register = () => {
                const router = useRouter();
                const [loadingAnimation, setLoadingAnimation] = useState(false);
                const [loginInformation, setLoginInformation] = useState({});
                const [loginEmailX, setLoginEmailX] = useState(false);
                const [loginemail, setLoginEmail] = useState('');
                const [loginpassword, setLoginPassword] = useState('');
                const [passwordError, setPasswordError] = useState(false);
                const [emailError, setEmailError] = useState(false);
                const loginEmailInputRef = useRef(null);
              
                const onBack = () => {
                  router.push('/');
                }
              
                const handleSigin = () => {
                
                  if (!validateEmail(loginemail) || loginpassword.length < 6) {
                    return; // Prevent sign-in if email or password is invalid
                  }
                  setLoadingAnimation(true)
                  signInWithEmailAndPassword(dataBase, loginemail, loginpassword)
                    .then((data) => {
                      localStorage.setItem('token', data.user.accessToken)
                      router.push('/welcome');
                      setLoadingAnimation(false)
                      NotificationManager.success('You have successfully logged in!', 'Success');
                      setLoginInformation(data.user)
                      console.log(data.user.accessToken, "authData")
                    })
                    .catch((err) => {
                      if (err.code === 'auth/invalid-credential') {
                        NotificationManager.error('User Account not found!', 'Error');
                      } else {
                        NotificationManager.error(err.code, 'Error');
                      }   
                      setLoadingAnimation(false)
                    })
                }

                const handleWithGoogle = () => {
                  const auth = getAuth();
                  signInWithPopup(auth, new GoogleAuthProvider()).then(
                      (result) => {
                          const userCred = result.user;
                          console.log(userCred.email)
                          router.push('./')
                          if (userCred) {
                           
                              localStorage.setItem('token', userCred.getIdToken())
                          }
                      }
                  );
              };

                const handleLoginEmailClick = () => {
                  setLoginEmailX(true);
                }
              
                const handleEmailChange = (e) => {
                  const email = e.target.value;
                  setLoginEmail(email);
              
                  // Check if email is valid
                  if (!validateEmail(email)) {
                    setEmailError(true);
                  } else {
                    setEmailError(false);
                  }
                }
              
                const handleLoginPasswordChange = (e) => {
                  const password = e.target.value;
                  setLoginPassword(password);
              
                  // Check if password is at least 6 characters long
                  if (password.length < 6) {
                    setPasswordError(true);
                  } else {
                    setPasswordError(false);
                  }
                }
              
                const handleForgotPassword = () => {
                  router.push('/forgot_password')
                }
              
                const handleXLoginEmail = () => {
                  setLoginEmail('')
                }
              
                const handleSignup = () => {
                  router.push('/register')
                }
              
                useEffect(() => {
                  const handleClickOutside = (event) => {
                    if (
                      loginEmailInputRef.current &&
                      !loginEmailInputRef.current.contains(event.target)
                    ) {
                      setLoginEmailX(false);
                    }
                  };
              
                  document.addEventListener('mousedown', handleClickOutside);
              
                  return () => {
                    document.removeEventListener('mousedown', handleClickOutside);
                  };
                }, []);
              
                // Function to validate email format
                const validateEmail = (email) => {
                  const re = /\S+@\S+\.\S+/;
                  return re.test(email);
                }
              
                return (
                  <div className='mx-6 sm:mx-10 mt-6'>
                      <NotificationContainer/>
                    <div>
                      <div className='flex sm:justify-between justify-end'>
                        <span>
                          <svg onClick={onBack} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x cursor-pointer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#9ca3af" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                          </svg>
                        </span>
                        <span>
                          <button className='transition ease-in-out duration-300 sm:block hidden text-center text-[15px] px-[13px] hover:bg-gray-100 text-gray-700 rounded-[15px] border-2 border-gray-200 h-[50px] font-bold' onClick={handleSignup}>
                            SIGN UP
                          </button>
                        </span>
                      </div>
                      <div className='mt-32 sm:mt-36 sm:max-w-[355px] mx-auto'>
                        <div className=''>
                          <h2 className='text-[26px] font-bold text-gray-700 text-center'>Log in</h2>
                          <div className='mt-10 relative' ref={loginEmailInputRef}>
                            <input type="email" className={`text-[17px] px-[13px] pr-[44px] bg-gray-50 text-gray-700 placeholder:text-gray-500 rounded-[13px] border-2 ${emailError ? 'border-red-500' : 'border-gray-200 focus:border-gray-400'} h-[50px] font-medium w-full focus:outline-none `} placeholder='Email or Username' value={loginemail} onChange={handleEmailChange} onClick={handleLoginEmailClick} />
                            {loginEmailX === true && (
                              <span onClick={handleXLoginEmail} className='absolute top-[14px] right-4 bg-gray-400 rounded-full h-[18px] w-[18px] flex justify-center items-center cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-x" width="12" height="12" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                  <path d="M18 6l-12 12" />
                                  <path d="M6 6l12 12" />
                                </svg>
                              </span>
                            )}
                              {emailError && (
                           
                               <p className="text-red-500 text-xs top-full mt-1">Please enter a vaild email</p>
                           
                            )}
                          </div>
                          <div className='mt-4 relative'>
                            <input type="password"  className={`pr-20 text-[17px] px-[13px] bg-gray-50 text-gray-700 placeholder:text-gray-500 rounded-[13px] border-2 ${passwordError ? 'border-red-500' : 'border-gray-200 focus:border-gray-400'} h-[50px] font-medium w-full focus:outline-none `} placeholder='Password' value={loginpassword} onChange={handleLoginPasswordChange} />
                            <h3 onClick={handleForgotPassword} className='h-[50px] absolute top-0 flex items-center right-4 text-gray-400 font-semibold cursor-pointer hover:text-gray-500 transition ease-in-out duration-300'>Forgot?</h3>
                            {passwordError && (
                              <p className="text-red-500 text-xs absolute top-full mt-1">Password must be at least 6 characters long</p>
                            )}
                          </div>
                         <div className='mt-10'>
                   <button 
                    onClick={handleSigin} 
                disabled={emailError || passwordError} 
                className={`tranision ease-in-out duration-300 bg-gray-700 text-center text-[15px] flex justify-center items-center text-white rounded-[14px] border-sky-600 sm:w-[360px] w-full h-[51px] font-bold ${emailError || passwordError || loadingAnimation ? 'pointer-events-none opacity-80' : 'cursor-pointer hover:opacity-80'}`}
                   >
                    {loadingAnimation === false ? " LOG IN" : (
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

                          <div className='flex my-5 items-center gap-2'>
                            <span className='bg-gray-300 w-full h-[1px]'></span>
                            <span className='text-gray-400 font-medium'>Or</span>
                            <span className='bg-gray-300 w-full h-[1px]'></span>
                          </div>
                          <div className=''>
                          
                            <button onClick={handleWithGoogle} className='hover:bg-gray-100 transition ease-in-out duration-300 flex justify-center gap-[6px] items-center text-center text-[15px] text-blue-500 rounded-[14px] border-2 border-gray-200 w-full h-[51px] font-bold'>
                              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png' className='w-5' />
                              GOOGLE
                            </button>
                          </div>
                          <div className='mt-10'>
                            <p className='text-center text-xs text-gray-400'>
                              By signing in to Duolingo, you agree to our <span className='font-semibold'>Terms</span> and <span className='font-semibold'>Privacy Policy.</span>
                            </p>
                          </div>
                          <div className='mt-6'>
                            <p className='text-center text-xs text-gray-400'>
                              This site is protected by reCAPTCHA Enterprise and the Google <span className='font-semibold'>Privacy Policy</span> and <span className='font-semibold'>Terms of Service</span> apply.
                            </p>
                          </div>
                          <div className='mt-5 text-[15px] sm:hidden block'>
<h2 className='flex gap-2 justify-center font-bold'>
  <span className='text-gray-700'>Don't have an account?</span>
  <span className='text-gray-700 hover:opacity-80 transition ease-in-out duration-150' onClick={handleSignup}>SIGN UP</span>
</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  

      
                  </div>
                )
              }
              
              export default Register;
              
  