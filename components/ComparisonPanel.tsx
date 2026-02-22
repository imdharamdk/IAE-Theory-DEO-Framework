"use client";

import { useState } from "react";
import { COMPARISON_THEORIES } from "@/lib/constants";
import { ComparisonResult } from "@/lib/types";

export function ComparisonPanel() {
  const [selected, setSelected] = useState(COMPARISON_THEORIES[0]);
  const [result, setResult] = useState<ComparisonResult | null>(null);

  async function compare() {
    const res = await fetch("/api/compare", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ theoryName: selected })
    });
    const data = await res.json();
    setResult(data);
  }

  return (
    <section className="rounded-xl border border-gold/30 bg-slate-950/50 p-4">
      <h2 className="text-xl font-semibold text-gold">Universal Law Comparison Engine</h2>
      <div className="mt-3 flex gap-2">
        <select value={selected} onChange={(e) => setSelected(e.target.value)} className="rounded bg-slate-900 p-2">
          {COMPARISON_THEORIES.map((theory) => (
            <option key={theory}>{theory}</option>
          ))}
        </select>
        <button onClick={compare} className="rounded bg-gold px-4 py-2 font-semibold text-midnight">Compare</button>
      </div>
      {result && (
        <div className="mt-4 grid gap-2 text-sm md:grid-cols-2">
          <div>
            <h3 className="font-semibold">Similarities</h3>
            <ul className="list-disc pl-5">{result.similarities.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <h3 className="font-semibold">Differences</h3>
            <ul className="list-disc pl-5">{result.differences.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
      )}
    </section>
  );
}
