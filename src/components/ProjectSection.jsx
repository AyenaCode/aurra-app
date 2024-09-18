import { Card } from "./Card";
import { StatisticsSection } from "./StatisticsSection";

export const ProjectSection = () => {
  const projects = [
    {
      title: "Campagne de marketing digital : +50% de ventes en 3 mois",
      description:
        "Découvrez comment nous avons propulsé les ventes de [Client] grâce à une stratégie multi-canal innovante, combinant SEO, publicité ciblée et marketing de contenu. Résultat : une augmentation spectaculaire des ventes de 50% en seulement un trimestre.",
      image: "/img4.jpg",
    },
    {
      title: "Refonte de site web : Trafic x3 et taux de conversion doublé",
      description:
        "Notre refonte complète du site de [Client] a non seulement triplé le trafic organique, mais a aussi doublé le taux de conversion. Apprenez comment notre approche centrée sur l'utilisateur et optimisée pour le SEO a transformé leur présence en ligne.",
      image: "/img-site.webp",
    },
    {
      title: "Stratégie de contenu : Engagement client multiplié par 5",
      description:
        "Grâce à notre stratégie de contenu sur mesure, [Client] a vu son engagement client exploser. Découvrez comment notre approche data-driven a permis de créer du contenu viral, augmentant la visibilité de la marque et générant un flux constant de leads qualifiés.",
      image: "/contenu.webp",
    },
    {
      title: "Communication mode : De marque locale à icône nationale",
      description:
        "Voyez comment nous avons transformé une marque de mode locale en un nom reconnu nationalement. Notre campagne intégrée, mêlant influenceurs, événements exclusifs et contenu engageant, a propulsé [Client] sur le devant de la scène fashion.",
      image: "/fashion.webp",
    },
    {
      title: "App mobile : 1 million de téléchargements en 6 mois",
      description:
        "De la conception à la stratégie de lancement, découvrez comment notre expertise a permis à l'application de [Client] d'atteindre le million de téléchargements en un temps record. Un cas d'étude parfait sur l'importance d'une UX fluide et d'un marketing d'app performant.",
      image: "/out-0.webp",
    },
    {
      title: "Campagne B2B : +200% de leads qualifiés",
      description:
        "Notre approche sur mesure pour [Client] a révolutionné leur pipeline de vente B2B. Apprenez comment notre mix de marketing de contenu, d'automation et de nurturing a plus que doublé leur génération de leads qualifiés, transformant leur processus de vente.",
      image: "/img9.jpg",
    },
  ];

  return (
    <section id="projects" className="p-4 md:px-8 bg-base-200">
      <h2 className="text-center text-4xl font-bold mb-8">
        Nos Réalisations Exceptionnelles
      </h2>
      <p className="text-center max-w-3xl mx-auto text-lg">
        Plongez dans nos success stories et découvrez comment nous transformons
        les défis en opportunités de croissance. Chaque projet est une preuve de
        notre engagement à délivrer des résultats mesurables et impactants.
      </p>

      <StatisticsSection />

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="/contact" className="btn btn-primary btn-lg">
          Propulsez Votre Projet avec Nous
        </a>
      </div>
    </section>
  );
};
