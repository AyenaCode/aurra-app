import {
  FaBullhorn,
  FaCalendarAlt,
  FaCamera,
  FaCode,
  FaComments,
  FaDigitalOcean,
  FaPalette,
  FaPencilAlt,
  FaSearch,
} from "react-icons/fa";
import { ServiceCard } from "./ServiceCard";

export const ServiceSection = () => {
  const services = [
    {
      title: "Marketing Digital",
      description:
        "Stratégies de marketing en ligne pour augmenter votre visibilité et vos conversions.",
      Icon: FaDigitalOcean,
      details: [
        "Analyse de marché et de la concurrence",
        "Stratégie de contenu multicanal",
        "Campagnes publicitaires ciblées",
        "Analyse et optimisation des performances",
        "Marketing par e-mail et automation",
      ],
      price: 1500,
    },
    {
      title: "Communication",
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
      price: 1200,
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
      price: 1800,
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
      price: 2000,
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
      price: 2200,
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
      price: 2500,
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
      price: 2800,
    },
    {
      title: "Événementiel",
      description:
        "Organisation et gestion d'événements professionnels pour renforcer votre image de marque et créer des connexions.",
      Icon: FaCalendarAlt,
      details: [
        "Analyse de la cible et de ses besoins",
        "Développement d'une stratégie d'événementiel",
        "Création de contenu d'événementiel",
        "Gestion de l'organisation et de la logistique",
        "Analyse et ajustement de la stratégie",
      ],
      price: 3000,
    },
    {
      title: "SEO",
      description:
        "Optimisation de votre présence en ligne pour les moteurs de recherche et augmenter votre visibilité.",
      Icon: FaSearch,
      details: [
        "Analyse de la présence actuelle en ligne",
        "Développement d'une stratégie de SEO",
        "Optimisation du contenu et de la structure",
        "Gestion des liens et de la réputation",
        "Analyse et ajustement de la stratégie",
      ],
      price: 3200,
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-r from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Nos Services
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
              showPriceInitially={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
