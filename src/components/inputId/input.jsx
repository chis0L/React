import React, { useId } from "react";
import modul from "./input.module.css";
import { SearchInput } from "../../icon";

export const Input = ({ value, onChange }) => {
  const inputId = useId();

  return (
    <div className={modul.inputContainer}>
      <label className={modul.search} htmlFor={inputId}>
        <SearchInput />
      </label>
      <input
        type="text"
        id={inputId}
        placeholder="Search..."
        className={modul.input}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
