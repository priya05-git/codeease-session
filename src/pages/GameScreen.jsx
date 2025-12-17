import React from "react";
import { useLocation } from "react-router-dom";
import "./GameScreen.css";

const GameScreen = () => {
  const location = useLocation();
  const difficulty = location.state?.difficulty || "Unknown";

  return (
    <div className="game-screen">
      <div className="game-card">
        <h1 className="game-title">Game Page</h1>
        <p className="game-sub">
          Selected Difficulty: <strong>{difficulty}</strong>
        </p>
        {/* Add your actual game canvas or components here */}
      </div>
    </div>
  );
};

export default GameScreen;
