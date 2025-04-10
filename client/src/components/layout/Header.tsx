import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Modèle', href: '/model' },
    { name: 'Benchmark', href: '/benchmark' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 relative">
            <div className="absolute inset-0 bg-primary-400 rounded-lg opacity-70"></div>
            <div className="absolute inset-1 bg-white rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary-400 to-secondary-600"></div>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold">NéphroPredict</h1>
            <div className="text-xs text-neutral-500 -mt-1">Prédiction avancée de l'IRC</div>
          </div>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <a 
                    className={`block py-2 transition-colors ${
                      location === item.href ? 'text-primary-600 font-medium' : 'text-neutral-500 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-3">
          <Link href="/prediction">
            <Button className="hidden md:inline-flex shadow-[0_4px_6px_-1px_rgba(67,97,238,0.2),_0_2px_4px_-1px_rgba(67,97,238,0.1)]">
              Faire une prédiction
            </Button>
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden w-10 h-10 flex items-center justify-center"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 py-2">
          <div className="container mx-auto px-4 space-y-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a 
                  className={`block py-2 px-3 rounded-md ${
                    location === item.href 
                      ? 'bg-primary-50 text-primary-600 font-medium' 
                      : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <Link href="/prediction">
              <a 
                className="block py-2 px-3 mt-2 bg-primary-500 text-white rounded-md font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Faire une prédiction
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
