import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal"; // Assurez-vous de créer ce composant

export const ServiceCard = ({
  title,
  description,
  Icon = null,
  details,
  price,
  showPriceInitially = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-2xl"
        whileHover={{ y: -5 }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
              {Icon && <Icon className="text-2xl text-white" />}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          </div>
          <p className="text-gray-600 mb-6 flex-grow">{description}</p>
          {showPriceInitially && (
            <p className="text-2xl font-bold text-primary mb-4">{price} €</p>
          )}
          <button
            className="w-full py-2 px-4 bg-gradient-to-r from-primary to-secondary text-white text-center rounded-full transition-all duration-300 hover:from-secondary hover:to-primary"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
          >
            Plus de détails
          </button>
        </div>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-8 bg-white rounded-xl">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
              {Icon && <Icon className="text-3xl text-white" />}
            </div>
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          </div>
          <p className="text-gray-600 mb-6">{description}</p>
          <p className="text-3xl font-bold mb-6 text-primary">{price} €</p>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Détails du service :
          </h3>
          <ul className="list-disc list-inside mb-8 text-gray-600">
            {details.map((detail, index) => (
              <li key={index} className="mb-2">
                {detail}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="block w-full py-3 px-6 bg-gradient-to-r from-primary to-secondary text-white text-center rounded-full transition-all duration-300 hover:from-secondary hover:to-primary"
            onClick={() => setIsModalOpen(false)}
          >
            Commander
          </Link>
        </div>
      </Modal>
    </>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  Icon: PropTypes.elementType,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  showPriceInitially: PropTypes.bool,
};

ServiceCard.defaultProps = {
  showPriceInitially: false,
};
