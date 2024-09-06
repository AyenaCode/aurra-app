import PropTypes from "prop-types";
import React from "react";

export const Superbtn = ({ children, onClick }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};

Superbtn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
