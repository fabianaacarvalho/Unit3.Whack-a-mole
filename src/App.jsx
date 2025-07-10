import React from "react";
import { useGame } from "./GameContext";
import WelcomeScreen from "./WelcomeScreen";
import GameScreen from "./GameScreen";

function AppContent() {
  const { gameStarted } = useGame();

  return gameStarted ? <GameScreen /> : <WelcomeScreen />;
}

export default function App() {
  return (
    <>
      <h1>Whack-a-Mole</h1>
      <AppContent />
    </>
  );
}
