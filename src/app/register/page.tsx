
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { dataBase } from '../../../firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const register = () => {
  const router = useRouter();
  const [mainLoadingAnimation, setMainLoadingAnimation] = useState(false);

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
    setLoadingAnimation(true);
    createUserWithEmailAndPassword(dataBase, registerEmail, registerPassword)
      .then((data) => {
        // Store user token in localStorage
        localStorage.setItem('token', (data.user as any).accessToken);
        
        // Function to format date to YYYY-MM-DD format
        const formatDate = (date) => {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          return `${year}-${month}-${day}`;
        };
  
        // Get current date
        const currentDate = new Date();
        // Format current date to YYYY-MM-DD format
        const formattedDate = formatDate(currentDate);
  
        // Store user info in localStorage
        localStorage.setItem('userInfo', JSON.stringify({ 
          firstName: name, 
          lastName: lastName, 
          email: registerEmail,
          createdAt: formattedDate // Store formatted date
        }));
        toast.success("Registration successful", {
          autoClose: 1500, // Set notification close time to 2 seconds
          onClose: () => {
            router.push('/welcome');
          }
        });
        setLoadingAnimation(false);
      })
      .catch((err) => {
        setLoadingAnimation(false);
        toast.error(err.code, { autoClose: 1500 });
      });
  }
  
  
  
  useEffect(() => {

    const token = localStorage.getItem('token');
    if (token) {
      setMainLoadingAnimation(true)
      setTimeout(() => {
        setMainLoadingAnimation(false)
        router.push('/dashboard');
      }, 1000); // Delay redirection by 3 seconds
    }
  }, [router]);

  const handleWithGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        // Get user information
        const { displayName, email, metadata } = result.user;
        console.log(result.user)
  
        // Function to format date to YYYY-MM-DD format
        const formatDate = (date) => {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          return `${year}-${month}-${day}`;
        };
  
        // Format creation date to YYYY-MM-DD format
        const formattedDate = formatDate(new Date(metadata.creationTime));
  
        // Save user information to localStorage
        localStorage.setItem('userInfo', JSON.stringify({ 
          firstName: displayName, 
          lastName: '', 
          email: email,
          createdAt: formattedDate // Save the formatted creation date
        }));
  
        // Get and save user token to localStorage
        result.user.getIdToken()
          .then(token => {
            localStorage.setItem('token', token);
  
            // Perform further actions like redirection or showing notifications
            toast.success("Registration successful", {
              autoClose: 1500, // Set notification close time to 2 seconds
              onClose: () => {
                router.push('/welcome');
              }
            });
          })
          .catch(error => {
            console.error('Error retrieving ID token:', error);
            toast.error('Error retrieving ID token', { autoClose: 1500 });
          });
      })
      .catch(error => {
        console.error('Error signing in with Google:', error);
        toast.error('Error signing in with Google', { autoClose: 1500 });
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
    <div>
            {mainLoadingAnimation === true ? (
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

      ) : (
        <div className='sm:mx-6 mx-4 my-6'>
        <ToastContainer />

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
      )}
    </div>

  )
}

export default register
