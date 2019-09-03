import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type, name, value, ...otherprops
}) => (
  <input
    type={type}
    name={name}
    value={value}
    {...otherprops}
  />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default Input;
