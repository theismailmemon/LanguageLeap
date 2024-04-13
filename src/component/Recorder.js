'use client';
import React, { useState, useEffect } from 'react';
import moment from 'moment';

const RecordingComponent = ({ loading }) => {
  const [isPermissioned, setIsPermissioned] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [timePassed, setTimePassed] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  let mediaRecorder;

  useEffect(() => {
    if (isMobile()) {
      getPermission();
    }
  }, []);

  const isMobile = () => {
    // Implement logic to detect if it's a mobile platform
    return false;
  };

  const startRecording = () => {
    console.log('recording');
    if (!isRecording) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.start();
          setIsRecording(true);
          const id = setInterval(() => {
            setTimePassed((prevTimePassed) => prevTimePassed + 1);
          }, 1000);
          setIntervalId(id);
          mediaRecorder.ondataavailable = (e) => {
            const audioBlob = new Blob([e.data], { type: 'audio/wav' });
            // Handle the audioBlob as needed
          };
        })
        .catch((error) => {
          console.error('Error starting recording:', error);
        });
    }
  };

  const stopRecording = () => {
    if (isRecording) {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach((track) => track.stop());
      clearInterval(intervalId);
      setIsRecording(false);
      setTimePassed(0);
    }
  };


  const getPermission = async () => {
    try {
      // Implement the logic to request audio recording permission
      setIsPermissioned(true);
    } catch (error) {
      console.error('Error requesting audio recording permission:', error);
    }
  };

  const stopAnyOngoingRecording = () => {
    if (isRecording) {
      stopRecording();
    }
  };

  const formatTimerValue = (value) => {
    return moment.utc(value * 1000).format('m:ss');
  };

  const startMobileRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      const id = setInterval(() => {
        setTimePassed((prevTimePassed) => prevTimePassed + 1);
      }, 1000);
      setIntervalId(id);
      // Implement logic to start recording on mobile
    }
  };

  const stopMobileRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      clearInterval(intervalId);
      setTimePassed(0);
      // Implement logic to stop recording on mobile
    }
  };

  return (
    <div>
      {!loading ? (
        <div className="flex items-center">
          {/* Display record button on desktop */}
          <div className="flex items-center">
            <button
              type="button"
              className="bg-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:opacity-80"
              onClick={stopRecording}
              style={{ display: isRecording ? '' : 'none' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-white"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button
              type="button"
              className={`bg-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:opacity-80 ${isRecording ? ' bg-red-600' : ' bg-gray-700'
                }`}
              onClick={startRecording}
              style={{ display: isRecording ? 'none' : '' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-white"
              >
                <path
                  d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z"
                />
                <path
                  d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="h-8 flex px-4 items-center">
          <h3 className="font-semibold my-0 text-xl mt-0">Uploading</h3>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecordingComponent;
