import { Navbar } from "../components/Navbar";
import { Typewriter } from "../components/Typewriter";

const Contact = () => {
  const Animated = () => {
    const texts = ["Nous serions ravis de discuter de vos projets."];

    return (
      <section className="flex items-center justify-center h-50 py-8 lg:text-3xl sm:text-lg md:text-2xl">
        <Typewriter texts={texts} />
      </section>
    );
  };

  return (
    <div className="block">
      <Navbar />
      <section id="contact" className="px-4 py-8 w-full h-full">
        <h2 className="text-center text-3xl font-semibold mb-4">
          Contactez-nous
        </h2>

        <Animated />
        <form className="form relative max-w-3xl lg:max-w-5xl mx-auto p-6 bg-gradient-to-r from-violet-500 to-blue-400 shadow-md rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              id="name"
              placeholder="Votre Nom"
              required
              className="border border-gray-300 p-3 rounded-md w-full"
            />
            <input
              type="email"
              id="email"
              placeholder="Votre adresse mail"
              required
              className="border border-gray-300 p-3 rounded-md w-full"
            />
          </div>

          <textarea
            id="message"
            placeholder="Ici votre message"
            rows={4}
            required
            className="border border-gray-300 p-3 rounded-md w-full mb-4"
          ></textarea>

          <button
            type="submit"
            id="valide"
            className="absolute bottom-0 right-20 bg-violet-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Envoyer
          </button>
        </form>
        <p className="text-center mt-6">
          Adresse : Lomé-TOGO | Téléphone : +228...... | Email :
          contact@aurra.com
        </p>
      </section>
    </div>
  );
};

export default Contact;
