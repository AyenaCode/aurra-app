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
    },
    {
      title: "Communication",
      description:
        "Élaboration de stratégies de communication globales pour améliorer votre image et votre message auprès de votre public cible.",
      Icon: FaComments,
    },
    {
      title: "Gestion des Réseaux Sociaux",
      description:
        "Gestion professionnelle de vos profils sur les réseaux sociaux pour engager votre audience.",
      Icon: FaBullhorn,
    },
    {
      title: "Création de Contenu",
      description:
        "Création de contenu engageant et pertinent pour votre marque et votre audience.",
      Icon: FaPencilAlt,
    },
    {
      title: "Graphisme",
      description:
        "Conception graphique professionnelle pour renforcer votre identité visuelle et captiver votre audience.",
      Icon: FaPalette,
    },
    {
      title: "Développement Web",
      description:
        "Création de sites web modernes, responsives et optimisés pour les moteurs de recherche.",
      Icon: FaCode,
    },
    {
      title: "Production Audiovisuelle",
      description:
        "Création de contenu vidéo professionnel pour promouvoir votre marque et vos produits.",
      Icon: FaCamera,
    },
    {
      title: "Événementiel",
      description:
        "Organisation et gestion d'événements professionnels pour renforcer votre image de marque et créer des connexions.",
      Icon: FaCalendarAlt,
    },
    {
      title: "SEO",
      description:
        "Optimisation de votre présence en ligne pour les moteurs de recherche et augmenter votre visibilité.",
      Icon: FaSearch,
    },
  ];

  return (
    <section id="services" className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Notre spécialité
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
