import React from "react";
import filterStyles from "./Filter.module.css";
import PropTypes from "prop-types";


const Filter = ({ value, handleChange }) => {
  return (
    <label className={filterStyles.label}>
      Find contacts by name
      <input
        className={filterStyles.inputFilter}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

Filter.prpTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
