/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Superbtn } from "./Superbtn";

export const Header = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 md:px-8 bg-indigo-950 rounded-md">
      <header className="text-center space-y-6 min-h-[50vh] ">
        <h1 className=" text-3xl drop-shadow-xl sm:text-4xl md:text-5xl font-bold">
          Bienvenue chez AURRA Communication
        </h1>
        <p className="text-base sm:text-lg md:text-xl">
          Transformez votre vision en réalité grâce à nos solutions de
          communication sur mesure
        </p>
        <p className="h-2"></p>
        <Link to="/contact" className="py-3 my-2">
          <Superbtn>Contactez Nous aujourd'hui</Superbtn>
        </Link>
      </header>
    </div>
  );
};
