import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const Card = ({ title, description, image }) => {
  return (
    <motion.div
      className="card bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        y: -5,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <figure className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </figure>
      <div className="card-body p-6">
        <h3 className="card-title text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
