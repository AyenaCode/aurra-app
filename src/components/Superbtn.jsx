import PropTypes from "prop-types";

export const Superbtn = ({ children, onClick }) => {
  return (
    <button
      className="btn btn-primary bg-gradient-to-r from-blueColor violetColor hover:bg-violetColor text-white"
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
