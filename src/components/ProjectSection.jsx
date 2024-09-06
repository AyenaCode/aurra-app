import { Card } from "./Card";

export const ProjectSection = () => {
  const projects = [
    {
      title: "Étude de cas 1 : Campagne de marketing digital",
      description:
        "Comment nous avons aidé [Client] à augmenter ses ventes de 50% grâce à une campagne de marketing digital.",
      image: "/img4.jpg", // Image facultative
    },
    {
      title: "Étude de cas 2 : Refonte complète du site web",
      description:
        "Découvrez comment une refonte de site web a permis à [Client] de générer plus de trafic et de fidéliser ses utilisateurs.",
      image: "/img-site.webp",
    },
    {
      title: "Étude de cas 3 : Stratégie de contenu",
      description:
        "Nous avons aidé [Client] à élaborer une stratégie de contenu robuste, augmentant leur présence en ligne et leur engagement client.",
      image: "/contenu.webp", // Image facultative
    },
    {
      title: "Étude de cas 4 : Communication mode",
      description:
        "Nous avons aidé [Client] à élaborer une stratégie de contenu robuste, augmentant leur présence en ligne et leur engagement client.",
      image: "/fashion.webp", // Image facultative
    },
    {
      title: "Étude de cas 5 : Appli mobile",
      description:
        "Nous avons aidé [Client] à élaborer une stratégie de contenu robuste, augmentant leur présence en ligne et leur engagement client.",
      image: "/out-0.webp", // Image facultative
    },
    {
      title: "Étude de cas 6 : Stratégie de contenu",
      description:
        "Nous avons aidé [Client] à élaborer une stratégie de contenu robuste, augmentant leur présence en ligne et leur engagement client.",
      image: "/img9.jpg", // Image facultative
    },
  ];

  return (
    <section id="projects" className="p-4 md:px-8">
      <h2 className="text-center text-3xl font-bold mb-8 ">Nos réalisations</h2>
      <p className="text-center mb-8 ">
        Découvrez nos projets récents et voyez comment nous avons aidé nos
        clients à atteindre leurs objectifs.
      </p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            image={project.image} // Passe l'image si elle existe
          />
        ))}
      </div>
    </section>
  );
};
