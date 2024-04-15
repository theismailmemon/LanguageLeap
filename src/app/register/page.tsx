'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { dataBase } from '../../../firebaseConfig';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import userData from '../../../User.json';
import 'react-notifications/lib/notifications.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
const register = () => {
  const router = useRouter();

  const [isPassword, setisPassword] = useState(true);
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const [name, setName] = useState('');
  const [lastnameX, setLastNameX] = useState(false);
  const [NameX, setNameX] = useState(false);
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const [registerEmailX, setRegisterEmailX] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const lastNameInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const registerInputRef = useRef(null);
  const handleCreateAccount = () => {

    if (!validateEmail(registerEmail) || registerPassword.length < 6 || name.length < 1 || lastName.length < 1) {
      return; // Prevent sign-in if email or password is invalid
    }
    setLoadingAnimation(true)
    createUserWithEmailAndPassword(dataBase, registerEmail, registerPassword)
      .then((data) => {
        userData.email = data.user.email
        userData.firstName = name
        userData.lastName = lastName

        localStorage.setItem('token', (data.user as any).accessToken);
        router.push('/welcome');
        NotificationManager.success('Registration successful!.', 'Success');
        setLoadingAnimation(false)
        console.log(data.user.displayName, "authData")

      })
      .catch((err) => {
        setLoadingAnimation(false)
        NotificationManager.error(err.code, 'Error');
        console.log(err.code)
      })
  }

  const handleWithGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, new GoogleAuthProvider()).then(
      (result) => {
        userData.email = result.user.email
        result.user.getIdToken().then(token => {
          // Access token ko localStorage mein save karna
          localStorage.setItem('token', token)
          // Ab yahan par apne aage ke karyavahi karein, jaise redirect ya notification
          router.push('/welcome');
          NotificationManager.success('You have successfully logged in!', 'Success');
        }).catch(error => {
          console.error('Error retrieving ID token:', error);
          NotificationManager.error('Error retrieving ID token', 'Error');
        });
      }
    ).catch(error => {
      console.error('Error signing in with Google:', error);
      NotificationManager.error('Error signing in with Google', 'Error');
    });
  };
  

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }
  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleXLastName = () => {
    setLastName('')
  }
  const handleXName = () => {
    setName('')
  }
  const onBack = () => {
    router.push('/');
  }
  const handleXRegisterEmail = () => {
    setRegisterEmail('')
  }

  const handleLastNameClick = () => {
    setLastNameX(true);
  }
  const handleRegisterEmailClick = () => {
    setRegisterEmailX(true);
  }
  const handleLogin = () => {
    router.push('/login')
  }

  const handleNameClick = () => {
    setNameX(true);
  }


  const handleRegisterEmailChange = (e) => {
    const registerEmail = e.target.value;
    setRegisterEmail(registerEmail);

    // Check if email is valid
    if (!validateEmail(registerEmail)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  const handelRegisterPassword = (e) => {
    const registerPassword = e.target.value;
    setRegisterPassword(registerPassword);

    // Check if password is at least 6 characters long
    if (registerPassword.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }




  const validateEmail = (registerEmail) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(registerEmail);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        lastNameInputRef.current &&
        !lastNameInputRef.current.contains(event.target) &&

        nameInputRef.current &&
        !nameInputRef.current.contains(event.target) &&

        registerInputRef.current &&
        !registerInputRef.current.contains(event.target)
      ) {

        setRegisterEmailX(false);
        setLastNameX(false);
        setNameX(false);

      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className='sm:mx-6 mx-4 my-6'>
      <NotificationContainer />
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
            <button className='transition ease-in-out duration-300 sm:block hidden text-center text-[15px] px-[13px] hover:bg-gray-100 text-gray-700 rounded-[15px] border-2 border-gray-200 h-[50px] font-bold' onClick={handleLogin}>
              LOGIN
            </button>
          </span>
        </div>
        <div className='sm:mt-6 mt-24 sm:max-w-[355px] mx-auto'>
          <div className=''>
            <h2 className='text-3xl font-bold text-gray-700 text-center'>Create your profile</h2>
        
         
            <div className='mt-10 relative' ref={nameInputRef}>
              <input type="text" className='pr-[44px] text-[17px] px-[13px] bg-gray-50 text-gray-700 placeholder:text-gray-500 rounded-[13px] border-2 border-gray-200 h-[50px] font-medium w-full focus:outline-none focus:border-gray-400' placeholder='First Name' value={name} onChange={handleNameChange} onClick={handleNameClick} />
              {NameX === true && (
                <span className='absolute top-[14px] right-4 bg-gray-400 rounded-full h-[18px] w-[18px] flex justify-center items-center cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" onClick={handleXName} className="icon icon-tabler icon-tabler-x" width="12" height="12" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                  </svg>
                </span>
              )}
            </div>

            <div className='mt-5 relative' ref={lastNameInputRef}>
              <input type="text" className='pr-[44px] text-[17px] px-[13px] bg-gray-50 text-gray-700 placeholder:text-gray-500 rounded-[13px] border-2 border-gray-200 h-[50px] font-medium w-full focus:outline-none focus:border-gray-400' placeholder='Last Name' value={lastName} onChange={handleLastNameChange} onClick={handleLastNameClick} />
              {lastnameX === true && (
                <span className='absolute top-[14px] right-4 bg-gray-400 rounded-full h-[18px] w-[18px] flex justify-center items-center cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" onClick={handleXLastName} className="icon icon-tabler icon-tabler-x" width="12" height="12" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                  </svg>
                </span>
              )}
            </div>

            <div className='mt-5 relative' ref={registerInputRef}>
              <input type="email" className={`${emailError === true ? "border-red-500" : "focus:border-gray-400 border-gray-200"} pr-12 text-[17px] px-[13px] bg-gray-50 text-gray-700 placeholder:text-gray-500 rounded-[13px] border-2 h-[50px] font-medium w-full focus:outline-none`} placeholder='Email' value={registerEmail} onChange={handleRegisterEmailChange} onClick={handleRegisterEmailClick} />
              {registerEmailX === true && (
                <span className='absolute top-[14px] right-4 bg-gray-400 rounded-full h-[18px] w-[18px] flex justify-center items-center cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" onClick={handleXRegisterEmail} className="icon icon-tabler icon-tabler-x" width="12" height="12" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                  </svg>
                </span>
              )}
            </div>
            {emailError && (

              <p className="text-red-500 text-xs top-full mt-1">Please enter a vaild email</p>

            )}
            <div className='mt-5 relative'>
              <input type={isPassword === true ? "password" : "text"} className={`${passwordError === true ? "border-red-500" : "focus:border-gray-400 border-gray-200"} pr-12 text-[17px] px-[13px] bg-gray-50 text-gray-700 placeholder:text-gray-500 rounded-[13px] border-2 h-[50px] font-medium w-full focus:outline-none`} placeholder='Password' value={registerPassword} onChange={handelRegisterPassword} />
              <div className='h-[50px] absolute top-0 flex items-center right-4'>
                {isPassword === true ? (
                  <svg onClick={() => { setisPassword(false) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                ) : (
                  <svg onClick={() => { setisPassword(true) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                )}
              </div>
              {passwordError === true && (
                <p className="text-red-500 text-xs mt-1">Password must be at least 6 characters long</p>
              )}
            </div>
            <div className='mt-6'>
              <button onClick={handleCreateAccount} className={`tranision ease-in-out duration-300 bg-gray-700 text-center flex justify-center items-center text-[15px] text-white rounded-[14px] border-gray-700 sm:w-[360px] w-full h-[51px] font-bold ${emailError || passwordError || loadingAnimation ? 'pointer-events-none opacity-80' : 'cursor-pointer hover:opacity-80'}`}>
                {loadingAnimation === false ? "CREATE ACCOUNT" : (
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
            <div className='mt-5 text-[13px] sm:hidden block'>
              <h2 className='flex gap-2 justify-center font-bold'>
                <span className='text-gray-700'>Have an account?</span>
                <span className='text-gray-700 hover:opacity-80 transition ease-in-out duration-150' onClick={handleLogin}>Log In</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default register
