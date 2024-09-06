/* eslint-disable react/no-unescaped-entities */
export const AboutSection = () => {
  return (
    <section id="about" className="px-4 m-5 md:px-8">
      <h2 className="text-center text-2xl font-bold mb-4 text-pink-500">
        Qui sommes-nous ?
      </h2>
      <p className="text-justify indent-8 mb-4">
        Aurra Communication est une agence innovante spécialisée dans la
        communication, l'organisation événementielle et les services d'emploi.
        Notre équipe de passionnés se consacre à révéler l'unicité de chaque
        marque à travers des stratégies de communication créatives et
        personnalisées. Nous nous distinguons par notre approche authentique et
        créative, visant à établir des connexions durables avec votre public
        cible. En collaboration étroite avec vous, nous élaborons des solutions
        sur mesure qui captivent, engagent et convertissent.
      </p>
      <h3 className="text-xl text-center font-semibold mb-2">Notre équipe</h3>
      <p className="text-center mb-4">
        Rencontrez notre équipe d'experts en communication et marketing digital,
        prête à relever tous vos défis.
      </p>
      <img
        className="rounded-md shadow-md block mx-auto"
        src="/propos.jpg"
        alt="Equipe AURRA"
      />
    </section>
  );
};
