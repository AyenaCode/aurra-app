import { Menu, X } from "lucide-react"; // Import des icônes Lucide
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // État pour gérer l'ouverture du menu
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Fonction pour fermer le menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Effet pour ajouter et supprimer l'écouteur d'événements
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest("nav")) {
        closeMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  // Fonction pour empêcher la propagation du clic sur le menu
  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  const navLinkClass =
    "text-violet-500 hover:text-primary transition-colors duration-300";
  const activeNavLinkClass = "text-primary font-bold";

  return (
    <nav
      onClick={handleMenuClick}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-base-300 shadow-lg" : "bg-transparent"
      } `}
    >
      <div className="container mx-auto px-4 py-1 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">
          AURRA COM
        </Link>
        <button
          className="md:hidden bg-transparent text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <ul
          onClick={() => closeMenu()}
          className={`nav-links md:flex space-x-6 font-semibold items-center transition-all duration-300 ${
            isOpen
              ? "absolute top-full text-center right-0 bg-base-200 shadow-lg p-4 space-y-4 md:space-y-0"
              : "hidden"
          } md:relative md:bg-transparent md:p-0 md:flex`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeNavLinkClass : navLinkClass
            }
            end
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? activeNavLinkClass : navLinkClass
            }
          >
            <li>Services</li>
          </NavLink>
          <HashLink to="/#projects" smooth className={navLinkClass}>
            <li>Nos Projets</li>
          </HashLink>
          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              isActive ? activeNavLinkClass : navLinkClass
            }
          >
            <li>À propos</li>
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? activeNavLinkClass : navLinkClass
            }
          >
            <li>Blog</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeNavLinkClass : navLinkClass
            }
          >
            <li>Contact</li>
          </NavLink>
          <HashLink to="/#faq" smooth className={navLinkClass}>
            <li>FAQ</li>
          </HashLink>
          <Link to="/contact" className="md:ml-4">
            <button className="btn btn-primary" aria-label="Obtenir un devis">
              Obtenir un devis
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
