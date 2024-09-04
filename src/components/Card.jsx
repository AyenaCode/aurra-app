import PropTypes from "prop-types";

export const Card = ({ children }) => {
  return (
    <div className="card bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl w-96 h-96 items-center justify-center ">
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
