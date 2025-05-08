import React from "react";
import modul from "./Button.module.css";

const Button = ({ children, isDisabled, isActive, onClick }) => {
  return (
    <button
      className={`${modul.btn} ${isActive ? modul.active : ""}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
