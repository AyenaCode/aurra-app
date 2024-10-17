import { ArticleCard } from "./articles/ArticleCard";

const Blog = () => {
  const articles = [
    {
      title: "5 Stratégies de Marketing Digital Incontournables pour 2024",
      excerpt:
        "Découvrez les tendances qui révolutionnent le marketing digital cette année. De l'IA conversationnelle à la réalité augmentée, apprenez comment ces innovations peuvent propulser votre entreprise vers de nouveaux sommets.",
      image: "/img2.jpg",
      date: "5 janvier 2024",
    },
    {
      title: "L'Art de la Narration de Marque à l'Ère Digitale",
      excerpt:
        "Plongez dans les secrets d'un storytelling captivant qui résonne avec votre audience. Apprenez à créer une narration authentique qui transforme vos clients en véritables ambassadeurs de votre marque.",
      image: "/img3.jpg",
      date: "10 février 2024",
    },
    {
      title: "SEO en 2024 : Les Nouvelles Règles du Jeu",
      excerpt:
        "Le paysage du référencement évolue rapidement. Découvrez les dernières techniques pour dominer les résultats de recherche, attirer un trafic qualifié et convertir vos visiteurs en clients fidèles.",
      image: "/social2.webp",
      date: "15 janvier 2024",
    },
    {
      title: "L'Influence du Marketing : Bâtir des Partenariats Authentiques",
      excerpt:
        "L'ère des influenceurs est loin d'être terminée. Apprenez à identifier et collaborer avec les bons influenceurs pour amplifier votre message et toucher votre audience cible de manière organique et impactante.",
      image: "/img11.jpg",
      date: "24 Avril 2024",
    },
    {
      title: "Data-Driven Marketing : Transformer les Données en Opportunités",
      excerpt:
        "Explorez comment l'analyse avancée des données peut révolutionner vos stratégies marketing. Des insights consommateurs aux prédictions de tendances, découvrez comment prendre des décisions éclairées pour maximiser votre ROI.",
      image: "/lire.webp",
      date: "10 mars 2024",
    },
    {
      title: "L'Avenir de l'E-commerce : Tendances et Innovations",
      excerpt:
        "Du social commerce à la personnalisation poussée, plongez dans les innovations qui façonnent l'avenir du commerce en ligne. Préparez votre entreprise à prospérer dans l'écosystème e-commerce de demain.",
      image: "/social.webp",
      date: "20 mars 2024",
    },
  ];

  const handleReadMore = (title) => {
    alert(`Découvrez bientôt l'article complet : "${title}"`);
  };

  return (
    <>
      <section id="blog" className="p-8 md:p-20 bg-base-100">
        <h1 className="text-center text-4xl font-bold mb-4">Notre Blog</h1>
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
          Plongez dans nos dernières réflexions, stratégies et insights sur le
          monde du marketing digital. Restez à la pointe de l&apos;innovation et
          transformez votre approche marketing avec nos articles experts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              excerpt={article.excerpt}
              image={article.image}
              date={article.date}
              onReadMore={() => handleReadMore(article.title)}
            />
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-xl mb-6">
            Vous souhaitez rester informé des dernières tendances et stratégies
            en marketing digital ?
          </p>
          <button className="btn btn-primary btn-lg">
            S&apos;abonner à notre Newsletter
          </button>
        </div>
      </section>
    </>
  );
};

export default Blog;
