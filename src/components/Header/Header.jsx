import React from "react";
import modul from "./Header.module.css";
import Logo from "../../assets/react.svg";
import Button from "../Button/Button.jsx";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigation = useNavigate();
  return (
    <header className={modul.header}>
      <p onClick={() => navigation("/")}>
        <img src={Logo} alt="Logo"></img>
        <span>ReactCards</span>
      </p>
      <div className={modul.button}>
        <Button onClick={() => navigation("/addquestion")}>Add</Button>
      </div>
    </header>
  );
};
