import React, { useState } from 'react';

const Input = ({ placeholder, type = "text", ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  if (isPassword) {
    return (
      <div className="relative w-full">
        <div className="flex items-center border-b-2 border-[#065F2B] py-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            className="flex-1 border-0 focus:outline-none bg-transparent text-gray-700 placeholder-gray-500 text-base"
            {...props}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="ml-3 text-gray-600 hover:text-gray-800 focus:outline-none flex-shrink-0"
            style={{ 
              border: 'none', 
              background: 'transparent',
              padding: '0',
              margin: '0 0 0 12px'
            }}
            tabIndex={-1}
          >
            {showPassword ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9.88 9.88a3 3 0 1 0 4.24 4.24"/>
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
                <line x1="2" x2="22" y1="2" y2="22"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <input
        type={type}
        placeholder={placeholder}
        className="border-0 border-b-2 border-[#065F2B] py-4 px-0 focus:outline-none focus:border-[#065F2B] w-full bg-transparent text-gray-700 placeholder-gray-500 text-base"
        {...props}
      />
    </div>
  );
};

export default Input;