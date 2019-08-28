import React from 'react';
import { Link } from 'react-router-dom';
import Cards from '../card/cards';
import './categories.scss';

// eslint-disable-next-line arrow-body-style
const Category = () => {
  return (
    <div className="category-container">
      <div className="top-div">
        <p>Medicine</p>
        <p id="related-articles-btn"><Link to="*">related articles <i className="material-icons">navigate_next</i></Link></p>
      </div>
      <div className="bottom-div">
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Category;
