import React, { useState } from "react";
import "../css/ButtonWithAnimation.css";

const ButtonWithAnimation = () => {
  const [isHovered, setHovered] = useState(false);

  return (
    <button
      className={`custom-button ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Click me
      <div className="bar-animation"></div>
    </button>
  );
};

export default ButtonWithAnimation;
