import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>À propos - NéphroPredict</title>
        <meta name="description" content="Découvrez NéphroPredict, la plateforme de prédiction avancée pour l'insuffisance rénale chronique." />
      </Helmet>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">À propos de NéphroPredict</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-neutral-600 mb-8">
                NéphroPredict est une plateforme innovante d'intelligence artificielle dédiée à la prédiction précise des stades de l'Insuffisance Rénale Chronique (IRC) pour les professionnels de santé.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">Notre mission</h2>
              <p>
                Notre mission est de révolutionner le diagnostic et le suivi de l'IRC en fournissant aux néphrologues et aux professionnels de santé des outils d'aide à la décision basés sur l'intelligence artificielle. En combinant des algorithmes avancés d'apprentissage automatique avec l'expertise médicale, nous visons à améliorer la précision et la rapidité du diagnostic, permettant ainsi une prise en charge plus précoce et plus efficace des patients.
              </p>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">Notre approche</h2>
              <p>
                Notre plateforme repose sur un modèle prédictif avancé qui analyse un ensemble de paramètres cliniques et biologiques pour déterminer avec précision le stade de l'IRC. Ce modèle a été entraîné sur une vaste base de données de patients et a été validé par des néphrologues experts pour garantir sa fiabilité et sa pertinence clinique.
              </p>
              
              <p>
                Notre approche se distingue par :
              </p>
              
              <ul>
                <li>Une précision de prédiction supérieure à 95%</li>
                <li>L'intégration des dernières avancées en matière d'intelligence artificielle</li>
                <li>Une validation clinique rigoureuse</li>
                <li>Une interface utilisateur intuitive et professionnelle</li>
                <li>Des rapports détaillés et personnalisés</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-12 mb-4">Notre équipe</h2>
              <p>
                NéphroPredict a été développé par une équipe pluridisciplinaire de néphrologues, de data scientists et d'ingénieurs logiciels, tous animés par la passion d'améliorer la santé rénale. Notre équipe combine des décennies d'expérience clinique avec une expertise de pointe en intelligence artificielle et en développement logiciel.
              </p>
              
              <div className="mt-16 p-6 bg-primary-50 rounded-xl border border-primary-100">
                <h3 className="text-xl font-semibold text-primary-700 mb-3">Notre vision pour l'avenir</h3>
                <p className="text-neutral-700 mb-0">
                  Nous envisageons un avenir où chaque patient atteint d'IRC bénéficie d'un diagnostic précoce et d'un suivi personnalisé, optimisant ainsi les résultats cliniques et la qualité de vie. NéphroPredict continuera d'évoluer et d'intégrer de nouvelles fonctionnalités pour rester à la pointe de l'innovation en néphrologie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
