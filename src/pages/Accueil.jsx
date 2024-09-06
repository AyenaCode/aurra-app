/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { AboutSection } from "../components/AboutSection";
import { FaqSection } from "../components/FaqSection";
import Footer from "../components/Footer";
import { ProjectSection } from "../components/ProjectSection";
import { ServiceSection } from "../components/ServiceSection";
import { Superbtn } from "../components/Superbtn";

const Accueil = () => {
  return (
    <div>
      <main className="pt-16">
        <section className="hero bg-gradient-to-r from-primary to-secondary text-base-100 py-32">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Agence de Communication Marketing
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Propulsez votre entreprise vers de nouveaux sommets avec nos
              solutions de marketing digital sur mesure
            </p>
            <Link to="/contact">
              <Superbtn>Obtenez votre devis gratuit</Superbtn>
            </Link>
          </div>
        </section>
        <AboutSection />
        <ProjectSection />
        <ServiceSection />
        <section className="about-preview bg-base-300 py-24">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-10 text-base-content">
              Pourquoi Choisir Notre Agence ?
            </h2>
            <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-base-content/70">
              Avec plus de 6 ans d'expérience dans la communication, notre
              équipe d'experts est dédiée à votre réussite. Nous combinons
              créativité, technologie et stratégie pour propulser votre
              entreprise vers de nouveaux sommets.
            </p>
            <Link to="/a-propos">
              <Superbtn>En savoir plus sur nous</Superbtn>
            </Link>
          </div>
        </section>
        <section className="testimonials bg-base-200 py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-base-content">
              Ce que disent nos clients
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-base-300 p-8 rounded-lg shadow-lg">
                <p className="mb-6 text-base-content/70 italic">
                  "Grâce à leur expertise en SEO, notre trafic organique a
                  augmenté de 200% en seulement 6 mois !"
                </p>
                <p className="font-bold text-base-content">
                  - Marie D., PDG de TechSolutions
                </p>
              </div>
              <div className="bg-base-300 p-8 rounded-lg shadow-lg">
                <p className="mb-6 text-base-content/70 italic">
                  "Leur équipe a transformé notre présence sur les réseaux
                  sociaux. Nos ventes en ligne ont explosé !"
                </p>
                <p className="font-bold text-base-content">
                  - Thomas L., Directeur Marketing chez FashionBrand
                </p>
              </div>
              <div className="bg-base-300 p-8 rounded-lg shadow-lg">
                <p className="mb-6 text-base-content/70 italic">
                  "Un partenaire de confiance qui comprend vraiment nos besoins
                  et livre des résultats exceptionnels."
                </p>
                <p className="font-bold text-base-content">
                  - Sophie M., Fondatrice de GreenStartup
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="cta bg-gradient-to-r from-secondary to-primary text-base-100 py-24">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-8">
              Prêt à booster votre présence en ligne ?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et
              découvrez comment nous pouvons vous aider à atteindre vos
              objectifs.
            </p>
            <Link to="/contact">
              <Superbtn>Contactez-nous maintenant</Superbtn>
            </Link>
          </div>
        </section>
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Accueil;
