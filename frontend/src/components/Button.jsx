const Button = ({ children, variant = "primary", ...props }) => {
  const styles = {
    primary: "bg-green-800 text-white shadow-md hover:bg-green-900",
    secondary: "bg-[#E7DCC6] text-green-900 shadow-md hover:bg-[#d6cdbb]",
  };
  return (
    <button
      className={`px-6 py-2 rounded-md font-semibold ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
