import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './tag.scss';


const Tag = ({ tagName }) => <Link className="tagLink" to="/*">{tagName}</Link>;

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
};

export default Tag;
