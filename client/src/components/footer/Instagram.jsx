import React from "react";
import './instagram.scss'

const IgChatButton = () => {

  const message = "Hola, ¿cómo estás Leandro? Quiero comenzar un entrenamiento!";

  const handleClick = () => {
    window.open(`https://www.instagram.com/nahuelcaballerofitness/`);
  };

  return (
    <button className="instagram-logo" onClick={handleClick}>Enviame un Mensaje por instagram !</button>
  );
};

export default IgChatButton;