import { ComparisonPanel } from "@/components/ComparisonPanel";
import { LearningModules } from "@/components/LearningModules";
import { ScoreRadar } from "@/components/ScoreRadar";
import { SimulatorPanel } from "@/components/SimulatorPanel";
import { TheoryMap } from "@/components/TheoryMap";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-6 p-6">
      <header className="rounded-xl border border-gold/40 bg-slate-950/60 p-6">
        <h1 className="text-3xl font-bold text-gold">IAE Universal Intelligence Engine</h1>
        <p className="mt-2 text-slate-200">Optimized Existence = f(Information, Action, Time)</p>
      </header>

      <LearningModules />
      <ComparisonPanel />
      <div className="grid gap-6 xl:grid-cols-2">
        <SimulatorPanel />
        <ScoreRadar />
      </div>
      <TheoryMap />
    </main>
  );
}
