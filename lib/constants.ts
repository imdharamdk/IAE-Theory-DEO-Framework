import { LearningModule } from "./types";

export const MODULES: LearningModule[] = [
  {
    id: 1,
    title: "Information Layer",
    summary: "How cognitive input quality shapes available actions.",
    example: "A student verifies sources before selecting a study strategy.",
    quizQuestion: "What happens when information quality is low?"
  },
  {
    id: 2,
    title: "Action Layer",
    summary: "Behavioral output that transforms potential into outcome.",
    example: "Daily focused sessions compound into mastery.",
    quizQuestion: "Why does action without timing awareness fail?"
  },
  {
    id: 3,
    title: "Existence Layer",
    summary: "The resultant state produced by repeated information-action loops.",
    example: "Improved health from consistency in diet and sleep.",
    quizQuestion: "How do repeated micro-actions alter existence?"
  },
  {
    id: 4,
    title: "Time Optimization Layer",
    summary: "Temporal leverage and opportunity windows in IAE.",
    example: "Choosing deep work in peak cognitive hours.",
    quizQuestion: "What is the cost of delayed decisions?"
  },
  {
    id: 5,
    title: "Consciousness & Awareness",
    summary: "Meta-cognition for updating assumptions and actions.",
    example: "Recognizing emotional bias before high-stakes choices.",
    quizQuestion: "How does awareness reduce decision entropy?"
  }
];

export const COMPARISON_THEORIES = [
  "Thermodynamics",
  "Karma Theory",
  "Cognitive Behavioral Theory",
  "Game Theory",
  "Buddhist Dependent Origination"
];
