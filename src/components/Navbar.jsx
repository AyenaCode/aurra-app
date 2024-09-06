import { Menu, X } from "lucide-react"; // Import des icônes Lucide
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  // État pour gérer l'ouverture du menu
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fonction pour fermer le menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Effet pour ajouter et supprimer l'écouteur d'événements
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  // Fonction pour empêcher la propagation du clic sur le menu
  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  return (
    <nav
      onClick={handleMenuClick}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-base-300 shadow-md" : "bg-transparent"
      } ${isOpen ? "bg-base-300" : ""} ${isOpen ? "absolute" : ""} `}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="title text-xl font-bold text-white">
          <Link to="/">AURRA COM</Link>
        </div>
        <button
          className="md:hidden bg-transparent text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-8 h-8 " /> : <Menu className="w-8 h-8" />}
        </button>
        <ul
          className={`nav-links md:flex space-x-6 font-semibold items-center transition-all duration-300 ${
            isOpen
              ? "absolute rounded-lg w-30 m-2 top-full right-0 text-center bg-gradient-to-r from-violet-500 to-pink-500 hover:from-pink-400 hover:to-violet-500 p-4 space-y-4 md:space-y-0"
              : "hidden"
          } md:relative md:bg-transparent md:p-0 md:flex`}
        >
          <NavLink to="/" className="text-white">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/services" className="text-white ">
            <li>Services</li>
          </NavLink>
          <NavLink to="/a-propos" className="text-white ">
            <li>À propos</li>
          </NavLink>
          <NavLink to="/blog" className="text-white ">
            <li>Blog</li>
          </NavLink>
          <NavLink to="/contact" className="text-white">
            <li>Contact</li>
          </NavLink>
          <Link to="/contact" className="md:ml-4">
            <button
              className="bg-primary hover:bg-primary-focus text-base-100 font-bold py-2 px-4 rounded transition duration-300"
              aria-label="Obtenir un devis"
            >
              Obtenir un devis
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
