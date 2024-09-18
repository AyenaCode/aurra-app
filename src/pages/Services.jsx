/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { ServiceCard } from "../components/ServiceCard";
import { Superbtn } from "../components/Superbtn";

const Services = () => {
  return (
    <>
      <main className="p-2">
        <section className="hero bg-indigo-950 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Nos Services</h1>
            <p className="text-xl mb-8">
              Des solutions de communication et de marketing digital sur mesure
              pour propulser votre entreprise
            </p>
          </div>
        </section>

        <section className="services bg-indigo-950 p-10">
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Optimisation SEO"
              description="Améliorez votre visibilité en ligne et attirez plus de clients qualifiés grâce à notre expertise en référencement naturel."
            />
            <ServiceCard
              title="Marketing sur les Réseaux Sociaux"
              description="Engagez votre audience cible et développez votre marque sur les plateformes sociales les plus populaires."
            />
            <ServiceCard
              title="Publicité en Ligne"
              description="Maximisez votre retour sur investissement avec des campagnes publicitaires ciblées et optimisées pour vos objectifs."
            />
            <ServiceCard
              title="Création de Contenu"
              description="Captivez votre audience avec du contenu de qualité qui renforce votre autorité et stimule l'engagement."
            />
            <ServiceCard
              title="Analyse et Rapports"
              description="Prenez des décisions éclairées grâce à nos rapports détaillés et nos analyses approfondies de vos performances en ligne."
            />
            <ServiceCard
              title="Stratégie Marketing"
              description="Développez une stratégie marketing cohérente et efficace pour atteindre vos objectifs commerciaux."
            />
          </div>
        </section>

        <section className="cta bg-indigo-950 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Prêt à transformer votre présence en ligne ?
            </h2>
            <p className="text-xl mb-8">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et
              découvrez comment nos services peuvent propulser votre entreprise.
            </p>
            <Link to="/contact">
              <Superbtn>Demandez votre devis gratuit</Superbtn>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
