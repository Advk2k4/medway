import { useState } from "react";

const Input = ({ 
  placeholder, 
  type = "text", 
  className = "",
  error,
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isPassword = type === "password";

  const baseClasses = `
  w-full max-w-[560px] bg-transparent text-gray-700 mt-[25px] placeholder-gray-500 text-[18px] lg:text-2xl
  border-0 border-b-2 py-5 px-2 focus:outline-none transition-all duration-200
  ${error ? 'border-red-500' : 'border-[#065F2B]'}
  ${isFocused ? 'border-[#065F2B]' : ''}
  ${className}
`;

if (isPassword) {
  return (
    <div className="relative w-full max-w-[560px]">
      {/* Wrapper owns the underline */}
      <div
        className={`flex items-center mt-[25px] text-[18px] px-2 border-b-2 transition-colors duration-200
          ${error ? "border-red-500" : "border-[#065F2B]"}
          focus-within:border-[#065F2B]`}
      >
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className={`
            w-full bg-transparent text-gray-700 placeholder-gray-500
            text-[18px] lg:text-[18px]
            border-0 outline-none ring-0 focus:ring-0 appearance-none  /* <-- kill default box */
            ${className}
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {/* Eye icon pinned right */}
        <button
          type="button"
          onClick={() => setShowPassword(p => !p)}
          className="ml-2 shrink-0 p-2 text-gray-600 hover:text-gray-800"
          style={{ background: "transparent", border: "none" }}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="m9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
            </svg>
          )}
        </button>
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
  return (
    <div className="relative w-full max-w-[560px]">
      <input
        type={type}
        placeholder={placeholder}
        className={baseClasses}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};


export default Input;