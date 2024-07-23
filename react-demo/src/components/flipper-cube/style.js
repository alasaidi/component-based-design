import styled from "styled-components";

export const StyledCubesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  padding: 60px;
`;

export const StyledScene = styled.div`
  width: 200px;
  height: 200px;
  perspective: 600px;
`;

export const StyledCube = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${(props) => (props.$isFlipped ? "rotateY(-180deg)" : "none")};
`;

export const StyledCubeFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 2px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;

  &.front {
    background: #f44336;
  }

  &.back {
    background: #4caf50;
    transform: rotateY(180deg);
  }

  &.right {
    background: #2196f3;
    transform: rotateY(90deg);
    opacity: 0;
    transition: opacity 0.3s;
  }

  ${StyledCube}:hover &.right {
    opacity: 1;
  }
`;
