import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaChartLine,
  FaCode,
  FaCog,
  FaLightbulb,
  FaPaintBrush,
  FaRocket,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Span } from "../pages/Accueil";
import { Card } from "./Card";
import { StatisticsSection } from "./StatisticsSection";
import { Superbtn } from "./Superbtn";

const icons = [FaCode, FaPaintBrush, FaChartLine, FaRocket, FaLightbulb, FaCog];
const colors = [
  "blue",
  "green",
  "red",
  "purple",
  "yellow",
  "pink",
  "orange",
  "indigo",
  "teal",
];

const generateBubbles = (count, sectionSize, bubbleVariants) => {
  const bubbles = [];

  for (let i = 0; i < count; i++) {
    const Icon = icons[Math.floor(Math.random() * icons.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.floor(Math.random() * 30) + 20;

    const startX = Math.random() * sectionSize.width;
    const startY = Math.random() * sectionSize.height;
    const endX = Math.random() * sectionSize.width;
    const endY = Math.random() * sectionSize.height;
    const duration = Math.random() * 20 + 10;

    bubbles.push(
      <motion.div
        key={i}
        className={`absolute text-${color}-500 opacity-20`}
        style={{ fontSize: `${size}px` }}
        variants={bubbleVariants}
        animate="animate"
        custom={{ startX, startY, endX, endY, duration }}
      >
        <Icon />
      </motion.div>
    );
  }
  return bubbles;
};

export const ProjectSection = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [sectionSize, setSectionSize] = useState({ width: 0, height: 0 });
  const sectionRef = useRef(null);

  const projects = [
    {
      title: "Campagne de marketing digital : +50% de ventes en 3 mois",
      description: (
        <>
          Découvrez comment nous avons propulsé les ventes de{" "}
          <Span className="font-semibold">TechInnovate</Span> grâce à une
          stratégie multi-canal innovante, combinant SEO, publicité ciblée et
          marketing de contenu. Résultat : une augmentation spectaculaire des
          ventes de 50% en seulement un trimestre.
        </>
      ),
      image: "/img4.jpg",
    },
    {
      title: "Refonte de site web : Trafic x3 et taux de conversion doublé",
      description: (
        <>
          Notre refonte complète du site de{" "}
          <Span className="font-semibold">GreenEco Solutions</Span> a non
          seulement triplé le trafic organique, mais a aussi doublé le taux de
          conversion. Apprenez comment notre approche centrée sur
          l&apos;utilisateur et optimisée pour le SEO a transformé leur présence
          en ligne.
        </>
      ),
      image: "/img-site.webp",
    },
    {
      title: "Stratégie de contenu : Engagement client multiplié par 5",
      description: (
        <>
          Grâce à notre stratégie de contenu sur mesure,{" "}
          <Span className="font-semibold">FitLife Nutrition</Span> a vu son
          engagement client exploser. Découvrez comment notre approche
          data-driven a permis de créer du contenu viral, augmentant la
          visibilité de la marque et générant un flux constant de leads
          qualifiés.
        </>
      ),
      image: "/contenu.webp",
    },
    {
      title: "Communication mode : De marque locale à icône nationale",
      description: (
        <>
          Voyez comment nous avons transformé{" "}
          <Span className="font-semibold">Urban Chic</Span>, une marque de mode
          locale, en un nom reconnu nationalement. Notre campagne intégrée,
          mêlant influenceurs, événements exclusifs et contenu engageant, a
          propulsé Urban Chic sur le devant de la scène fashion.
        </>
      ),
      image: "/fashion.webp",
    },
    {
      title: "App mobile : 1 million de téléchargements en 6 mois",
      description: (
        <>
          De la conception à la stratégie de lancement, découvrez comment notre
          expertise a permis à l&apos;application de{" "}
          <Span className="font-semibold">MindfulMoments</Span> d&apos;atteindre
          le million de téléchargements en un temps record. Un cas d&apos;étude
          parfait sur l&apos;importance d&apos;une UX fluide et d&apos;un
          marketing d&apos;app performant.
        </>
      ),
      image: "/out-0.webp",
    },
    {
      title: "Campagne B2B : +200% de leads qualifiés",
      description: (
        <>
          Notre approche sur mesure pour{" "}
          <Span className="font-semibold">IndustrialPro Solutions</Span> a
          révolutionné leur pipeline de vente B2B. Apprenez comment notre mix de
          marketing de contenu, d&apos;automation et de nurturing a plus que
          doublé leur génération de leads qualifiés, transformant leur processus
          de vente.
        </>
      ),
      image: "/img9.jpg",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [slidesToShow]);

  useEffect(() => {
    const updateSize = () => {
      if (sectionRef.current) {
        setSectionSize({
          width: sectionRef.current.offsetWidth,
          height: sectionRef.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: !isPaused,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 relative inline-block"
            variants={titleVariants}
          >
            Nos Réalisations Exceptionnelles
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-primary via-secondary to-primary"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            />
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 mt-4"
            variants={itemVariants}
          >
            Plongez dans nos success stories et découvrez comment nous
            transformons les défis en opportunités de croissance.
          </motion.p>
        </motion.div>

        <StatisticsSection />

        <motion.div
          className="mt-16"
          variants={containerVariants}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Slider ref={sliderRef} {...settings}>
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants} className="px-2">
                <Card
                  title={project.title}
                  description={project.description}
                  image={project.image}
                />
              </motion.div>
            ))}
          </Slider>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Superbtn>Propulsez Votre Projet avec Nous</Superbtn>
        </motion.div>
      </div>

      {/* Éléments de design en arrière-plan */}
      <motion.div
        className="absolute -top-10 -left-10 w-64 h-64 bg-blueColor rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute opacity-0 md:opacity-100 bottom-3/4 -right-10 w-64 h-64 bg-blueColor rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute opacity-0 md:opacity-100 bottom-30 left-10 w-32 h-32 bg-blueColor rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-violetColor opacity-20 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.section>
  );
};

ProjectSection.propTypes = {
  // Ajoutez ici les propTypes si nécessaire
};
