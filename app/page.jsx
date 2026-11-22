import PageShell from "./page-shell";
import OptionCard from "./option-card";
import { portraits } from "./data";

const tilts = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1"];

export default function Home() {
  return (
    <PageShell
      title="Christmas, cartooned"
      intro="A little gift for the aunties and uncles. Pick a portrait to open it."
    >
      <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {portraits.map((portrait, index) => (
          <OptionCard
            key={portrait.id}
            portrait={portrait}
            tilt={tilts[index % tilts.length]}
          />
        ))}
      </ul>
    </PageShell>
  );
}
