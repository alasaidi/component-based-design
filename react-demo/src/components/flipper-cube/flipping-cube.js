import React, { useState } from "react";
import { StyledScene, StyledCube, StyledCubeFace } from "./styles";

const FlippingCube = ({ frontIcon, backIcon, rightIcon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <StyledScene onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <StyledCube $isFlipped={isFlipped}>
        <StyledCubeFace className="front">{frontIcon}</StyledCubeFace>
        <StyledCubeFace className="back">{backIcon}</StyledCubeFace>
        <StyledCubeFace className="right">{rightIcon}</StyledCubeFace>
      </StyledCube>
    </StyledScene>
  );
};

export default FlippingCube;
