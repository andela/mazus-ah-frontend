import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  type, name, value, placeholder, ...otherprops
}) => (
  <textarea
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    {...otherprops}
  />
);

TextArea.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default TextArea;
