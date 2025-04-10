import { ModelBenchmark } from "@shared/types";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const benchmarkData: ModelBenchmark[] = [
  {
    name: "NéphroPredict",
    accuracy: 97.2,
    description: "Notre modèle",
    isOurs: true
  },
  {
    name: "Modèle standard",
    accuracy: 82.4,
    description: "Basé sur la régression",
    isOurs: false
  },
  {
    name: "CKD-Predictor",
    accuracy: 87.6,
    description: "Solution commerciale",
    isOurs: false
  },
  {
    name: "KidneyML",
    accuracy: 85.1,
    description: "Open-source",
    isOurs: false
  }
];

export default function BenchmarkSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Benchmark du modèle</h2>
          <p className="text-neutral-600">Notre modèle surpasse les solutions existantes en termes de précision et de fiabilité des prédictions.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-neutral-50 rounded-xl p-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),_0_8px_10px_-6px_rgba(0,0,0,0.02)]">
            <h3 className="text-xl font-semibold mb-4">Comparaison des modèles</h3>
            <div className="space-y-5">
              {benchmarkData.map((model, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <div>
                      <div className="font-medium">{model.name}</div>
                      <div className="text-sm text-neutral-500">{model.description}</div>
                    </div>
                    <div className="font-semibold">{model.accuracy}%</div>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2.5">
                    <div 
                      className={`${model.isOurs ? 'bg-primary-500' : 'bg-neutral-500'} h-2.5 rounded-full`} 
                      style={{ width: `${model.accuracy}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-neutral-50 rounded-xl p-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),_0_8px_10px_-6px_rgba(0,0,0,0.02)]">
            <h3 className="text-xl font-semibold mb-4">Distribution par stade</h3>
            <div className="h-64 flex items-center justify-center bg-white rounded-lg p-4 mb-4">
              <svg className="w-full h-full text-neutral-300" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Bar chart */}
                <rect x="50" y="150" width="40" height="20" fill="#3A0CA3" opacity="0.7" />
                <rect x="110" y="130" width="40" height="40" fill="#3A0CA3" opacity="0.7" />
                <rect x="170" y="80" width="40" height="90" fill="#3A0CA3" opacity="0.7" />
                <rect x="230" y="40" width="40" height="130" fill="#3A0CA3" opacity="0.7" />
                <rect x="290" y="90" width="40" height="80" fill="#3A0CA3" opacity="0.7" />
                
                {/* X and Y axis */}
                <line x1="40" y1="170" x2="350" y2="170" stroke="currentColor" strokeWidth="2" />
                <line x1="40" y1="20" x2="40" y2="170" stroke="currentColor" strokeWidth="2" />
                
                {/* Labels */}
                <text x="70" y="190" fill="currentColor" fontSize="12" textAnchor="middle">Stade 0</text>
                <text x="130" y="190" fill="currentColor" fontSize="12" textAnchor="middle">Stade 1</text>
                <text x="190" y="190" fill="currentColor" fontSize="12" textAnchor="middle">Stade 2</text>
                <text x="250" y="190" fill="currentColor" fontSize="12" textAnchor="middle">Stade 3</text>
                <text x="310" y="190" fill="currentColor" fontSize="12" textAnchor="middle">Stade 4</text>
              </svg>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm font-medium mb-2">Taille de l'échantillon</div>
                <div className="text-2xl font-semibold">1,245</div>
                <div className="text-xs text-neutral-500">patients</div>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <div className="text-sm font-medium mb-2">Âge moyen</div>
                <div className="text-2xl font-semibold">58.7</div>
                <div className="text-xs text-neutral-500">ans</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="inline-flex items-center border-primary-200 text-primary-600 hover:bg-primary-50"
          >
            Télécharger le rapport complet de benchmark
            <Download className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
