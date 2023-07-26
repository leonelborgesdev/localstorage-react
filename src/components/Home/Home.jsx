import React, { useEffect, useState } from "react";
import "./Home.css";
import { Profile } from "../Profile/Profile";
import { Nav } from "../Nav/Nav";

export const Home = () => {
  const [inputText, setInputText] = useState("");
  const [savedData, setSavedData] = useState(true);
  const handleInputText = (e) => {
    const text = e.target.value;
    setInputText(text);
    console.log(text.length);
    localStorage.setItem("nombre", inputText);
    if (text.length === 1) setSavedData(false);
  };
  const saveData = () => {
    localStorage.setItem("nombre", inputText);
    setSavedData(true);
  };
  const borrarData = () => {
    localStorage.removeItem("nombre");
    setSavedData(false);
  };
  return (
    <div className="container">
      <Nav />
      <input
        type="text"
        onChange={handleInputText}
        placeholder="Ingresa tu nombre.."
        className="input"
      />
      <div className="container_buton">
        <button className="button" onClick={saveData}>
          Guardar
        </button>
        <button className="borrar" onClick={borrarData}>
          Borrar
        </button>
      </div>

      {savedData && <Profile />}
    </div>
  );
};
