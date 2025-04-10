import { ArrowRight, Check } from "lucide-react";
import { Helmet } from "react-helmet";
import { ModelFeature } from "@shared/types";

const allFeatures: ModelFeature[] = [
  {
    name: "Créatinine (mg/L)",
    description: "Concentration de créatinine dans le sang en milligrammes par litre. Indicateur clé de la fonction rénale.",
    color: "primary"
  },
  {
    name: "Urée (g/L)",
    description: "Concentration d'urée dans le sang en grammes par litre. Mesure la capacité des reins à éliminer les déchets azotés.",
    color: "accent"
  },
  {
    name: "Âge",
    description: "L'âge du patient, exprimé en années. Facteur de risque important dans l'IRC.",
    color: "secondary"
  },
  {
    name: "Na^+ (meq/L)",
    description: "La concentration de sodium dans le sang en milléquivalents par litre. Reflète l'équilibre hydroélectrolytique.",
    color: "primary"
  },
  {
    name: "TA (mmHg)/Systole",
    description: "La pression artérielle systolique en millimètres de mercure. Hypertension est facteur de risque et complication de l'IRC.",
    color: "accent"
  },
  {
    name: "Choc de Pointe/Perçu",
    description: "Représente la présence de choc, valeur binaire (0 ou 1).",
    color: "secondary"
  },
  {
    name: "Score de Glasgow (/15)",
    description: "Score d'évaluation de l'état neurologique, avec une échelle de 3 à 15.",
    color: "primary"
  },
  {
    name: "Sexe",
    description: "Représentation encodée du sexe du patient : 1 pour homme, 0 pour femme.",
    color: "accent"
  },
  {
    name: "Anémie",
    description: "Indique la présence d'anémie : 1 si présente, 0 sinon. Complication fréquente de l'IRC.",
    color: "secondary"
  },
  {
    name: "Enquête Sociale/Tabac",
    description: "Indique si le patient utilise du tabac : 1 si oui, 0 sinon. Facteur aggravant de l'IRC.",
    color: "primary"
  },
  {
    name: "Enquête Sociale/Alcool",
    description: "Indique si le patient consomme de l'alcool : 1 si oui, 0 sinon. Peut affecter la progression de l'IRC.",
    color: "accent"
  }
];

const stageDescriptions = [
  {
    stage: 0,
    name: "Fonction rénale normale",
    description: "Pas d'IRC. Fonction rénale normale avec un DFG supérieur à 90 ml/min/1,73 m².",
    recommendations: ["Maintien d'une bonne hydratation", "Activité physique régulière", "Contrôle annuel"]
  },
  {
    stage: 1,
    name: "IRC légère",
    description: "Légère diminution de la fonction rénale avec un DFG entre 60 et 89 ml/min/1,73 m². Signes minimes ou absents.",
    recommendations: ["Contrôle de la pression artérielle", "Suivi annuel", "Éviter les médicaments néphrotoxiques"]
  },
  {
    stage: 2,
    name: "IRC légère à modérée",
    description: "Diminution modérée de la fonction rénale avec un DFG entre 45 et 59 ml/min/1,73 m².",
    recommendations: ["Surveillance semestrielle", "Régime alimentaire adapté", "Contrôle des facteurs de risque"]
  },
  {
    stage: 3,
    name: "IRC modérée à sévère",
    description: "Diminution significative de la fonction rénale avec un DFG entre 30 et 44 ml/min/1,73 m².",
    recommendations: ["Suivi néphrologue trimestriel", "Traitement des complications", "Régime restreint en potassium et phosphore"]
  },
  {
    stage: 4,
    name: "IRC sévère",
    description: "Diminution sévère de la fonction rénale avec un DFG entre 15 et 29 ml/min/1,73 m².",
    recommendations: ["Préparation à la dialyse", "Suivi mensuel", "Traitement intensif des complications"]
  },
  {
    stage: 5,
    name: "IRC terminale",
    description: "Insuffisance rénale terminale avec un DFG inférieur à 15 ml/min/1,73 m² nécessitant un traitement de suppléance.",
    recommendations: ["Dialyse ou transplantation", "Suivi hebdomadaire", "Gestion des symptômes urémiques"]
  }
];

const getColorClass = (color: string) => {
  switch(color) {
    case 'primary': return 'bg-primary-400';
    case 'secondary': return 'bg-secondary-400';
    case 'accent': return 'bg-accent-400';
    default: return 'bg-primary-400';
  }
};

export default function Model() {
  return (
    <>
      <Helmet>
        <title>Modèle - NéphroPredict</title>
        <meta name="description" content="Découvrez notre modèle prédictif avancé pour l'insuffisance rénale chronique et ses caractéristiques techniques." />
      </Helmet>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Notre modèle prédictif</h1>
            <p className="text-xl text-neutral-600 mb-12">
              Notre modèle utilise l'apprentissage automatique pour analyser les indicateurs cliniques et prédire avec précision le stade de l'IRC.
            </p>
            
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Caractéristiques d'entrée</h2>
              <p className="text-neutral-600 mb-8">
                Le modèle analyse les paramètres suivants pour établir sa prédiction. Chaque paramètre joue un rôle spécifique dans l'évaluation de la fonction rénale et la détermination du stade de l'IRC.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {allFeatures.map((feature, index) => (
                  <div key={index} className="bg-white p-5 rounded-xl border border-neutral-200 hover:border-primary-200 hover:shadow-md transition-all">
                    <div className="flex items-center mb-3">
                      <div className={`w-3 h-3 ${getColorClass(feature.color)} rounded-full mr-3`}></div>
                      <h3 className="font-semibold text-lg">{feature.name}</h3>
                    </div>
                    <p className="text-neutral-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Stades de l'IRC</h2>
              <p className="text-neutral-600 mb-8">
                Notre modèle prédit le stade de l'Insuffisance Rénale Chronique selon la classification internationale, du stade 0 (fonction normale) au stade 5 (insuffisance terminale).
              </p>
              
              <div className="space-y-4">
                {stageDescriptions.map((stage) => (
                  <div key={stage.stage} className="bg-white p-6 rounded-xl border border-neutral-200">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold mr-3">
                        {stage.stage}
                      </div>
                      <h3 className="font-semibold text-lg">{stage.name}</h3>
                    </div>
                    <p className="text-neutral-600 mb-4">{stage.description}</p>
                    <div>
                      <h4 className="font-medium text-sm text-primary-700 mb-2">Recommandations principales:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {stage.recommendations.map((rec, idx) => (
                          <li key={idx} className="flex items-center text-sm text-neutral-700">
                            <Check size={16} className="text-primary-500 mr-2 flex-shrink-0" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Performances du modèle</h2>
              <p className="text-neutral-600 mb-6">
                Notre modèle a été entraîné sur un large ensemble de données cliniques et validé par des experts en néphrologie. Ses performances sont évaluées selon des métriques standardisées.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-neutral-500 mb-1">Précision globale</div>
                  <div className="text-2xl font-semibold text-primary-600">97.2%</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-neutral-500 mb-1">Sensibilité</div>
                  <div className="text-2xl font-semibold text-primary-600">95.8%</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-neutral-500 mb-1">Spécificité</div>
                  <div className="text-2xl font-semibold text-primary-600">94.5%</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-neutral-500 mb-1">F1-Score</div>
                  <div className="text-2xl font-semibold text-primary-600">96.3%</div>
                </div>
              </div>
              
              <a href="/benchmark" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700">
                Voir notre rapport de benchmark complet
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
