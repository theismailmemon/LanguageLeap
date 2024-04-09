// MessageRow

import React from 'react';

const MessageItem = ({ message, loading, onReplay }) => {
  const isBotMessage = message.role === 'bot';
  const isUserMessage = message.role === 'user';

  const handleReplay = () => {
    onReplay(message);
  };

  return (
    <div className={`text-base ${isUserMessage ? 'justify-end' : 'justify-start'} md:gap-6 flex`}>
      <div className="flex items-end gap-2 text-base sm:gap-3 sm:max-w-2xl md:max-w-3xl">
        {isBotMessage || loading ? (
          <img
            className="sm:w-10 w-7 sm:h-10 h-7 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Logo"
          />
        ) : null}

        {isUserMessage && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-gray-700 flex-shrink-0 cursor-pointer hover:rotate-[20deg] duration-300 ease-in-out"
            onClick={handleReplay}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        )}

        <div className="flex justify-end items-end gap-2">
          <div
            className={`min-h-[20px] mt-6 px-4 py-[14px] rounded-2xl ${
              isBotMessage || loading ? 'bg-gray-200 text-heading rounded-tl-none' : 'bg-gray-700 rounded-tr-none'
            } ${loading && 'w-20 flex justify-center'}`}
          >
            {!loading ? (
              <div className={`whitespace-pre-wrap ${isBotMessage || loading ? 'text-black' : 'text-white'}`}>
                {message.text}
              </div>
            ) : (
              <div className="snippet">
                <div className="stage">
                  <div className="dot-flashing"></div>
                </div>
              </div>
            )}
          </div>

          {isBotMessage || loading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-gray-700 flex-shrink-0 cursor-pointer hover:rotate-[20deg] duration-300 ease-in-out"
              onClick={handleReplay}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          ) : null}

          {isUserMessage && (
            <img
              className="sm:w-10 w-7 sm:h-10 h-7 rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="Logo"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
