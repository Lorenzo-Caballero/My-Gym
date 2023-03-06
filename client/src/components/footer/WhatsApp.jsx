import React from "react";

const WhatsAppChatButton = () => {
  const phoneNum = "+5492236898861";
  const message = "Hola, ¿cómo estás Leandro? Quiero comenzar un entrenamiento!";

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNum}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button onClick={handleClick}>Enviame un WhatsApp!</button>
  );
};

export default WhatsAppChatButton;