'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const MessageRow = dynamic(() => import('../../component/MessageRow'));
const LoadingMessage = dynamic(() => import('../../component/LoadingMessage'));
const Recorder = dynamic(() => import('../../component/Recorder.js'));
import axios from 'axios';

let currentAudio = null;

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: 'Ibrahim',
    isMuted: false,
  });
  const [selectedLanguage, setSelectedLanguage] = useState('Spanish');

  const selectOption = (option) => {
    console.log(option);
    setInputMessage(`Hey Emma! Ask me a ${option} question`);
    sendMessage();
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message to chat
    setMessages([...messages, { text: inputMessage, role: 'user' }]);
    setInputMessage('');

    // Simulate loading state
    setLoading(true);

    try {
      // Send user message to chat API
      const chatResponse = await sendTextToChatAPI(messages[messages.length - 1].text);

      // Display AI response in chat
      setMessages([...messages, { text: chatResponse.response, role: 'bot' }]);
      await playTextAsAudio(chatResponse.response);
    } catch (error) {
      console.error('Error processing message:', error);
    } finally {
      setLoading(false);
    }
  };

  const replayMessage = async (message) => {
    await playTextAsAudio(message.text);
  };

  const sendAudioToBackend = async (audioFile) => {
    console.log(audioFile);
    const transcribeUrl = '/translation';

    try {
      const formData = new FormData();
      formData.append('audio', audioFile);

      // Send audio file to Azure Transcribe API using Axios
      const transcriptionResponse = await axios.post(transcribeUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (transcriptionResponse.status === 200) {
        const transcribedText = transcriptionResponse.data.translatedText;

        // Send transcribed text to chat API
        const chatResponse = await sendTextToChatAPI(transcribedText);

        // Display AI response in chat
        setMessages([...messages, { text: chatResponse.response, role: 'bot' }]);
        await playTextAsAudio(chatResponse.response);
      } else {
        console.error('Failed to transcribe audio.');
      }
    } catch (error) {
      console.error('Error sending audio to backend:', error);
    }
  };

  const sendTextToChatAPI = async (text) => {
    const chatUrl = '/chat';

    try {
      // Send text to chat API using Axios
      const chatResponse = await axios.post(chatUrl, { message: text });

      if (chatResponse.status === 200) {
        return chatResponse.data;
      } else {
        throw new Error('Failed to send text to chat API.');
      }
    } catch (error) {
      console.error('Error sending text to chat API:', error);
      throw error;
    }
  };

  const stopCurrentAudio = () => {
    if (currentAudio && !currentAudio.paused) {
      currentAudio.pause();
      currentAudio.currentTime = 0; // Reset audio to the beginning
    }
  };

  const playTextAsAudio = async (text) => {
    // const audioUrl = `/api/play-audio?text=${encodeURIComponent(text)}`;
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

  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-between">
      {/* Chat messages container */}
      <div className="flex-1 h-full overflow-y-auto p-4 flex flex-col gap-5">
        {/* Display chat messages */}
        {messages.map((message, index) => (
          <MessageRow message={message} onReplay={replayMessage} />
        ))}
        {/* Display loading message when waiting for response */}
        {loading && <LoadingMessage />}
      </div>

      {/* Chat input container */}
      <div className="bg-white p-4 h-16 flex-shrink-0 flex items-center gap-2">
        <div className="cursor-pointer" onClick={() => setUser({ ...user, isMuted: !user.isMuted })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {user.isMuted ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            )}
          </svg>
        </div>
        <input
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') sendMessage();
          }}
          type="text"
          placeholder="Type your message..."
          className="flex-1 bg-gray-200 rounded-lg py-2 px-4 outline-none"
        />

        {inputMessage.trim() === '' ? (
          <button className="focus:outline-none">
            <Recorder recorder={sendAudioToBackend} />
          </button>
        ) : (
          <button
            onClick={sendMessage}
            className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Send
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
