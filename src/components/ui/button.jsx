import React from "react";

const Button = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-[rgba(4,154,155,255)] text-white rounded-lg hover:bg-[rgba(4,154,155,255)] transition-all ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
