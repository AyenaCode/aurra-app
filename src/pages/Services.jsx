import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaCamera,
  FaChartLine,
  FaCode,
  FaPalette,
  FaPencilAlt,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { ServiceCard } from "../components/ServiceCard";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const services = [
    {
      title: "Marketing Digital",
      description:
        "Boostez votre présence en ligne avec nos stratégies de marketing digital sur mesure. Nous utilisons les dernières technologies et tendances pour maximiser votre visibilité et vos conversions.",
      Icon: FaRocket,
      details: [
        "Analyse approfondie de votre marché cible",
        "Stratégies SEO/SEA optimisées",
        "Campagnes de publicité ciblées",
        "Optimisation des taux de conversion",
        "Rapports détaillés et analyses de performance",
      ],
      price: 1500,
    },
    {
      title: "Gestion des Réseaux Sociaux",
      description:
        "Engagez votre audience et construisez une communauté fidèle avec notre gestion experte des réseaux sociaux. Nous créons du contenu captivant et gérons vos interactions pour renforcer votre marque.",
      Icon: FaBullhorn,
      details: [
        "Création de contenu personnalisé",
        "Planification et programmation des posts",
        "Gestion des commentaires et messages",
        "Analyse des performances et ajustements",
        "Stratégies d'engagement et de croissance",
      ],
      price: 1200,
    },
    {
      title: "Développement Web",
      description:
        "Créez une présence en ligne impressionnante avec nos services de développement web. Nous concevons des sites web responsifs, rapides et optimisés pour les moteurs de recherche.",
      Icon: FaCode,
      details: [
        "Design UX/UI personnalisé",
        "Développement front-end et back-end",
        "Optimisation des performances",
        "Intégration de fonctionnalités avancées",
        "Maintenance et support continu",
      ],
      price: 2500,
    },
    {
      title: "Design Graphique",
      description:
        "Donnez vie à votre marque avec notre expertise en design graphique. Nous créons des visuels percutants qui captivent votre audience et renforcent votre identité visuelle.",
      Icon: FaPalette,
      details: [
        "Création de logo et identité de marque",
        "Design de supports marketing",
        "Infographies et visualisations de données",
        "Design d'interface utilisateur",
        "Illustrations personnalisées",
      ],
      price: 1800,
    },
    {
      title: "Création de Contenu",
      description:
        "Engagez votre audience avec du contenu de qualité. Notre équipe de rédacteurs experts crée du contenu persuasif et informatif qui positionne votre marque comme leader dans votre industrie.",
      Icon: FaPencilAlt,
      details: [
        "Rédaction d'articles de blog",
        "Création de livres blancs et e-books",
        "Copywriting pour sites web et publicités",
        "Scénarios pour vidéos marketing",
        "Newsletters et emails marketing",
      ],
      price: 1300,
    },
    {
      title: "Production Audiovisuelle",
      description:
        "Racontez l'histoire de votre marque de manière captivante avec nos services de production audiovisuelle. Nous créons des vidéos professionnelles qui inspirent et convertissent.",
      Icon: FaCamera,
      details: [
        "Conception et storyboarding",
        "Tournage professionnel",
        "Montage et post-production",
        "Animation et effets spéciaux",
        "Optimisation pour les plateformes sociales",
      ],
      price: 3000,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <main>
        <motion.section
          className="py-20 bg-gradient-to-r from-blue-950 to-violet-950 text-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-center"
              variants={itemVariants}
            >
              Nos Services Sur Mesure
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-center max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Propulsez votre entreprise vers de nouveaux sommets avec nos
              solutions de marketing digital expertes et personnalisées.
            </motion.p>
            <motion.div className="flex justify-center" variants={itemVariants}>
              <Link
                to="/contact"
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
              >
                Obtenez votre stratégie personnalisée
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <section className="py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Nos Services Détaillés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  Icon={service.Icon}
                  details={service.details}
                  price={service.price}
                />
              ))}
            </div>
          </div>
        </section>

        <motion.section
          className="py-16 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold mb-12 text-center text-gray-800"
              variants={itemVariants}
            >
              Pourquoi choisir nos services ?
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FaRocket,
                  title: "Expertise Pointue",
                  description:
                    "Notre équipe d'experts maîtrise les dernières tendances et technologies du marketing digital.",
                },
                {
                  icon: FaChartLine,
                  title: "Résultats Mesurables",
                  description:
                    "Nous nous engageons à fournir des résultats concrets et mesurables pour votre entreprise.",
                },
                {
                  icon: FaUsers,
                  title: "Approche Personnalisée",
                  description:
                    "Chaque stratégie est conçue sur mesure pour répondre à vos objectifs spécifiques.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-lg text-center"
                  variants={itemVariants}
                >
                  <item.icon className="text-5xl mb-4 text-blue-600 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-20 bg-blue-600 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              className="text-3xl font-bold mb-6"
              variants={itemVariants}
            >
              Prêt à transformer votre présence en ligne ?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Ne laissez pas passer l&apos;opportunité de dominer votre marché.
              Contactez-nous dès aujourd&apos;hui pour une consultation gratuite
              et découvrez comment nos services peuvent propulser votre
              entreprise vers le succès.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
              >
                Commencez votre transformation digitale
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
