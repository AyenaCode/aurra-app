import PropTypes from "prop-types";

export const ServiceCard = ({ title, description, image = null }) => {
  return (
    <div className="service text-center bg-gradient-to-r from-violet-500 to-pink-500 hover:from-pink-400 hover:to-violet-500 p-4 rounded-lg shadow-lg transition-transform hover:scale-105">
      {image && (
        <img
          src={image}
          alt={title}
          className="mb-4 rounded-lg w-full h-40 object-cover"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

// Typage des props avec PropTypes
ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string, // L'image est optionnelle
};
