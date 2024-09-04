/* eslint-disable react/no-unescaped-entities */
import { Superbtn } from "./Superbtn";

export const Header = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 md:px-8 bg-indigo-950 rounded-md">
      <header className="text-center space-y-6 min-h-[50vh] ">
        <h1 className="card shadow-2xl text-3xl sm:text-4xl md:text-5xl font-bold">
          Bienvenue chez AURRA Communication
        </h1>
        <p className="text-base sm:text-lg md:text-xl">
          Transformez votre vision en réalité grâce à nos solutions de
          communication sur mesure
        </p>
        <Superbtn>Contactez Nous aujourd'hui</Superbtn>
      </header>
    </div>
  );
};
