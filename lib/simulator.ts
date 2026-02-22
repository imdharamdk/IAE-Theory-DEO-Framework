import { SimulatorInput } from "./types";

export function runIAESimulation(input: SimulatorInput) {
  const optimizationScore = Math.max(
    0,
    Math.min(
      100,
      input.informationScore * 0.35 +
        input.actionScore * 0.35 +
        input.emotionalStability * 0.15 +
        (100 - input.timeConstraint) * 0.15
    )
  );

  const riskScore = Math.max(0, Math.min(100, 100 - optimizationScore + input.timeConstraint * 0.2));
  const informationGap = Math.max(0, 100 - input.informationScore);

  const suggestedActions = [
    informationGap > 40 ? "Collect higher quality information before acting." : "Information quality is acceptable.",
    input.actionScore < 50 ? "Break action plan into atomic habits." : "Maintain consistent action cadence.",
    input.timeConstraint > 70 ? "Use priority matrix to reduce time pressure." : "Preserve current temporal pacing."
  ];

  return {
    optimizationScore: Number(optimizationScore.toFixed(2)),
    riskScore: Number(riskScore.toFixed(2)),
    informationGap: Number(informationGap.toFixed(2)),
    suggestedActions
  };
}
