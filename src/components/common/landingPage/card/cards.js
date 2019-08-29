import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './cards.scss';

const Cards = ({
  thumbnail,
  title,
  publishedDate,
  readTime,
  authorAvatar,
  authorName,
}) => (
  <div className="article-card">
    <Link className="article-section" to="*">
      <img
        src={thumbnail}
        alt="articleImg"
        id="article-img"
      />
      <p id="article-title">{title}</p>
    </Link>
    <Link className="author-section" to="*">
      <img
        src={authorAvatar}
        alt="authorAvatar"
        id="author-avatar"
      />
      <div>
        <p id="author-name">{authorName}</p>
        <p className="fade-text" id="article-details">{publishedDate}  •  {readTime}</p>
      </div>
    </Link>
  </div>
);

Cards.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
  authorAvatar: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
};

export default Cards;
