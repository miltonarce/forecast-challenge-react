import React from "react";
import PropTypes from "prop-types";
import spinner from "../../assets/imgs/spinner.svg";

const Spinner = (props) => {
  return (
    <div>
      <img src={spinner} alt="spinner" />
    </div>
  );
};

Spinner.propTypes = {};

export default Spinner;
