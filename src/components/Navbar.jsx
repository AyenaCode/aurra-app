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
    <nav onClick={handleMenuClick}>
      <div className="title">
        <Link to="/"> AURRA COM</Link>
      </div>
      <button className="burger-menu" onClick={() => toggleMenu()}>
        <i className={isOpen ? "fa fa-times" : "fa fa-bars"}></i>
      </button>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
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
