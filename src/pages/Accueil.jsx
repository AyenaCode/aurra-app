/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import bgImage from "../assets/BgImages/background.jpg";
import { FaqSection } from "../components/FaqSection";
import { Footer } from "../components/Footer";
import { ProjectSection } from "../components/ProjectSection";
import { ServiceSection } from "../components/ServiceSection";
import { Superbtn } from "../components/Superbtn";
import { TestimonialSection } from "../components/TestimonialSection";

// Composant réutilisable pour les sections
const Section = ({ className, children }) => (
  <section className={className}>
    <div className="container mx-auto text-center px-4">{children}</div>
  </section>
);

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// Composant réutilisable pour les titres
const Heading = ({ children, className = "" }) => (
  <h2 className={`text-4xl font-bold mb-8 ${className}`}>{children}</h2>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Composant réutilisable pour les paragraphes
const Paragraph = ({ children, className = "" }) => (
  <p className={`text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${className}`}>
    {children}
  </p>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

//Colorer un texte en span personalisé
export const Span = ({ children, className = "" }) => {
  return (
    <span
      className={`text-transparent bg-clip-text bg-gradient-to-r from-blueColor to-violetColor ${className}`}
    >
      {children}
    </span>
  );
};

Span.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Section héro avec image de fond et texte superposé
const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Overlay sombre pour améliorer la lisibilité du texte */}
    <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
    <motion.img
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 10 }}
      src={bgImage}
      alt="AURRA Communication background"
      className="absolute inset-0 w-full h-full object-cover object-center"
    />
    <div className="container mx-auto text-center relative z-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-4xl sm:text-5xl md:text-6xl px-10 font-extrabold mb-6 leading-tight text-base-100"
      >
        AURRA <Span className="brightness-150">Communication</Span>, votre
        service Marketing <Span className="brightness-150">Digital</Span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Paragraph className="text-lg shadowText sm:text-xl md:text-2xl text-base-100">
          Propulsez votre entreprise vers de nouveaux sommets avec nos solutions
          de marketing digital sur mesure
        </Paragraph>
        <div>
          <Link to="/contact">
            <Superbtn>Obtenez votre devis gratuit</Superbtn>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

// Section "Pourquoi nous choisir"
const WhyChooseUsSection = () => (
  <Section className="about-preview bg-base-300 py-24">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Heading className="text-base-content">
        Pourquoi Choisir Notre Agence ?
      </Heading>
      <Paragraph className="text-base-content/70 max-w-4xl">
        Avec plus de 6 ans d'expérience dans la communication, notre équipe
        d'experts est dédiée à votre réussite. Nous combinons créativité,
        technologie et stratégie pour propulser votre entreprise vers de
        nouveaux sommets.
      </Paragraph>
      <Link to="/a-propos">
        <Superbtn>En savoir plus sur nous</Superbtn>
      </Link>
    </motion.div>
  </Section>
);

// Section d'appel à l'action (CTA)
const CTASection = () => (
  <Section className="cta bg-gradient-to-r from-secondary to-primary text-base-100 py-24">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Heading>Prêt à booster votre présence en ligne ?</Heading>
      <Paragraph>
        Contactez-nous dès aujourd'hui pour une consultation gratuite et
        découvrez comment nous pouvons vous aider à atteindre vos objectifs.
      </Paragraph>
      <Link to="/contact">
        <Superbtn>Contactez-nous maintenant</Superbtn>
      </Link>
    </motion.div>
  </Section>
);

// Composant principal de la page d'accueil
const Accueil = () => {
  return (
    <div className="bg-base-100">
      <main>
        <HeroSection />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ProjectSection />
          <ServiceSection />
          <WhyChooseUsSection />
          <TestimonialSection />
          <CTASection />
          <FaqSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Accueil;
