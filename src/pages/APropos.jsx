import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { Superbtn } from "../components/Superbtn";

const AnimatedSection = ({ children, className }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const APropos = () => {
  return (
    <div className="bg-base-100">
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-b from-blue-950 to-violet-950 text-white py-20"
      >
        <div className="mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl font-bold mb-4"
          >
            À Propos de Nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl mb-8"
          >
            Découvrez l&apos;équipe passionnée derrière vos succès en marketing
            digital
          </motion.p>
        </div>
      </motion.section>
      <AboutSection />
      <AnimatedSection className="py-20">
        <div className="mx-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Notre Histoire</h2>
              <p className="mb-4">
                Fondée en 2018, notre agence est née de la passion pour le
                marketing digital et de la volonté d&apos;aider les entreprises
                à réussir en ligne. Depuis, nous avons accompagné des centaines
                de clients vers le succès.
              </p>
              <p>
                Avec une équipe d&apos;experts dévoués et des solutions
                innovantes, nous sommes fiers d&apos;être un partenaire de
                confiance pour nos clients dans leur croissance digitale.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
              <p className="mb-4">
                Notre mission est simple : propulser votre entreprise vers de
                nouveaux sommets grâce à des stratégies de marketing digital sur
                mesure et efficaces.
              </p>
              <p>
                Nous croyons en la puissance de la créativité, de la technologie
                et de l&apos;analyse pour créer des campagnes qui génèrent des
                résultats tangibles et durables.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="cta bg-gradient-to-r from-secondary to-primary text-white py-20"
      >
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold mb-8"
          >
            Prêt à travailler avec nous ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl mb-8"
          >
            Découvrez comment notre expertise peut transformer votre présence en
            ligne.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link to="/contact">
              <Superbtn>Contactez-nous maintenant</Superbtn>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default APropos;
