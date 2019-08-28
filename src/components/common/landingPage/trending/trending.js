import React from 'react';
import { Link } from 'react-router-dom';
import './trending.scss';

const TrendingArticles = () => (
  <div className="trending-container">
    <p id="article-number">01</p>
    <div>
      <Link id="trending-title" to="*"><h1>It’s time to embrace the sleep divorce</h1></Link>
      <p>Angela Lashbrook in Elemental</p>
      <p className="fade-text">Jul 18 • 4 min read</p>
    </div>
  </div>
);

export default TrendingArticles;
