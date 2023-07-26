import React, { useEffect, useState } from "react";

export const Profile = ({ name = "" }) => {
  const [nombre, setNombre] = useState(name);
  const getData = () => {
    const texto = localStorage.getItem("nombre");
    console.log(texto);
    return texto;
  };
  useEffect(() => {
    setNombre(getData());
  }, []);
  return (
    <div>
      <h2>Hola {nombre}</h2>
    </div>
  );
};
