import { Menu, X } from "lucide-react"; // Import des icônes Lucide
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
  // État pour gérer l'ouverture du menu
  const [isOpen, setIsOpen] = useState(false);

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
    document.addEventListener("click", closeMenu);
    return () => {
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
      className={`bg-blue-950 shadow-md p-4 flex justify-around items-center ${
        isOpen ? "bg-transparent" : ""
      }`}
    >
      <div
        className={`title text-xl font-bold ${
          isOpen ? "absolute top-10 left-5" : ""
        }`}
      >
        <Link to="/">AURRA COM</Link>
      </div>
      <button className="burger-menu md:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <X className="absolute top-4 right-30 mx-10 w-8 h-8 bg-blue-950 group-focus:border-none border-none" />
        ) : (
          <Menu className="w-8 h-8 bg-blue-950" />
        )}
        {/* Icônes Lucide */}
      </button>
      <ul
        className={`nav-links md:flex space-x-6 font-semibold items-center transition-transform duration-300 ease-in-out ${
          isOpen
            ? "block  bg-gradient-to-r from-violet-700 to-pink-600 w-78 rounded-md text-center absolute top-4 right-0 z-10 p-12"
            : "hidden"
        } md:block`}
      >
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <HashLink to="/#services" smooth>
          <li>Services</li>
        </HashLink>
        <HashLink to="/#projects" smooth>
          <li>Projets</li>
        </HashLink>
        <HashLink to="/#about" smooth>
          <li>A propos</li>
        </HashLink>
        <NavLink to="/blog">
          <li>Blog</li>
        </NavLink>
        <NavLink to="/faq">
          <li>FAQ</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};
