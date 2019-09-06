import React from 'react';
import './articleComment.scss';

const ArticleComment = () => (
  <div className="article__comments">
    <div className="article__comment_card">
      <div className="user__comment_info">
        <img
          src="https://image.flaticon.com/icons/svg/147/147144.svg"
          alt="article author"
          width="50"
          className="circle"
        />
        <div className="comment_details">
          <p className="commenter__name">Jane Doe</p>
          <p className="commenter__time">3 Jun 2019</p>
        </div>
      </div>
      <div className="comment__body">
        <p>
                I don’t know how people don’t realize their employers are tracking what they do at
                this point. I never keep my work email on my phone and deleted slack as well.
                If anyone needs me after work hours they can call me!
        </p>
      </div>
      <div className="comment__likes">
        <i id="comment__likes__icon" className="material-icons">favorite_border</i>
        <p className="comment__likes__count">33</p>
      </div>
    </div>
    <div className="article__comment_card">
      <div className="user__comment_info">
        <img
          src="https://image.flaticon.com/icons/svg/147/147144.svg"
          alt="article author"
          width="50"
          className="circle"
        />
        <div className="comment_details">
          <p className="commenter__name">Obiwan Kenobi</p>
          <p className="commenter__time">4 Jun 2019</p>
        </div>
      </div>
      <div className="comment__body">
        <p>
                I don’t know how people don’t realize their employers are tracking what they do at
                this point. I never keep my work email on my phone and deleted slack as well.
                If anyone needs me after work hours they can call me!
        </p>
      </div>
      <div className="comment__likes">
        <i id="comment__likes__icon" className="material-icons">favorite_border</i>
        <p className="comment__likes__count">12</p>
      </div>
    </div>
    <div />
  </div>
);

export default ArticleComment;
