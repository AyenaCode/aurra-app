/* eslint-disable react/no-unescaped-entities */
export const ServiceSection = () => {
  return (
    <section id="services" className="px-4 md:px-8 py-8">
      <h2 className="text-center text-2xl font-bold mb-8">Nos services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="service text-center bg-gradient-to-r from-violet-500 to-pink-500 hover:from-pink-400 hover:to-violet-500  p-4 rounded-lg shadow-lg">
          <img
            src="/img6.jpg"
            alt="service marketing"
            className="mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold mb-2">Stratégie marketing</h3>
          <p className="text-center">
            Développez une stratégie marketing puissante et ciblée pour
            atteindre vos objectifs commerciaux.
          </p>
        </div>
        <div className="service text-center bg-gradient-to-r from-pink-500 to-violet-500  p-4 rounded-lg shadow-lg">
          <img
            src="/img7.jpg"
            alt="service Graphique"
            className="mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold mb-2">Conception graphique</h3>
          <p className="text-center">
            Créez une identité visuelle forte et mémorable qui capte l'attention
            de votre audience.
          </p>
        </div>
        <div className="service text-center bg-gradient-to-r from-pink-500 to-violet-500  p-4 rounded-lg shadow-lg">
          <img
            src="/img8.jpg"
            alt="service marketing"
            className="mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold mb-2">
            Gestion des Médias Sociaux
          </h3>
          <p className="text-center">
            Engagez votre audience et augmentez votre visibilité en ligne grâce
            à nos stratégies efficaces.
          </p>
        </div>
        <div className="service text-center bg-gradient-to-r from-pink-500 to-violet-500  p-4 rounded-lg shadow-lg">
          <img
            src="/img9.jpg"
            alt="service marketing"
            className="mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold mb-2">Création de contenu</h3>
          <p className="text-center">
            Captivez vos fans et renforcez votre présence en ligne grâce à nos
            contenus innovants et percutants.
          </p>
        </div>
      </div>
    </section>
  );
};
