import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear(); // Récupère l'année actuelle
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacts</h3>
            <p>Adresse : Rue du Marketing, Lome, Togo</p>
            <p>Email : aurracommunication@gmail.com</p>
            <p>Téléphone : +228 90 42 39 63</p>
            <p>Ouvert : Lun 7h30 - 19h30</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Evènementiel
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Marketing sur les réseaux sociaux
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Boutique en ligne
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Développement web
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">S'abonner</h3>
            <p>Suivez notre newsletter pour rester informé sur l'agence.</p>
            {/* Ajoutez ici un formulaire d'inscription à la newsletter */}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-blue-400">
                <FaFacebook size={24} />
              </Link>
              <Link to="#" className="hover:text-blue-400">
                <FaTwitter size={24} />
              </Link>
              <Link to="#" className="hover:text-blue-400">
                <FaLinkedin size={24} />
              </Link>
              <Link to="#" className="hover:text-blue-400">
                <FaInstagram size={24} />
              </Link>
              <Link to="#" className="hover:text-blue-400">
                <FaYoutube size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} AURRA COM. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
