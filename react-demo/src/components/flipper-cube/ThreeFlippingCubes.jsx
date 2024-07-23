// eslint-disable-next-line no-unused-vars
import React from 'react';
import FlippingCube from './FlippingCube';
import { X, Circle, Square, Heart, Zap, Skull } from 'lucide-react';

const ThreeFlippingCubes = () => {
  return (
    <div className="cubes-container">
      <FlippingCube 
        frontIcon={<Heart className="w-full h-full p-4" />}
        backIcon={<X className="w-full h-full p-4" />}
        rightIcon={<Circle className="w-full h-full p-4" />}
      />
      <FlippingCube 
        frontIcon={<Skull className="w-full h-full p-4" />}
        backIcon={<Square className="w-full h-full p-4" />}
        rightIcon={<X className="w-full h-full p-4" />}
      />
      <FlippingCube 
        frontIcon={<Zap className="w-full h-full p-4" />}
        backIcon={<Circle className="w-full h-full p-4" />}
        rightIcon={<Heart className="w-full h-full p-4" />}
      />
      <style jsx>{`
        .cubes-container {
          display: flex;
          justify-content: center;
          gap: 60px;
          padding: 60px;
        }
        .scene {
          width: 200px;
          height: 200px;
          perspective: 600px;
        }
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }
        .cube.is-flipped {
          transform: rotateY(-180deg);
        }
        .cube__face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border: 2px solid #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cube__face--front {
          background: #f44336;
        }
        .cube__face--back {
          background: #4caf50;
          transform: rotateY(180deg);
        }
        .cube__face--right {
          background: #2196f3;
          transform: rotateY(90deg);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .cube:hover .cube__face--right {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ThreeFlippingCubes;
