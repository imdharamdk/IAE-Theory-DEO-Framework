"use client";

import { useState } from "react";

type SimResult = {
  optimizationScore: number;
  riskScore: number;
  informationGap: number;
  suggestedActions: string[];
};

export function SimulatorPanel() {
  const [result, setResult] = useState<SimResult | null>(null);

  async function onSubmit(formData: FormData) {
    const payload = {
      informationScore: Number(formData.get("informationScore") || 0),
      actionScore: Number(formData.get("actionScore") || 0),
      emotionalStability: Number(formData.get("emotionalStability") || 0),
      timeConstraint: Number(formData.get("timeConstraint") || 0)
    };

    const response = await fetch("/api/simulate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    setResult(data);
  }

  return (
    <section className="rounded-xl border border-gold/30 bg-slate-950/50 p-4">
      <h2 className="text-xl font-semibold text-gold">Personal Optimization Simulator</h2>
      <form action={onSubmit} className="mt-4 grid gap-3 md:grid-cols-2">
        {[
          ["informationScore", "Information"],
          ["actionScore", "Action"],
          ["emotionalStability", "Emotional Stability"],
          ["timeConstraint", "Time Constraint"]
        ].map(([name, label]) => (
          <label key={name} className="text-sm">
            {label}
            <input name={name} type="number" min={0} max={100} required className="mt-1 w-full rounded bg-slate-900 p-2" />
          </label>
        ))}
        <button className="rounded bg-gold px-4 py-2 font-semibold text-midnight md:col-span-2">Run IAE Simulation</button>
      </form>
      {result && (
        <div className="mt-4 space-y-1 text-sm text-slate-200">
          <p>Optimization Score: {result.optimizationScore}</p>
          <p>Risk Score: {result.riskScore}</p>
          <p>Information Gap: {result.informationGap}</p>
          <ul className="list-disc pl-5">
            {result.suggestedActions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
