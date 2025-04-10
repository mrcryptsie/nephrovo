import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ModelPreview from "@/lib/3d/ModelPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 w-3/4 h-3/4 rounded-bl-[100px] opacity-10 bg-gradient-to-b from-primary-300 to-accent-400"></div>
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 rounded-tr-[50px] opacity-10 bg-gradient-to-t from-secondary-300 to-primary-400"></div>
      </div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-6 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Prédiction Précise du 
            <span className="gradient-text"> Stade de l'IRC</span>
          </h1>
          <p className="text-lg text-neutral-600 mb-8 max-w-xl">
            Utilisez notre modèle d'intelligence artificielle avancé pour prédire avec précision le stade de l'Insuffisance Rénale Chronique à partir des données cliniques.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/prediction">
              <Button className="px-6 py-6 shadow-[0_4px_6px_-1px_rgba(67,97,238,0.2),_0_2px_4px_-1px_rgba(67,97,238,0.1)] hover:shadow-lg">
                Commencer une prédiction
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/model">
              <Button variant="outline" className="px-6 py-6 border-primary-200 text-primary-600 hover:bg-primary-50">
                En savoir plus sur le modèle
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-6">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-neutral-200 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-neutral-300 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-neutral-400 border-2 border-white"></div>
            </div>
            <div className="text-sm text-neutral-600">
              <span className="font-semibold">+850 professionnels de santé</span> utilisent notre solution
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <ModelPreview />
        </div>
      </div>
    </section>
  );
}
