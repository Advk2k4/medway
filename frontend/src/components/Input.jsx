const Input = ({ placeholder, type = "text", ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border-b border-green-900 py-2 px-1 focus:outline-none focus:border-green-700 w-full"
      {...props}
    />
  );
};

export default Input;
