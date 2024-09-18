import PropTypes from "prop-types";

export const ServiceCard = ({ title, description, Icon = null }) => {
  return (
    <div className="service bg-gradient-to-r from-violet-800 to-pink-800 hover:from-pink-800 hover:to-violet-800 p-4 m-2 rounded-lg shadow-lg transition-transform hover:scale-105">
      {Icon && <Icon className="text-6xl" />}
      <h3 className="text-center text-xl font-semibold mb-2">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

// Typage des props avec PropTypes
ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  Icon: PropTypes.elementType, // L'icône est optionnelle
};
