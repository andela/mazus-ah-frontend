import React from 'react';
import PropTypes from 'prop-types';

const LeftDiv = ({ text }) => (
  <div className="left-block">
    <div className="img-field">
      <img src="https://res.cloudinary.com/mazus/image/upload/c_scale,w_313/v1567007966/athors_haven_fkkrsv.png" alt="Author's Haven Logo" />
    </div>
    <div className="text-field">
      <h1>{text.mainText}</h1>
    </div>
    <div className="extra-text-field">
      {text.subText}<br />{text.author}
    </div>
  </div>
);
LeftDiv.propTypes = {
  text: PropTypes.shape({}).isRequired,
};

export default LeftDiv;
