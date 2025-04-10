import PredictionForm from "@/components/prediction/PredictionForm";
import { Helmet } from "react-helmet";

export default function Prediction() {
  return (
    <>
      <Helmet>
        <title>Prédiction - NéphroPredict</title>
        <meta name="description" content="Utilisez notre formulaire de prédiction pour déterminer le stade de l'IRC à partir des données du patient." />
      </Helmet>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl font-bold mb-6">Prédiction du stade d'IRC</h1>
            <p className="text-xl text-neutral-600">
              Utilisez notre outil basé sur l'intelligence artificielle pour prédire avec précision le stade de l'Insuffisance Rénale Chronique à partir des données cliniques du patient.
            </p>
          </div>
        </div>
      </section>
      
      <PredictionForm />
    </>
  );
}
