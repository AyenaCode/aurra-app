/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Superbtn } from "./Superbtn";
import { Typewriter } from "./Typewriter";

export const Header = () => {
  const AnimatedTextSection = () => {
    const texts = [
      "Développez votre entreprise avec nous.",
      "Votre succès est notre mission.",
    ];

    return (
      <section className="flex items-center justify-center h-50 py-8 lg:text-3xl sm:text-lg md:text-2xl">
        <Typewriter texts={texts} />
      </section>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 md:px-8 bg-indigo-950 rounded-md">
      <header className="text-center space-y-6 min-h-[80vh] ">
        <h1 className=" text-3xl drop-shadow-xl lg:text-8xl sm:text-4xl md:text-6xl font-bold">
          Bienvenue chez AURRA Communication
        </h1>
        <p className="text-base lg:text-3xl sm:text-lg md:text-2xl">
          Transformez votre vision en réalité grâce à nos solutions de
          communication sur mesure
        </p>

        <p className="h-2"></p>
        <Link to="/contact" className="py-3 my-2">
          <Superbtn>Contactez Nous aujourd'hui</Superbtn>
        </Link>
        <AnimatedTextSection />
      </header>
    </div>
  );
};
