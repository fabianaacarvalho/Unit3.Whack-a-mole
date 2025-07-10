import { useGame } from "./GameContext";

export default function Field() {
  const { molePosition, whackMole, NUM_HOLES } = useGame();

  return (
    <ul className="field">
      {Array.from({ length: NUM_HOLES }).map((_, i) => (
        <li
          key={i}
          className={`hole${i === molePosition ? " mole" : ""}`}
          onClick={i === molePosition ? whackMole : undefined}
          title={i === molePosition ? "Click the mole!" : ""}
        ></li>
      ))}
    </ul>
  );
}
