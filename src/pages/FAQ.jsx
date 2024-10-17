import { Navbar } from "../components/Navbar";

const Faq = () => {
  return (
    <>
      <Navbar />
      <section id="faq" className="m-5">
        <h2>Questions fréquentes</h2>
        <h3>Quels services proposez-vous ?</h3>
        <p>
          Nous offrons des services en communication marketing et marketing
          digital, y compris la gestion des réseaux sociaux, le SEO, le PPC, et
          plus encore.
        </p>
      </section>
    </>
  );
};

export default Faq;
