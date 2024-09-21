import { Menu, X } from "lucide-react"; // Import des icônes Lucide
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Span } from "../pages/Accueil";

export const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false); // Ferme le menu quand la route change
  }, [pathname]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest("nav")) closeMenu();
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const navLinkClass =
    "text-violet-500 hover:text-primary transition-colors duration-300";
  const activeNavLinkClass = "text-primary font-bold";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-base-300 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-10 py-1 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold" onClick={closeMenu}>
          <Span>AURRA</Span>
        </Link>
        <button
          className="md:hidden bg-transparent text-blueColor"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <ul
          className={`md:flex space-x-6 font-semibold items-center transition-all duration-300 ${
            isOpen
              ? "absolute top-full right-0 bg-base-200 shadow-lg p-4 pl-10 space-y-4 md:space-y-0"
              : "hidden"
          } md:relative md:bg-transparent md:p-0 md:flex`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeNavLinkClass : navLinkClass
            }
            onClick={closeMenu}
            end
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? activeNavLinkClass : navLinkClass
            }
            onClick={closeMenu}
          >
            <li>Services</li>
          </NavLink>
          <HashLink
            to="/#projects"
            smooth
            className={navLinkClass}
            onClick={closeMenu}
          >
            <li>Nos Projets</li>
          </HashLink>
          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              isActive ? activeNavLinkClass : navLinkClass
            }
            onClick={closeMenu}
          >
            <li>À propos</li>
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? activeNavLinkClass : navLinkClass
            }
            onClick={closeMenu}
          >
            <li>Blog</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeNavLinkClass : navLinkClass
            }
            onClick={closeMenu}
          >
            <li>Contact</li>
          </NavLink>
          <HashLink
            to="/#faq"
            smooth
            className={navLinkClass}
            onClick={closeMenu}
          >
            <li>FAQ</li>
          </HashLink>
          <Link to="/contact" className="md:ml-4" onClick={closeMenu}>
            <button className="btn btn-primary" aria-label="Obtenir un devis">
              Obtenir un devis
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
