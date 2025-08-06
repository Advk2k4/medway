const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`bg-[#065F2B] text-xl hover:bg-[#054a23] text-[#F7F7F7] font-semibold py-[16px] px-12 rounded-[12px] w-full transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;