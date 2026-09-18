import { GameShell, GameTopbar, GameAuth } from "@freegamestore/games";

export default function App() {
  return (
    <GameShell topbar={<GameTopbar title="Create Canary e2e-create-mu7ap054-g0q61q-test" score={0} />}>
      <GameAuth />
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <h1
          className="text-3xl font-bold"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Create Canary e2e-create-mu7ap054-g0q61q-test
        </h1>
        <p style={{ color: "var(--muted)" }}>
          Your game will appear here once it&rsquo;s built.
        </p>
      </div>
    </GameShell>
  );
}
