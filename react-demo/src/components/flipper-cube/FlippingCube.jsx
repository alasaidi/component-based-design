// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const FlippingCube = ({ frontIcon, backIcon, rightIcon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="scene" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <div className={`cube ${isFlipped ? "is-flipped" : ""}`}>
        <div className="cube__face cube__face--front">{frontIcon}</div>
        <div className="cube__face cube__face--back">{backIcon}</div>
        <div className="cube__face cube__face--right">{rightIcon}</div>
      </div>
    </div>
  );
};

export default FlippingCube;
