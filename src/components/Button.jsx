const Button = ({ label, onClick, variant = "primary" }) => {
  const baseStyle = "px-4 py-2 rounded font-semibold transition";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {label}
    </button>
  );
};

export default Button;
