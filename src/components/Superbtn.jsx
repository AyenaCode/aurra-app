import { PropTypes } from "prop-types";

export const Superbtn = (props) => {
  return (
    <button className="btn bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-violet-500">
      {props.children}
    </button>
  );
};

Superbtn.propTypes = {
  children: PropTypes.node.isRequired,
};
