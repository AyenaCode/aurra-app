const Footer = () => {
  const currentYear = new Date().getFullYear(); // Récupère l'année actuelle

  return (
    <footer className="bg-base-300 text-base-content p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} AURRA Communication. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
