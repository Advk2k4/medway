const Button = ({ children, className = "", ...props }) => {
  return (
    <button
    className={`bg-[#065F2B] text-xl hover:bg-[#054a23] font-semibold py-[16px] px-12 rounded-[30px] w-full transition-colors duration-200 outline-none ring-0 focus:ring-0 focus:outline-none shadow-none focus:shadow-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
