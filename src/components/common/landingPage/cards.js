import React from 'react';
import { Link } from 'react-router-dom';
import './cards.scss';

const Cards = () => (
  <div className="article-card">
    <Link className="article-section" to="/">
      <img
        src="https://res.cloudinary.com/mazus/image/upload/v1564080570/blog/2019-07-25T18:49:26.773Z.jpg"
        alt="articleImg"
        id="article-img"
      />
      <p id="article-title">Reality TV Turned These Kids into Villains</p>
    </Link>
    <Link className="author-section" to="/">
      <img
        src="https://res.cloudinary.com/mazus/image/upload/v1564067470/blog/2019-07-25T15:11:05.731Z.png"
        alt="authorAvatar"
        id="author-avatar"
      />
      <div>
        <p id="author-name">Amelia Tat</p>
        <p id="article-details">Apr 3  •  6 min reada</p>
      </div>
    </Link>
  </div>
);
export default Cards;
