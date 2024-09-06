import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Superbtn } from "../components/Superbtn";

const APropos = () => {
  return (
    <div className="bg-indigo-950">
      <main className="p-5">
        <section className="hero  text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">À Propos de Nous</h1>
            <p className="text-xl mb-8">
              Découvrez l&apos;équipe passionnée derrière vos succès en
              marketing digital
            </p>
          </div>
        </section>

        <section className="about-content py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Notre Histoire</h2>
                <p className="mb-4">
                  Fondée en 2010, notre agence est née de la passion pour le
                  marketing digital et de la volonté d&apos;aider les
                  entreprises à réussir en ligne. Depuis, nous avons accompagné
                  des centaines de clients vers le succès.
                </p>
                <p>
                  Avec une équipe d&apos;experts dévoués et des solutions
                  innovantes, nous sommes fiers d&apos;être un partenaire de
                  confiance pour nos clients dans leur croissance digitale.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
                <p className="mb-4">
                  Notre mission est simple : propulser votre entreprise vers de
                  nouveaux sommets grâce à des stratégies de marketing digital
                  sur mesure et efficaces.
                </p>
                <p>
                  Nous croyons en la puissance de la créativité, de la
                  technologie et de l&apos;analyse pour créer des campagnes qui
                  génèrent des résultats tangibles et durables.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="team py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Notre Équipe</h2>
            <p className="text-xl mb-8">
              Une équipe passionnée d&apos;experts en marketing digital, dédiée
              à votre réussite.
            </p>
            <img src="/propos.jpg" alt="Notre équipe" />
          </div>
        </section>

        <section className="cta text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Prêt à travailler avec nous ?
            </h2>
            <p className="text-xl mb-8">
              Découvrez comment notre expertise peut transformer votre présence
              en ligne.
            </p>
            <Link to="/contact">
              <Superbtn>Contactez-nous maintenant</Superbtn>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default APropos;
