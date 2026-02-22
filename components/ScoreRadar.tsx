"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";

const data = [
  { metric: "Logical", iae: 88 },
  { metric: "Scientific", iae: 74 },
  { metric: "Mathematical", iae: 81 },
  { metric: "Predictive", iae: 79 },
  { metric: "Practical", iae: 92 }
];

export function ScoreRadar() {
  return (
    <section className="rounded-xl border border-gold/30 bg-slate-950/50 p-4">
      <h2 className="mb-3 text-xl font-semibold text-gold">Theory Scoring Engine</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="#334155" />
            <PolarAngleAxis dataKey="metric" stroke="#e2e8f0" />
            <Radar name="IAE" dataKey="iae" stroke="#E7BF60" fill="#E7BF60" fillOpacity={0.35} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
