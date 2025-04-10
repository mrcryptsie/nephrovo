import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";
import ModelSection from "@/components/model/ModelSection";
import PredictionForm from "@/components/prediction/PredictionForm";
import BenchmarkSection from "@/components/benchmark/BenchmarkSection";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>NéphroPredict - Prédiction de stade d'IRC</title>
        <meta name="description" content="Utilisez notre modèle d'intelligence artificielle avancé pour prédire avec précision le stade de l'Insuffisance Rénale Chronique." />
      </Helmet>
      
      <Hero />
      <Benefits />
      <ModelSection />
      <BenchmarkSection />
    </>
  );
}
