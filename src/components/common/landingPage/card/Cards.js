import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import formatDate from '@Utils/formatDate';
import readTimeFunc from '@Utils/readTime';
import './cards.scss';

const Cards = ({
  thumbnail,
  title,
  createdAt,
  readTime,
  author,
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
        src={author.profile.avatar}
        alt="authorAvatar"
        id="author-avatar"
        className="materialboxed"
      />
      <div>
        <p id="author-name">{author.firstName} {author.lastName}</p>
        <p className="fade-text" id="article-details">{formatDate(createdAt)}  •  {readTimeFunc(readTime)}</p>
      </div>
    </Link>
  </div>
);

Cards.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
  author: PropTypes.shape({}).isRequired,
};

export default Cards;
