import React from 'react';
import { Link } from 'react-router-dom';
import TagsDiv from '@Common/landingPage/tagsDiv/TagsDiv';
import Category from '@Common/landingPage/categories/Categories';
import Trending from '@Common/landingPage/trending/Trending';
import './landingPage.scss';

const LandingPage = () => (
  <div className="landingPage-container">
    <div className="main-content">
      <Category />
    </div>
    <div className="side-bar">
      <TagsDiv />
      <div className="trending">
        <h2>Trending</h2>
        <hr />
        <Trending />
        <hr />
        <div className="footer"><Link to="*">Home</Link>  <Link to="*">About</Link>  <Link to="*">Contact</Link>  </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
