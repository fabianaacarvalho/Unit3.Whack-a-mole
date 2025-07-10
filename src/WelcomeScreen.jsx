import { useGame } from "./GameContext";

export default function WelcomeScreen() {
  const { startGame } = useGame();

  return (
    <div>
      <h1>Welcome to Whac-A-Mole!</h1>
      <p>Click the mole as fast as you can to increase your score.</p>
      <button onClick={startGame}>Play</button>
    </div>
  );
}
