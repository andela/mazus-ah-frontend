import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../../common/landingPage/categories/categories';
import Trending from '../../common/landingPage/trending/trending';
import './landingPage.scss';

// eslint-disable-next-line arrow-body-style
const LandingPage = () => {
  return (
    <div className="landingPage-container">
      <div className="main-content">
        <div><Category /></div>
        <div><Category /></div>
        <div><Category /></div>
        <div><Category /></div>
        <div><Category /></div>
        <div><Category /></div>
        <div><Category /></div>
      </div>
      <div className="side-bar">
        <h2>Trending</h2>
        <hr />
        <Trending />
        <Trending />
        <Trending />
        <Trending />
        <Trending />
        <Trending />
        <Trending />
        <hr />
        <div className="footer"><Link to="*">Home</Link>  <Link to="*">About</Link>  <Link to="*">Contact</Link>  <Link to="*">Privacy</Link>  </div>
      </div>
    </div>
  );
};
export default LandingPage;
