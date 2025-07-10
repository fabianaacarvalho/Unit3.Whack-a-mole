import { createContext, useContext, useState } from "react";

const NUM_HOLES = 9;

const GameContext = createContext();

export function GameProvider({ children }) {
  const [gameStarted, setGameStarted] = useState(false);

  const [score, setScore] = useState(0);

  const [molePosition, setMolePosition] = useState(
    Math.floor(Math.random() * NUM_HOLES)
  );

  const startGame = () => {
    setScore(0);
    setMolePosition(Math.floor(Math.random() * NUM_HOLES));
    setGameStarted(true);
  };

  const restartGame = () => {
    setScore(0);
    setGameStarted(false);
  };

  const whackMole = () => {
    setScore((prev) => prev + 1);
    setMolePosition(Math.floor(Math.random() * NUM_HOLES));
  };

  const value = {
    gameStarted,
    score,
    molePosition,
    startGame,
    restartGame,
    whackMole,
    NUM_HOLES,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);

  if (!context)
    throw Error("useGame must be used within a GameContext Provider");
  return context;
}
