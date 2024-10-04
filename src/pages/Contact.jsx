import { Superbtn } from "../components/Superbtn";

const Contact = () => {
  //Fonction pour enregistrement des données du formulaire

  const hundleSubmit = (e) => {
    e.preventDefault();
    let user = {
      name: document.getElementById("name").value.toString().trim(),
      email: document.getElementById("email").value.toString().trim(),
      message: document.getElementById("message").value.toString().trim(),
    };

    if (user.name === "" || user.email === "" || user.message === "") {
      alert("Veuillez remplir tous les champs");
    } else {
      //Enregistrement des données dans la base de données simulée
      console.log(
        `Message envoyé par ${user.name} avec l'adresse email ${user.email} et le message ${user.message}`
      );
      user = {};
      document.getElementById("contact").reset();
    }
  };

  return (
    <main>
      <section className="hero py-20 pb-2 bg-indigo-950 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl mb-8 p-2">
            Nous sommes là pour répondre à toutes vos questions et vous aider à
            atteindre vos objectifs
          </p>
        </div>
      </section>

      <section className="contact-form p-2">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <form
              id="contact"
              onSubmit={hundleSubmit}
              className="bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">
                  Nom
                </label>
                <input
                  className="shadow appearance-none border rounded bg-violet-950 w-full py-2 px-3 leading-tight focus:outline-none focus:bg-gray-700 focus:text-white focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none bg-violet-950 border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:bg-gray-700 focus:text-white focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Votre email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none bg-violet-950 border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:text-white focus:bg-gray-700 focus:shadow-outline"
                  id="message"
                  placeholder="Votre message"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button onClick={hundleSubmit}>test</button>
                <Superbtn>Envoyer</Superbtn>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-info bg-gradient-to-r from-violet-500 to-violet-900  py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Autres façons de nous contacter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>
                <a
                  href="to=mailto:aurracommunication@gmail.com"
                  target="_blank"
                >
                  aurracommunication@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
              <p>
                <a href="https://pin.it/313mw4C1b" target="_blank">
                  +228 90 42 39 63
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Adresse</h3>
              <p>Nous somme en ligne H24</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
