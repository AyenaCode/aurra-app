import { ArticleCard } from "./articles/ArticleCard";

const Blog = () => {
  const articles = [
    {
      title: "5 tendances en marketing digital à surveiller en 2024",
      excerpt:
        "Découvrez les dernières tendances qui vont transformer le paysage du marketing digital cette année...",
      image: "/img2.jpg", // Chemin de l'image
      date: "5 janvier 2024",
    },
    {
      title: "5 tendances en marketing digital à surveiller en 2024",
      excerpt:
        "Découvrez les dernières tendances qui vont transformer le paysage du marketing digital cette année...",
      image: "/img2.jpg", // Chemin de l'image
      date: "5 janvier 2024",
    },
    {
      title: "Comment optimiser votre stratégie de contenu",
      excerpt:
        "Apprenez à améliorer la performance de vos contenus et à attirer plus de trafic vers votre site...",
      image: "/img3.jpg", // Chemin de l'image
      date: "10 février 2024",
    },
    {
      title: "Comment optimiser votre stratégie de contenu",
      excerpt:
        "Apprenez à améliorer la performance de vos contenus et à attirer plus de trafic vers votre site...",
      image: "/social2.webp", // Chemin de l'image
      date: "15 janvier 2024",
    },
    {
      title: "Comment optimiser votre stratégie de contenu",
      excerpt:
        "Apprenez à améliorer la performance de vos contenus et à attirer plus de trafic vers votre site...",
      image: "/img11.jpg", // Chemin de l'image
      date: "24 Avril 2024",
    },
    {
      title: "Comment optimiser votre stratégie de contenu",
      excerpt:
        "Apprenez à améliorer la performance de vos contenus et à attirer plus de trafic vers votre site...",
      image: "/social2.webp", // Chemin de l'image
      date: "15 janvier 2024",
    },
    {
      title: "Comment optimiser votre stratégie de contenu",
      excerpt:
        "Apprenez à améliorer la performance de vos contenus et à attirer plus de trafic vers votre site...",
      image: "/img11.jpg", // Chemin de l'image
      date: "24 Avril 2024",
    },
    {
      title: "Comment optimiser votre stratégie de contenu",
      excerpt:
        "Apprenez à améliorer la performance de vos contenus et à attirer plus de trafic vers votre site...",
      image: "/lire.webp", // Chemin de l'image
      date: "10 mars 2024",
    },
    {
      title: "Comment optimiser votre stratégie de contenu",
      excerpt:
        "Apprenez à améliorer la performance de vos contenus et à attirer plus de trafic vers votre site...",
      image: "/lire.webp", // Chemin de l'image
      date: "10 mars 2024",
    },
    {
      title: "L’importance de l’email marketing en 2024",
      excerpt:
        "Même avec l’essor des réseaux sociaux, l’email marketing reste l’un des canaux les plus efficaces...",
      date: "20 mars 2024",
      image: "/social.webp",
    },
    {
      title: "L’importance de l’email marketing en 2024",
      excerpt:
        "Même avec l’essor des réseaux sociaux, l’email marketing reste l’un des canaux les plus efficaces...",
      date: "20 mars 2024",
      image: "/social.webp",
    },
    {
      title: "L’importance de l’email marketing en 2024",
      excerpt:
        "Même avec l’essor des réseaux sociaux, l’email marketing reste l’un des canaux les plus efficaces...",
      date: "20 mars 2024",
      image: "/social.webp",
    },
  ];

  // Fonction qui gère le clic sur "Lire la suite"
  const handleReadMore = (title) => {
    alert(`Lire la suite de l'article: ${title}`);
  };

  return (
    <>
      <section id="blog" className="p-8 md:p-20">
        <h2 className="text-center text-3xl font-bold mb-8">Blog</h2>
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
      </section>
    </>
  );
};

export default Blog;
