import { useRef } from "react";
import { Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PredictionResponse } from "@shared/types";
import { generatePDF } from "@/lib/pdfGenerator";

// Descriptions des stades d'IRC
const stageInfo = [
  {
    stage: 0,
    name: "Pas d'IRC",
    description: "Fonction rénale normale avec un DFG supérieur à 90 ml/min/1,73 m².",
    recommendations: [
      "Maintien d'une bonne hydratation",
      "Alimentation équilibrée",
      "Exercice physique régulier"
    ]
  },
  {
    stage: 1,
    name: "IRC légère",
    description: "Légère diminution de la fonction rénale avec un DFG entre 60 et 89 ml/min/1,73 m².",
    recommendations: [
      "Suivi annuel de la fonction rénale",
      "Contrôle de la pression artérielle",
      "Éviter les médicaments néphrotoxiques"
    ]
  },
  {
    stage: 2,
    name: "IRC légère à modérée",
    description: "Diminution modérée de la fonction rénale avec un DFG entre 45 et 59 ml/min/1,73 m².",
    recommendations: [
      "Suivi bisannuel de la fonction rénale",
      "Surveillance de la protéinurie",
      "Ajustement de l'alimentation si nécessaire"
    ]
  },
  {
    stage: 3,
    name: "IRC modérée à sévère",
    description: "Le stade 3 de l'IRC correspond à une insuffisance rénale modérée avec un DFG entre 30 et 44 ml/min/1,73 m².",
    recommendations: [
      "Contrôle de la pression artérielle",
      "Surveillance de l'anémie et de l'équilibre phosphocalcique",
      "Régime adapté et gestion des comorbidités"
    ]
  },
  {
    stage: 4,
    name: "IRC sévère",
    description: "Diminution sévère de la fonction rénale avec un DFG entre 15 et 29 ml/min/1,73 m².",
    recommendations: [
      "Suivi néphrologue trimestriel",
      "Préparation potentielle à la dialyse",
      "Régime alimentaire strict"
    ]
  },
  {
    stage: 5,
    name: "IRC terminale",
    description: "Insuffisance rénale terminale avec un DFG inférieur à 15 ml/min/1,73 m².",
    recommendations: [
      "Mise en place d'un traitement de suppléance",
      "Dialyse ou préparation à la transplantation",
      "Suivi intensif"
    ]
  }
];

interface PredictionResultProps {
  prediction: PredictionResponse;
}

export default function PredictionResult({ prediction }: PredictionResultProps) {
  const resultRef = useRef<HTMLDivElement>(null);
  
  const stageInfo = getStageInfo(prediction.predictedStage);
  
  const handleExportPDF = () => {
    if (resultRef.current) {
      generatePDF(resultRef.current, prediction);
    }
  };
  
  const handlePrint = () => {
    window.print();
  };
  
  return (
    <div 
      ref={resultRef}
      className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),_0_8px_10px_-6px_rgba(0,0,0,0.02)] p-6 md:p-8 border-t-4 border-primary-500"
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-semibold">Résultat de la prédiction</h3>
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
            onClick={handleExportPDF}
          >
            <Download className="h-4 w-4 mr-1" />
            Exporter (PDF)
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
            onClick={handlePrint}
          >
            <Printer className="h-4 w-4 mr-1" />
            Imprimer
          </Button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-neutral-50 rounded-xl p-6 mb-6">
            <div className="mb-4">
              <div className="text-sm text-neutral-500 mb-1">Stade prédit</div>
              <div className="text-3xl font-bold text-primary-600">
                Stade {prediction.predictedStage}
              </div>
            </div>
            
            <div>
              <div className="text-sm text-neutral-500 mb-1">Degré de confiance</div>
              <div className="w-full bg-neutral-200 rounded-full h-2.5 mb-1">
                <div 
                  className="bg-primary-500 h-2.5 rounded-full" 
                  style={{ width: `${Math.round(prediction.confidence * 100)}%` }}
                ></div>
              </div>
              <div className="text-sm font-medium">{Math.round(prediction.confidence * 100)}%</div>
            </div>
          </div>
          
          <div className="rounded-xl border border-neutral-200 p-6">
            <h4 className="text-lg font-medium mb-4">Interprétation clinique</h4>
            <div className="space-y-3 text-neutral-700">
              <p>{stageInfo.description}</p>
              <p>À ce stade, le suivi néphrologue est recommandé avec des contrôles réguliers des paramètres rénaux.</p>
              <p className="text-primary-700 font-medium">Recommandations de suivi :</p>
              <ul className="list-disc pl-5 text-sm">
                {stageInfo.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-4">Détails des prédictions</h4>
            <div className="space-y-2">
              {prediction.allStagesProbabilities.map((item) => (
                <div 
                  key={item.stage}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    item.stage === prediction.predictedStage 
                      ? 'bg-primary-50 border border-primary-200' 
                      : 'bg-neutral-50'
                  }`}
                >
                  <div className={`font-medium ${
                    item.stage === prediction.predictedStage ? 'text-primary-700' : ''
                  }`}>
                    Stade {item.stage}
                  </div>
                  <div className={`${
                    item.stage === prediction.predictedStage ? 'font-semibold text-primary-700' : ''
                  }`}>
                    {Math.round(item.probability * 100)}%
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Facteurs contributifs</h4>
            <div className="rounded-xl border border-neutral-200 p-4">
              <div className="text-sm text-neutral-700">
                Importance relative de chaque facteur dans la prédiction :
              </div>
              <div className="space-y-3 mt-3">
                {prediction.featureImportance.map((feature, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <div className="text-sm">{feature.feature}</div>
                      <div className="text-sm font-medium">{Math.round(feature.importance * 100)}%</div>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-1.5">
                      <div 
                        className="bg-primary-500 h-1.5 rounded-full" 
                        style={{ width: `${Math.round(feature.importance * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getStageInfo(stage: number) {
  return stageInfo[stage] || stageInfo[0];
}
