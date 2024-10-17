import {
  FaBullhorn,
  FaCamera,
  FaCode,
  FaComments,
  FaPalette,
  FaPencilAlt,
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

  return (
    <section className="flex fex-wrap">
      <div
        id="communication"
        className="py-24 m-2 px-4 bg-gradient-to-r from-gray-300 to-violet-300 rounded shadow-lg w-1/3"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800">
          communication
        </h2>
        <p className="my-3">
          Nous croyons en l'importance d'une communication stratégique et
          cohérente pour renforcer votre marque et atteindre vos objectifs
          commerciaux. Voici nos services de communication :
        </p>
        <div className="">
          {Communication.map((service, index) => (
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
      <div
        id="communication"
        className="py-24 m-2 px-4 bg-gradient-to-r from-gray-300 to-violet-300 rounded shadow-lg w-1/3"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800">
          Événementiel
        </h2>
        <p className="my-3">
          Nous croyons en l'importance d'une communication stratégique et
          cohérente pour renforcer votre marque et atteindre vos objectifs
          commerciaux. Voici nos services de communication :
        </p>
        <div className="">
          {Communication.map((service, index) => (
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
      <div
        id="communication"
        className="py-24 m-2 px-4 bg-gradient-to-r from-gray-300 to-violet-300 rounded shadow-lg w-1/3"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800">
          Service d'Emploi
        </h2>
        <p className="my-3">
          Nous croyons en l'importance d'une communication stratégique et
          cohérente pour renforcer votre marque et atteindre vos objectifs
          commerciaux. Voici nos services de communication :
        </p>
        <div className="">
          {Communication.map((service, index) => (
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
