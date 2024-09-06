import PropTypes from "prop-types";

export const Superbtn = ({ children, onClick }) => {
  return (
    <button
      className="btn btn-primary bg-gradient-to-r from-violet-500 to-pink-500 hover:from-pink-400 hover:to-violet-500 text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Superbtn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
