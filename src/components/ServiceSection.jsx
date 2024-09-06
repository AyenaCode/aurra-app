import { ServiceCard } from "./ServiceCard";

export const ServiceSection = () => {
  const services = [
    {
      title: "Stratégie marketing",
      description:
        "Développez une stratégie marketing puissante et ciblée pour atteindre vos objectifs commerciaux.",
      image: "/img6.jpg",
    },
    {
      title: "Conception graphique",
      description:
        "Créez une identité visuelle forte et mémorable qui capte l'attention de votre audience.",
      image: "/img7.jpg",
    },
    {
      title: "Gestion des Médias Sociaux",
      description:
        "Engagez votre audience et augmentez votre visibilité en ligne grâce à nos stratégies efficaces.",
      image: "/img8.jpg",
    },
    {
      title: "Création de contenu",
      description:
        "Captivez vos fans et renforcez votre présence en ligne grâce à nos contenus innovants et percutants.",
      image: "/img9.jpg",
    },
  ];

  return (
    <section id="services" className="px-4 md:px-8 py-8">
      <h2 className="text-center text-2xl font-bold mb-8">Nos services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};
