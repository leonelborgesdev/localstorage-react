import React, { useState } from "react";
import "./Home.css";
import { Profile } from "../Profile/Profile";

export const Home = () => {
  const [inputText, setInputText] = useState("");
  const [savedData, setSavedData] = useState(false);

  const handleInputText = (e) => {
    const text = e.target.value;
    setInputText(text);
    console.log(text.length);
    if (text.length === 1) setSavedData(false);
  };
  const saveData = () => {
    localStorage.setItem("nombre", inputText);
    setSavedData(true);
  };
  return (
    <div className="container">
      <input
        type="text"
        onChange={handleInputText}
        placeholder="Ingresa tu nombre.."
        className="input"
      />
      <button className="button" onClick={saveData}>
        Guardar
      </button>

      {savedData && <Profile />}
    </div>
  );
};
