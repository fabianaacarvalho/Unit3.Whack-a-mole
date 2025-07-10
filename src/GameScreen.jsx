import React from "react";
import { useGame } from "./GameContext";
import Field from "./Field";

export default function GameScreen() {
  const { score, restartGame } = useGame();

  return (
    <div className="game-screen">
      <h2>Score: {score}</h2>
      <button onClick={restartGame}>Restart</button>
      <Field />
    </div>
  );
}
