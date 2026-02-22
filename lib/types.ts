export type LearningModule = {
  id: number;
  title: string;
  summary: string;
  example: string;
  quizQuestion: string;
};

export type SimulatorInput = {
  informationScore: number;
  actionScore: number;
  emotionalStability: number;
  timeConstraint: number;
};

export type ComparisonResult = {
  theoryName: string;
  similarities: string[];
  differences: string[];
  strengths: string[];
  weaknesses: string[];
  mathematicalCompatibility: string;
  realLifeApplicability: string;
};
