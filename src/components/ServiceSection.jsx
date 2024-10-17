import PropTypes from "prop-types";
import {
  FaBriefcase,
  FaBullhorn,
  FaCalendar,
  FaCamera,
  FaCode,
  FaComments,
  FaGraduationCap,
  FaMicrophone,
  FaPalette,
  FaPencilAlt,
  FaStar,
  FaTruck,
  FaUserTie,
} from "react-icons/fa";
import { ServiceCard } from "./ServiceCard";

export const ServiceSection = () => {
  const Communication = [
    {
      title: "Stratégie de communication",
      description:
        "Élaboration de stratégies de communication globales pour améliorer votre image et votre message auprès de votre public cible.",
      Icon: FaComments,
      details: [
        "Analyse de la situation actuelle",
        "Développement d'une stratégie de communication",
        "Création de contenu de qualité",
        "Gestion des relations publiques",
        "Évaluation et ajustement de la stratégie",
      ],
      price: 120,
    },
    {
      title: "Gestion des Réseaux Sociaux",
      description:
        "Gestion professionnelle de vos profils sur les réseaux sociaux pour engager votre audience.",
      Icon: FaBullhorn,
      details: [
        "Analyse de la présence actuelle sur les réseaux sociaux",
        "Développement d'une stratégie de contenu",
        "Création et publication de contenu",
        "Gestion des interactions avec l'audience",
        "Analyse et ajustement de la stratégie",
      ],
      price: 180,
    },
    {
      title: "Création de Contenu",
      description:
        "Création de contenu engageant et pertinent pour votre marque et votre audience.",
      Icon: FaPencilAlt,
      details: [
        "Analyse de la cible et de ses besoins",
        "Développement d'une stratégie de contenu",
        "Création de contenu de qualité",
        "Optimisation pour les moteurs de recherche",
        "Analyse et ajustement de la stratégie",
      ],
      price: 200,
    },
    {
      title: "Graphisme",
      description:
        "Conception graphique professionnelle pour renforcer votre identité visuelle et captiver votre audience.",
      Icon: FaPalette,
      details: [
        "Analyse de la marque et de son image",
        "Développement d'une stratégie graphique",
        "Création de matériel visuel",
        "Gestion de la cohérence visuelle",
        "Analyse et ajustement de la stratégie",
      ],
      price: 220,
    },
    {
      title: "Production Audiovisuelle",
      description:
        "Création de contenu vidéo professionnel pour promouvoir votre marque et vos produits.",
      Icon: FaCamera,
      details: [
        "Analyse de la cible et de ses besoins",
        "Développement d'une stratégie de contenu",
        "Création de contenu vidéo de qualité",
        "Gestion de la production et de la post-production",
        "Analyse et ajustement de la stratégie",
      ],
      price: 280,
    },
    {
      title: "Développement Web",
      description:
        "Création de sites web modernes, responsives et optimisés pour les moteurs de recherche.",
      Icon: FaCode,
      details: [
        "Analyse des besoins et des objectifs",
        "Développement d'une stratégie de développement",
        "Création de sites web de qualité",
        "Optimisation pour les moteurs de recherche",
        "Analyse et ajustement de la stratégie",
      ],
      price: 250,
    },
  ];
  const Evenementiel = [
    {
      title: "Organisation d'événements",
      description:
        "Organisation d'événements professionnels, de congrès ou de festivals pour promouvoir votre marque et vos produits.",
      Icon: FaCalendar,
      details: [
        "Analyse des besoins et des objectifs",
        "Développement d'une stratégie d'organisation",
        "Gestion de la logistique",
        "Gestion des invités",
        "Analyse et ajustement de la stratégie",
      ],
      price: 300,
    },
    {
      title: "Lancement de produits",
      description:
        "Lancement de produits innovants, de nouvelles collections ou de nouvelles marques pour promouvoir votre marque et vos produits.",
      Icon: FaStar,
      details: [
        "Analyse des besoins et des objectifs",
        "Développement d'une stratégie de lancement",
        "Gestion de la logistique",
        "Gestion des invités",
      ],
      price: 350,
    },
    {
      title: "Conférences et séminaires",
      description:
        "Organisation de conférences et de séminaires pour promouvoir votre marque et vos produits.",
      Icon: FaMicrophone,
      details: [
        "Analyse des besoins et des objectifs",
        "Développement d'une stratégie d'organisation",
        "Gestion de la logistique",
        "Gestion des invités",
      ],
      price: 400,
    },
    {
      title: "évènements corporatifs",
      description:
        "Organisation d'événements corporatifs pour promouvoir votre marque et vos produits.",
      Icon: FaBriefcase,
      details: [
        "Analyse des besoins et des objectifs",
        "Développement d'une stratégie d'organisation",
        "Gestion de la logistique",
        "Gestion des invités",
      ],
      price: 350,
    },
    {
      title: "Coordination logistique",
      description:
        "Coordination logistique pour les événements professionnels, de congrès ou de festivals.",
      Icon: FaTruck,
      details: [
        "Analyse des besoins et des objectifs",
        "Développement d'une stratégie de coordination",
        "Gestion de la logistique",
        "Gestion des invités",
      ],
      price: 400,
    },
  ];

  const ServiceEmploi = [
    {
      title: "Recherche de talents",
      description: "Recherche de talents qualifiés pour votre entreprise.",
      Icon: FaUserTie,
      details: [
        "Analyse des besoins et des objectifs",
        "Recherche de talents qualifiés",
        "Gestion de la logistique",
        "Gestion des invités",
      ],
      price: 400,
    },
    {
      title: "Formation et développement",
      description:
        "Formation et développement pour vos employés pour améliorer leurs compétences et leurs performances.",
      Icon: FaGraduationCap,
      details: [
        "Analyse des besoins et des objectifs",
        "Développement d'une stratégie de développement",
        "Gestion de la logistique",
        "Gestion des invités",
      ],
      price: 400,
    },
    {
      title: "Recrutement",
      description: "Recrutement de talents qualifiés pour votre entreprise.",
      Icon: FaUserTie,
      details: [
        "Analyse des besoins et des objectifs",
        "Recherche de talents qualifiés",
        "Gestion de la logistique",
        "Gestion des invités",
      ],
      price: 400,
    },
    {
      title: "Conseil en ressources humaines",
      description:
        "Conseil en ressources humaines pour améliorer la gestion de votre entreprise.",
      Icon: FaUserTie,
      details: [
        "Analyse des besoins et des objectifs",
        "Développement d'une stratégie de développement",
        "Gestion de la logistique",
        "Gestion des invités",
      ],
      price: 400,
    },
    {
      title: "placement temporaire et permanent",
      description:
        "Placement temporaire et permanent de talents qualifiés pour votre entreprise.",
      Icon: FaUserTie,
      details: [
        "Analyse des besoins et des objectifs",
        "Recherche de talents qualifiés",
        "Gestion de la logistique",
        "Gestion des invités",
      ],
      price: 400,
    },
    {
      title: "coaching et accompagnement",
      description:
        "coaching et accompagnement pour les employés pour améliorer leurs compétences et leurs performances.",
      Icon: FaUserTie,
      details: [
        "Analyse des besoins et des objectifs",
        "Développement d'une stratégie de développement",
        "Gestion de la logistique",
        "Gestion des invités",
      ],
      price: 400,
    },
  ];

  const Service = ({ title, description, items }) => {
    return (
      <div className="py-12 px-4 bg-gradient-to-r from-gray-300 to-violet-300 rounded shadow-lg w-full md:w-1/3 mb-4 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          {title}
        </h2>
        <p className="my-3 text-sm md:text-base">{description}</p>
        <div className="">
          {items.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
              details={service.details}
              price={service.price}
              showPriceInitially={false}
            />
          ))}
        </div>
      </div>
    );
  };

  //typer les props avec proptypes
  Service.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
  };

  return (
    <section className="flex flex-col md:flex-row md:justify-between gap-4 p-4">
      <Service
        title="Communication"
        description="Nous croyons en l'importance d'une communication stratégique et
          cohérente pour renforcer votre marque et atteindre vos objectifs
          commerciaux. Voici nos services de communication :"
        items={Communication}
      />
      <Service
        title="Evenementiel"
        description="Transformez vos événements en expériences inoubliables avec nos services d'organisation événementielle. Nous prenons en charge chaque détail pour assurer le succès de vos événements."
        items={Evenementiel}
      />
      <Service
        title="Emploi"
        description="Facilitez vos processus de recrutement et développement professionnel avec nos services d'emploi. Nous vous aidons à constituer une équipe solide et compétente."
        items={ServiceEmploi}
      />
    </section>
  );
};
