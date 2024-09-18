/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { AboutSection } from "../components/AboutSection";
import { FaqSection } from "../components/FaqSection";
import { Footer } from "../components/Footer";
import { ProjectSection } from "../components/ProjectSection";
import { ServiceSection } from "../components/ServiceSection";
import { Superbtn } from "../components/Superbtn";
import { TestimonialSection } from "../components/TestimonialSection";

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
        <TestimonialSection />
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
