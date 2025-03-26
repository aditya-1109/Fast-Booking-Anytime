import React from "react";

const Button = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
