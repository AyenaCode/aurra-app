import PropTypes from "prop-types";

export const ArticleCard = ({
  title,
  excerpt,
  image = null,
  date,
  onReadMore,
}) => {
  return (
    <div className="article-card bg-indigo-950 text-white rounded-lg shadow-lg overflow-hidden mb-8">
      {image && (
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-2">{date}</p>{" "}
        {/* Date de publication */}
        <p className="text-gray-300 mb-4">{excerpt}</p>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition"
          onClick={onReadMore} // Gérer l'événement de clic
        >
          Lire la suite
        </button>
      </div>
    </div>
  );
};

// Typage des props avec PropTypes
ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  image: PropTypes.string, // Non obligatoire
  date: PropTypes.string.isRequired, // Date obligatoire
  onReadMore: PropTypes.func.isRequired, // Fonction obligatoire pour "Lire la suite"
};
