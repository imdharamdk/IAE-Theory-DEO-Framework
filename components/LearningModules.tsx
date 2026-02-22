"use client";

import { motion } from "framer-motion";
import { MODULES } from "@/lib/constants";

export function LearningModules() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-gold">IAE Learning Modules</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {MODULES.map((module) => (
          <motion.article
            whileHover={{ y: -4 }}
            key={module.id}
            className="rounded-xl border border-gold/30 bg-slate-950/50 p-4 shadow-lg"
          >
            <h3 className="text-lg font-medium">Module {module.id}: {module.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{module.summary}</p>
            <p className="mt-2 text-xs text-slate-400">Example: {module.example}</p>
            <p className="mt-3 text-xs text-gold">Quiz: {module.quizQuestion}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
