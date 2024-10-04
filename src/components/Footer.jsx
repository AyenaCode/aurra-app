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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacts</h3>
            <p>Adresse : Online</p>
            <p>
              Email :{" "}
              <a href="to=mailto:aurracommunication@gmail.com" target="_blank">
                aurracommunication@gmail.com
              </a>
            </p>
            <p>
              Téléphone :{" "}
              <a href="https://pin.it/313mw4C1b" target="_blank">
                +228 90 42 39 63
              </a>
            </p>
            <p>Ouvert : 24h/24h</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Nos solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Nous contacter pour votre projet
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Politiques de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Conditions générales
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <Link
                to="https://www.facebook.com/people/AURRA-COM/61562884277635/?mibextid=ZbWKwL"
                className="hover:text-blue-400"
                target="_blank"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                to="https://x.com/Aurracom"
                className="hover:text-blue-400"
                target="_blank"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                to="http://www.linkedin.com/in/aurra-com-6930b7327"
                className="hover:text-blue-400"
                target="_blank"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                to="https://www.instagram.com/aurra.com228/?igsh=MTJ0NzNjZ3R3eWY4Mg%3D%3D"
                className="hover:text-blue-400"
                target="_blank"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                to="https://www.youtube.com/@aurracommunication?si=Qq67vHrp9VaIctmb"
                className="hover:text-blue-400"
                target="_blank"
              >
                <FaYoutube size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p className="text-gray-300">
            made with ❤️ by{" "}
            <span className="underline">
              <a href="to=mailto:ayenacode1@gmail.com" target="_blank">
                @AyenaCode
              </a>
            </span>
          </p>
          <p>&copy; {currentYear} AURRA COM. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
