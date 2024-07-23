import React from "react";
import FlippingCube from "./FlippingCube";
import { Heart, X, Circle, Skull, Square, Zap } from "lucide-react";
import { StyledCubesContainer } from "./styles";

const ThreeFlippingCubes = () => {
  return (
    <StyledCubesContainer>
      <FlippingCube frontIcon={<Heart className="w-full h-full p-4" />} backIcon={<X className="w-full h-full p-4" />} rightIcon={<Circle className="w-full h-full p-4" />} />
      <FlippingCube frontIcon={<Skull className="w-full h-full p-4" />} backIcon={<Square className="w-full h-full p-4" />} rightIcon={<X className="w-full h-full p-4" />} />
      <FlippingCube frontIcon={<Zap className="w-full h-full p-4" />} backIcon={<Circle className="w-full h-full p-4" />} rightIcon={<Heart className="w-full h-full p-4" />} />
    </StyledCubesContainer>
  );
};

export default ThreeFlippingCubes;
