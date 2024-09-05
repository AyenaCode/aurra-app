import { PropTypes } from "prop-types";

export const Superbtn = ({ children }) => {
  return (
    <button className="btn bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-violet-500">
      {children}
    </button>
  );
};

Superbtn.propTypes = {
  children: PropTypes.node.isRequired,
};
