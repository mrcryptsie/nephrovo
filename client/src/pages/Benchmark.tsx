import BenchmarkSection from "@/components/benchmark/BenchmarkSection";
import { Helmet } from "react-helmet";

export default function Benchmark() {
  return (
    <>
      <Helmet>
        <title>Benchmark - NéphroPredict</title>
        <meta name="description" content="Découvrez les performances de notre modèle de prédiction de l'IRC comparé aux solutions existantes." />
      </Helmet>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-6">Benchmark de notre modèle</h1>
            <p className="text-xl text-neutral-600">
              Notre modèle prédictif a été évalué selon des critères rigoureux et comparé aux solutions existantes pour garantir une performance optimale.
            </p>
          </div>
        </div>
      </section>
      
      <BenchmarkSection />
      
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Méthodologie d'évaluation</h2>
            <p className="text-neutral-600 mb-8">
              Pour garantir l'objectivité et la rigueur de notre évaluation, nous avons suivi une méthodologie d'évaluation standardisée :
            </p>
            
            <div className="bg-white rounded-xl p-6 shadow-sm mb-12">
              <ol className="space-y-4">
                <li className="flex">
                  <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold mr-3 flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-medium text-lg">Division des données</h3>
                    <p className="text-neutral-600">Nous avons divisé notre ensemble de données en trois parties : entraînement (70%), validation (15%) et test (15%).</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold mr-3 flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-medium text-lg">Validation croisée</h3>
                    <p className="text-neutral-600">Une validation croisée à 5 plis a été utilisée pour garantir la robustesse du modèle face à différentes distributions de données.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold mr-3 flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-medium text-lg">Métriques multiples</h3>
                    <p className="text-neutral-600">Évaluation selon plusieurs métriques : précision, sensibilité, spécificité, F1-score et courbe ROC.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold mr-3 flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-medium text-lg">Validation clinique</h3>
                    <p className="text-neutral-600">Validation des résultats par un panel de néphrologues experts pour garantir la pertinence clinique.</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <h2 className="text-2xl font-semibold mb-6">Cas d'utilisation clinique</h2>
            <p className="text-neutral-600 mb-8">
              Notre modèle a été testé dans différents contextes cliniques pour évaluer sa performance et son utilité pratique :
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-neutral-200">
                <h3 className="font-semibold text-lg mb-3">Dépistage précoce</h3>
                <p className="text-neutral-600">Le modèle a démontré une excellente capacité à identifier les patients aux stades précoces de l'IRC (stades 1-2), permettant une intervention plus rapide.</p>
                <div className="mt-3 text-sm font-medium text-primary-600">Précision: 93.4%</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-neutral-200">
                <h3 className="font-semibold text-lg mb-3">Évaluation de la progression</h3>
                <p className="text-neutral-600">Performance supérieure dans la prédiction de la progression entre les stades, permettant d'anticiper l'évolution de la maladie.</p>
                <div className="mt-3 text-sm font-medium text-primary-600">Précision: 89.7%</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-neutral-200">
                <h3 className="font-semibold text-lg mb-3">Population âgée</h3>
                <p className="text-neutral-600">Excellents résultats dans la population gériatrique, où le diagnostic différentiel peut être particulièrement complexe.</p>
                <div className="mt-3 text-sm font-medium text-primary-600">Précision: 91.2%</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-neutral-200">
                <h3 className="font-semibold text-lg mb-3">Comorbidités multiples</h3>
                <p className="text-neutral-600">Bonne performance même chez les patients présentant de multiples facteurs de risque et comorbidités associées.</p>
                <div className="mt-3 text-sm font-medium text-primary-600">Précision: 88.9%</div>
              </div>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
              <h3 className="text-xl font-semibold text-primary-700 mb-3">Conclusion</h3>
              <p className="text-neutral-700">
                Les évaluations ont démontré que notre modèle NéphroPredict surpasse significativement les solutions existantes en termes de précision, de fiabilité et d'applicabilité clinique. Sa capacité à traiter des données complexes et à fournir des prédictions précises en fait un outil précieux pour les professionnels de santé dans le diagnostic et le suivi de l'IRC.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
