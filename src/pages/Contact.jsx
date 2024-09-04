import { Navbar } from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section id="contact">
        <h2>Contactez-nous</h2>
        <p>Nous serions ravis de discuter de vos projets.</p>
        <form>
          <input type="text" id="name" placeholder="Votre Nom" required />

          <input
            type="email"
            id="email"
            placeholder="Votre adresse mail"
            required
          />

          <textarea
            id="message"
            placeholder="Ici votre message"
            rows={4}
            required
          ></textarea>

          <imput type="submit" id="valide">
            Envoyer
          </imput>
        </form>
        <p>
          Adresse : Lomé-TOGO | Téléphone : +228...... | Email :
          contact@aurra.com
        </p>
      </section>
    </>
  );
};

export default Contact;
