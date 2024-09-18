/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaCalendarAlt,
  FaCamera,
  FaChartLine,
  FaCode,
  FaPalette,
  FaPencilAlt,
  FaRocket,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { ServiceCard } from "../components/ServiceCard";
import { Superbtn } from "../components/Superbtn";

const Services = () => {
  const services = [
    {
      title: "Stratégie Marketing Digital",
      description:
        "Élaborez une stratégie sur mesure pour dominer votre marché en ligne. Notre approche holistique intègre l'analyse de votre secteur, l'identification de votre audience cible, et la création d'un plan d'action détaillé. Nous utilisons des outils de pointe pour suivre les tendances du marché et ajuster votre stratégie en temps réel, garantissant ainsi une longueur d'avance sur vos concurrents.",
      Icon: FaRocket,
    },
    {
      title: "Optimisation SEO",
      description:
        "Propulsez votre site en tête des résultats de recherche grâce à notre expertise en SEO. Nous effectuons une analyse approfondie de vos mots-clés, optimisons votre contenu on-page, améliorons la structure technique de votre site, et développons une stratégie de backlinks de qualité. Notre approche SEO éthique et durable vous assure une visibilité à long terme et un flux constant de trafic qualifié.",
      Icon: FaSearch,
    },
    {
      title: "Marketing sur les Réseaux Sociaux",
      description:
        "Engagez votre audience et transformez vos followers en clients fidèles. Nous créons des stratégies de contenu personnalisées pour chaque plateforme, gérons vos campagnes publicitaires sociales, et interagissons activement avec votre communauté. Notre équipe utilise des outils d'analyse avancés pour mesurer l'engagement, ajuster les tactiques, et maximiser votre ROI sur les réseaux sociaux.",
      Icon: FaBullhorn,
    },
    {
      title: "Publicité en Ligne",
      description:
        "Maximisez votre retour sur investissement avec des campagnes publicitaires ciblées et optimisées. Nous concevons et gérons des campagnes sur Google Ads, Facebook Ads, LinkedIn Ads et plus encore. Notre approche data-driven nous permet d'affiner continuellement vos campagnes, en optimisant les enchères, les annonces et les pages de destination pour obtenir le meilleur coût par acquisition possible.",
      Icon: FaChartLine,
    },
    {
      title: "Création de Contenu",
      description:
        "Captivez votre audience avec du contenu percutant qui renforce votre autorité. Notre équipe de rédacteurs et de créatifs produit des articles de blog, des livres blancs, des infographies, et du contenu multimédia alignés sur vos objectifs marketing. Nous utilisons des techniques de storytelling avancées et des données SEO pour créer du contenu qui non seulement engage, mais aussi convertit.",
      Icon: FaPencilAlt,
    },
    {
      title: "Développement Web",
      description:
        "Créez une présence en ligne impressionnante avec des sites web modernes et performants. Nos développeurs utilisent les dernières technologies pour construire des sites rapides, sécurisés et optimisés pour les conversions. Que ce soit un site vitrine, une boutique e-commerce ou une application web complexe, nous concevons des solutions sur mesure qui reflètent votre marque et répondent aux besoins de vos utilisateurs.",
      Icon: FaCode,
    },
    {
      title: "Design Graphique",
      description:
        "Démarquez-vous avec une identité visuelle forte qui capte l'attention. Notre équipe de designers crée des logos, des chartes graphiques, des supports marketing et des interfaces utilisateur qui transmettent l'essence de votre marque. Nous utilisons les principes du design thinking pour créer des visuels non seulement esthétiques, mais aussi fonctionnels et alignés sur vos objectifs commerciaux.",
      Icon: FaPalette,
    },
    {
      title: "Production Audiovisuelle",
      description:
        "Racontez votre histoire de manière captivante avec des vidéos professionnelles. De la conceptualisation au montage final, notre équipe de production crée des vidéos promotionnelles, des publicités, des tutoriels et des contenus pour les réseaux sociaux qui inspirent et convertissent. Nous utilisons des équipements de pointe et des techniques narratives innovantes pour produire des vidéos qui se démarquent dans un paysage médiatique saturé.",
      Icon: FaCamera,
    },
    {
      title: "Événementiel",
      description:
        "Créez des expériences mémorables qui renforcent votre image de marque. Nous organisons et gérons des lancements de produits, des conférences, des webinaires et des événements de networking qui génèrent des opportunités d'affaires. Notre approche intègre des éléments digitaux innovants pour maximiser l'engagement et l'impact de vos événements, qu'ils soient physiques, virtuels ou hybrides.",
      Icon: FaCalendarAlt,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <>
      <main className="bg-base-100">
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero bg-gradient-to-r from-blue-950 to-secondary text-white py-20"
        >
          <div className="container mx-auto text-center px-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl font-bold mb-6"
            >
              Propulsez Votre Entreprise vers le Succès
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              Découvrez nos solutions de communication et de marketing digital
              sur mesure, conçues pour transformer votre vision en résultats
              concrets et mesurables.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link to="/contact">
                <Superbtn>Obtenez votre stratégie personnalisée</Superbtn>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <section className="services py-16 bg-base-200">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center mb-12"
            >
              Nos Services d'Excellence
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    Icon={service.Icon}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="cta bg-gradient-to-r from-secondary to-primary text-white py-20"
        >
          <div className="container mx-auto text-center px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl font-bold mb-8"
            >
              Prêt à Révolutionner Votre Présence en Ligne ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl mb-12 max-w-3xl mx-auto"
            >
              Ne laissez pas vos concurrents vous devancer. Contactez-nous dès
              aujourd'hui pour une consultation gratuite et découvrez comment
              nos services sur mesure peuvent propulser votre entreprise vers de
              nouveaux sommets.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link to="/contact">
                <Superbtn>Lancez Votre Transformation Digitale</Superbtn>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
