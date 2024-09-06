import PropTypes from "prop-types";

export const Card = ({ title, description, image = null }) => {
  return (
    <div className="bg-blue-950 shadow-lg rounded-lg p-6 mb-6 transition-transform hover:scale-105">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
      )}
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-justify">{description}</p>
    </div>
  );
};

// Définitions des PropTypes
Card.propTypes = {
  title: PropTypes.string.isRequired, // Le titre est requis et doit être une chaîne
  description: PropTypes.string.isRequired, // La description est requise et doit être une chaîne
  image: PropTypes.string, // L'image est optionnelle et doit être une chaîne (URL)
};
