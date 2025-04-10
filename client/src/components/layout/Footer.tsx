import { Link } from "wouter";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 bg-primary-400 rounded-lg opacity-70"></div>
                <div className="absolute inset-1 bg-neutral-800 rounded-md"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary-400 to-secondary-600"></div>
                </div>
              </div>
              <div className="text-lg font-semibold">NéphroPredict</div>
            </div>
            <p className="text-neutral-400 text-sm mb-6">
              Solution avancée de prédiction de l'IRC basée sur l'intelligence artificielle pour les professionnels de santé.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center hover:bg-neutral-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center hover:bg-neutral-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center hover:bg-neutral-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/"><a className="text-neutral-400 hover:text-white transition-colors">Accueil</a></Link></li>
              <li><Link href="/about"><a className="text-neutral-400 hover:text-white transition-colors">À propos</a></Link></li>
              <li><Link href="/model"><a className="text-neutral-400 hover:text-white transition-colors">Modèle</a></Link></li>
              <li><Link href="/benchmark"><a className="text-neutral-400 hover:text-white transition-colors">Benchmark</a></Link></li>
              <li><Link href="/prediction"><a className="text-neutral-400 hover:text-white transition-colors">Prédiction</a></Link></li>
              <li><Link href="/contact"><a className="text-neutral-400 hover:text-white transition-colors">Contact</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Documentation API</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Guide d'utilisation</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Publications scientifiques</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">RGPD</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NéphroPredict. Tous droits réservés.
          </div>
          <div className="text-neutral-400 text-sm">
            Développé avec ❤️ pour la santé rénale
          </div>
        </div>
      </div>
    </footer>
  );
}
