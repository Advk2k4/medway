const Button = ({
  children,
  variant = "primary",
  className = "",
  disabled = false,
  loading = false,
  ...props
}) => {
  const baseClasses = `
    font-bold text-xl py-5 px-10 rounded-[30px] w-full transition-all duration-200
    outline-none ring-0 shadow-none focus:shadow-none disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  const variantClasses = {
    primary:
      "bg-[#065F2B] text-white hover:bg-[#054a23] active:bg-[#043d1e]",
    secondary:
      "bg-[#E7DCC6] text-[#065F2B] hover:bg-[#d6cdbb] active:bg-[#c5bdaa]",
    outline:
      "bg-transparent border-2 border-[#065F2B] text-[#065F2B] hover:bg-[#065F2B] hover:text-white",
  };

  // ✅ missing backticks before
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (

    <button className={classes} disabled={disabled || loading} {...props}>
      {loading ? (
        <div className="flex items-center justify-center space-x-2">
          <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}

    </button>
  );
};

export default Button;
