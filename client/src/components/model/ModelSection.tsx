import { ArrowRight } from "lucide-react";
import { ModelFeature } from "@shared/types";

const features: ModelFeature[] = [
  {
    name: "Créatinine (mg/L)",
    description: "Concentration de créatinine dans le sang",
    color: "primary"
  },
  {
    name: "Urée (g/L)",
    description: "Concentration d'urée dans le sang",
    color: "accent"
  },
  {
    name: "Âge",
    description: "Âge du patient en années",
    color: "secondary"
  },
  {
    name: "Na^+ (meq/L)",
    description: "Concentration de sodium dans le sang",
    color: "primary"
  },
  {
    name: "TA (mmHg)/Systole",
    description: "Pression artérielle systolique",
    color: "accent"
  }
];

const metrics = [
  { name: "Précision (Accuracy)", value: 97.2 },
  { name: "Sensibilité (Recall)", value: 95.8 },
  { name: "Spécificité", value: 94.5 },
  { name: "F1-Score", value: 96.3 }
];

export default function ModelSection() {
  const getColorClass = (color: string) => {
    switch(color) {
      case 'primary': return 'bg-primary-400';
      case 'secondary': return 'bg-secondary-400';
      case 'accent': return 'bg-accent-400';
      default: return 'bg-primary-400';
    }
  };
  
  return (
    <section id="model" className="py-16 bg-neutral-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Notre modèle prédictif</h2>
          <p className="text-neutral-600">Découvrez comment notre modèle d'intelligence artificielle analyse les indicateurs cliniques pour prédire avec précision le stade de l'IRC.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="rounded-xl bg-white p-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),_0_8px_10px_-6px_rgba(0,0,0,0.02)]">
            <h3 className="text-xl font-semibold mb-4">Caractéristiques d'entrée</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-2 h-2 ${getColorClass(feature.color)} rounded-full mr-2`}></div>
                  <div>
                    <div className="font-medium">{feature.name}</div>
                    <p className="text-sm text-neutral-500">{feature.description}</p>
                  </div>
                </div>
              ))}
              
              <a href="/model" className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center">
                Voir toutes les caractéristiques
                <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
          
          <div className="rounded-xl bg-white p-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),_0_8px_10px_-6px_rgba(0,0,0,0.02)]">
            <h3 className="text-xl font-semibold mb-4">Performance du modèle</h3>
            <div className="space-y-6">
              {metrics.map((metric, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <div className="text-sm font-medium">{metric.name}</div>
                    <div className="text-sm font-medium">{metric.value}%</div>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2.5">
                    <div 
                      className="bg-primary-500 h-2.5 rounded-full" 
                      style={{ width: `${metric.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              
              <div className="p-4 rounded-lg bg-neutral-50">
                <div className="text-sm font-medium mb-2">Information sur les stades</div>
                <p className="text-sm text-neutral-600">Le modèle prédit 5 stades différents de l'IRC, de 0 (absence d'IRC) à 5 (insuffisance rénale terminale).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
