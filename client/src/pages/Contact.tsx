import ContactSection from "@/components/contact/ContactSection";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - NéphroPredict</title>
        <meta name="description" content="Contactez notre équipe pour toute question sur NéphroPredict et notre modèle de prédiction de l'IRC." />
      </Helmet>
      
      <ContactSection />
    </>
  );
}
