"use client";

import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  { id: "iae", data: { label: "IAE" }, position: { x: 250, y: 50 } },
  { id: "thermo", data: { label: "Thermodynamics" }, position: { x: 100, y: 200 } },
  { id: "karma", data: { label: "Karma" }, position: { x: 400, y: 200 } },
  { id: "cbt", data: { label: "CBT" }, position: { x: 250, y: 320 } }
];

const edges = [
  { id: "e1", source: "iae", target: "thermo", label: "entropy vs optimization" },
  { id: "e2", source: "iae", target: "karma", label: "action-consequence" },
  { id: "e3", source: "iae", target: "cbt", label: "belief-action loop" }
];

export function TheoryMap() {
  return (
    <section className="rounded-xl border border-gold/30 bg-slate-950/50 p-4">
      <h2 className="mb-3 text-xl font-semibold text-gold">Theory Mapping Visual Engine</h2>
      <div className="h-72 overflow-hidden rounded border border-slate-700">
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </section>
  );
}
