export interface ModelFeature {
  name: string;
  description: string;
  color: "primary" | "secondary" | "accent";
}

export interface ModelMetric {
  name: string;
  value: number;
  description?: string;
}

export interface StageDescription {
  stage: number;
  name: string;
  description: string;
  recommendations: string[];
  dgfRange?: string;
}

export interface PredictionResponse {
  predictedStage: number;
  confidence: number;
  allStagesProbabilities: { stage: number; probability: number }[];
  featureImportance: { feature: string; importance: number }[];
}

export interface ModelBenchmark {
  name: string;
  accuracy: number;
  description: string;
  isOurs: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
