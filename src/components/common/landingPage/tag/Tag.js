/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Tag.scss';


const Tag = ({ tagName }) => <Link className="tagLink" to="*">{tagName}</Link>;

Tag.propTypes = {
  tagName: PropTypes.array.isRequired,
};
export default Tag;
