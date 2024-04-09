//
'use client';
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import MessageRow from '../../component/MessageRow';
import LoadingMessage from '../../component/LoadingMessage';
import Recorder from '../../component/Recorder';
import axios from 'axios';

let currentAudio = null;

const ChatComponent = () => {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({ name: 'Ibrahim', isMuted: true });
  const [selectedLanguage, setSelectedLanguage] = useState('Spanish');

  // Simulating created lifecycle hook
  useState(() => {
    if (messages.length === 0) {
      const initialMessage = `Sure, ${user.name}! I can help you with some basic ${selectedLanguage} phrases. How about we start with greeting someone? How do you say "hello" in ${selectedLanguage}?`;
      const options = ['Fun', 'Interesting', 'You Decide'];
      setMessages([{ text: initialMessage, role: 'bot', options }]);
    }
  }, [messages, user.name, selectedLanguage]);

  const selectOption = (option) => {
    setInputMessage(`Hey Emma! Ask me a ${option} question`);
    sendMessage();
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message to chat
    setMessages([...messages, { text: inputMessage, role: 'user' }]);
    setInputMessage('');
    setLoading(true);

    try {
      // Simulate API call (replace with actual API calls)
      const chatResponse = { response: 'Bot response goes here' };

      // Display AI response in chat
      setMessages([...messages, { text: chatResponse.response, role: 'bot' }]);
      await playTextAsAudio(chatResponse.response);
    } catch (error) {
      console.error('Error processing message:', error);
    } finally {
      setLoading(false);
    }
  };

  const playTextAsAudio = async (text) => {
    const audioUrl = `https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav`;

    try {
      stopCurrentAudio();

      const audio = new Audio(audioUrl);
      currentAudio = audio;

      await audio.play();
    } catch (error) {
      console.error('Error playing audio:', error);
      currentAudio = null;
    }
  };
  const handleModalConfirm = () => {
    router.push('/dashboard');
    setShowModal(false)
  }
  const stopCurrentAudio = () => {
    if (currentAudio && !currentAudio.paused) {
      currentAudio.pause();
      currentAudio.currentTime = 0; // Reset audio to the beginning
    }
  };

  const sendAudioToBackend = async (audioFile) => {
    console.log(audioFile);
    const transcribeUrl = "/translation";

    try {
      const formData = new FormData();
      formData.append("audio", audioFile);

      // Send audio file to Azure Transcribe API using Axios
      const transcriptionResponse = await axios.post(
        transcribeUrl,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (transcriptionResponse.status === 200) {
        const transcribedText = transcriptionResponse.data.translatedText;

        // Send transcribed text to chat API
        const chatResponse = await sendTextToChatAPI(transcribedText);

        // Display AI response in chat
        setMessages([...messages, { text: chatResponse.response, role: "bot" }]);
        await playTextAsAudio(chatResponse.response);
      } else {
        console.error("Failed to transcribe audio.");
      }
    } catch (error) {
      console.error("Error sending audio to backend:", error);
    }
  };

  const sendTextToChatAPI = async (text) => {
    const chatUrl = "/chat";

    try {
      // Send text to chat API using Axios
      const chatResponse = await axios.post(chatUrl, { message: text });

      if (chatResponse.status === 200) {
        return chatResponse.data;
      } else {
        throw new Error("Failed to send text to chat API.");
      }
    } catch (error) {
      console.error("Error sending text to chat API:", error);
      throw error;
    }
  };

  const replayMessage = async (message) => {
    await playTextAsAudio(message.text);
  };

  return (
    <div>

      <header className="bg-gray-800 flex items-center justify-between h-[80px] w-full px-6 fixed">
        <div className="flex gap-3">
          <div>
            <svg
              onClick={() => setShowModal(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-7 h-7 text-white cursor-pointer hover:opacity-80 transition ease-in-out duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className="sm:hidden block">
            <div className="flex gap-3 items-center">
              <h2 className="text-white text-2xl">Ibrahim Memon</h2>
            </div>
          </div>
        </div>
        <div className="sm:block hidden">
          <div className="flex gap-3 items-center">
            <h2 className="text-white text-2xl">Ibrahim Memon</h2>
          </div>
        </div>
        <div className="flex sm:gap-8 gap-3">
          <img
            src="https://app.talkpal.ai/static/media/icon_chat-add_.2396bbbf02d3f2e8e8fecad864c267a1.svg"
            alt=""
            className="cursor-pointer"
          />
          <img
            src="https://app.talkpal.ai/static/media/History.6e2b0ef2ebb5471be6db7f6390eb08c6.svg"
            alt=""
            className="cursor-pointer"
          />
          <img
            src="https://app.talkpal.ai/static/media/gear-icon.7a96a1edb6b58f4eee647e7e873ed409.svg"
            alt=""
            className="cursor-pointer"
          />
        </div>
      </header>


      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-[100] bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white sm:max-w-sm sm:mx-0 mx-6 p-6 rounded-lg"
          >
            <p className="text-center text-xl font-semibold">
              Are you sure you want to leave the chat?
            </p>
            <p className="text-center text-xl text-gray-500 pt-2">
              If you leave the chat, your conversation will be lost.
            </p>
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 hover:opacity-80 transition ease-in-out duration-300 font-bold py-2 px-5 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleModalConfirm}
                className="bg-blue-500 text-white hover:opacity-80 transition ease-in-out duration-300 font-bold py-2 px-5 rounded-lg mr-2"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}


      <div className="pt-[78px]">
        <div className="bg-gray-100 sm:pt-10 pt-5 px-6 mx-auto max-w-5xl h-screen">
          {messages.map((message, index) => (
            <MessageRow key={index} message={message} replay={replayMessage} />
          ))}
          {loading && <LoadingMessage />}
        </div>
      </div>


      <div className="fixed w-full bottom-0 bg-white py-3 px-3 border-t">
        <div className="mx-auto max-w-5xl flex gap-4">
          <div className="relative w-full flex items-center gap-3">
            <button
              onClick={() => setUser({ ...user, isMuted: !user.isMuted })}
              className="w-7 h-7 cursor-pointer text-gray-700"
            >
              {user.isMuted ? (
                 <svg
              
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke-width="1.5"
                 stroke="currentColor"
                 className="w-7 h-7 cursor-pointer text-gray-700"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                 />
               </svg>
              ) : (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-7 h-7 cursor-pointer text-gray-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
              )}
            </button>
            <input
              type="text"
              className="w-full bg-gray-100 rounded-full pr-16 px-6 py-[14px] outline-none"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === 'Enter') sendMessage();
              }}
            />
            <span className="absolute right-4">
              {inputMessage.trim() === '' ? (
                <Recorder recorder={sendAudioToBackend} />
              ) : (
                <button onClick={sendMessage}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer icon icon-tabler icon-tabler-send-2"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#374151"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M4.698 4.034l16.302 7.966-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z"
                    />
                    <path d="M6.5 12h14.5" />
                  </svg>
                </button>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
