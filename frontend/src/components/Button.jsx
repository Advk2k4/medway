
const Button = ({ children, variant = "primary", className= "", ...props }) => {
  const styles = {
    primary: "bg-green-800 text-white shadow-md hover:bg-green-900",
    secondary: "bg-[#E7DCC6] text-green-900 shadow-md hover:bg-[#d6cdbb]",
  };
  return (
    <button
      className={`bg-[#065F2B] text-xl hover:bg-[#054a23] text-[#F7F7F7] font-semibold py-[16px] px-12 rounded-[30px] w-full transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;