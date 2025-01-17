import React, { useState } from "react";
import image from "./../img/roulette-wheel.png"; // roulette wheel image

interface RouletteWheelProps {
  segments: string[]; // nuumbers
  onResult: (result: string) => void; 
}

const RouletteWheel: React.FC<RouletteWheelProps> = ({ segments, onResult }) => {
  const [isSpinning, setIsSpinning] = useState(false); // if its mmoving
  const [rotation, setRotation] = useState(0); //traxker

  const spinWheel = () => {
    if (isSpinning) return; //no 2 clicks

    setIsSpinning(true); // Set spinning state to true

  
    const randomSpin = Math.floor(Math.random() * 360) + 1800; // 1800° = 5 rotations becoz 360*5=1800
    const segmentIndex = Math.floor(
      (360 - (randomSpin % 360)) / (360 / segments.length)
    ); 
    const winningSegment = segments[segmentIndex]; 

    setRotation((prevRotation) => prevRotation + randomSpin);

    setTimeout(() => {
      setIsSpinning(false); 
      onResult(winningSegment); 
    }, 4000); 
  };

  return (
    <div className="roulette-container">
      {/* Roulette Wheel */}
      <div
        className="wheel"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning ? "transform 4s ease-out" : "none", 
        }}
      >
        <img
          src={image} 
          alt=""
          className="roulette-image"
        />
      </div>

      {/* Spin Button */}
      <button
        className="spin-button"
        onClick={spinWheel}
        disabled={isSpinning} // Disable button while spinning
      >
        {isSpinning ? "Spinning..." : "Spin the Wheel"}
      </button>
    </div>
  );
};

export default RouletteWheel;
