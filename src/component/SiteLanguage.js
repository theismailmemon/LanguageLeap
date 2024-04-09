import React from "react";

const SiteLanguage = ({ setShowLanguage, setLanguageData }) => {
  const buttons = [
    {
      label: "Español",
      logo: "http://talkpal.ai/wp-content/uploads/2023/03/spain.png",
    },
    {
      label: "English",
      logo: "http://talkpal.ai/wp-content/uploads/2023/03/united-kingdom.png",
    },
  ];

  const handleCloseModal = (button) => {
    setLanguageData(button);
    setShowLanguage(false);
  };

  return (
    <div className="relative">
      <div onMouseLeave={() => setShowLanguage(false)}>
        <div className="sm:border-2 sm:border-gray-200 rounded-2xl bg-white shadow sm:px-4 px-10 py-4 grid grid-cols-1 sm:grid-cols-1">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="hover:bg-gray-200 rounded-lg h-11 flex gap-4 sm:w-48 w-full px-3 items-center"
              onClick={() => handleCloseModal(button)}>
              <span>
                <img
                  src={button.logo}
                  alt=""
                  className="w-6 h-6 object-cover"
                />
              </span>
              <span className="text-gray-500">{button.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SiteLanguage;
