/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AboutSection } from "../components/AboutSection";
import { FaqSection } from "../components/FaqSection";
import { Footer } from "../components/Footer";
import { ProjectSection } from "../components/ProjectSection";
import { ServiceSection } from "../components/ServiceSection";
import { Superbtn } from "../components/Superbtn";
import { TestimonialSection } from "../components/TestimonialSection";

const Accueil = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="bg-base-100">
      <main>
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="hero bg-gradient-to-r from-violet-900 to-blue-800 text-base-100 py-32"
        >
          <div className="container mx-auto text-center px-4">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
            >
              AURRA Communication et Marketing
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Propulsez votre entreprise vers de nouveaux sommets avec nos
              solutions de marketing digital sur mesure
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/contact">
                <Superbtn>Obtenez votre devis gratuit</Superbtn>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <AboutSection />
        <ProjectSection />
        <ServiceSection />

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="about-preview bg-base-300 py-24"
        >
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
        </motion.section>

        <TestimonialSection />

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="cta bg-gradient-to-r from-secondary to-primary text-base-100 py-24"
        >
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
        </motion.section>

        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Accueil;
