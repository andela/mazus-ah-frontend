import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import './articleComment.scss';

const ArticleComment = ({
  body,
  likes,
  user,
  createdAt,
}) => {
  const date = moment(createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a');

  return (
    <div className="article__comments">
      <div className="article__comment_card">
        <div className="user__comment_info">
          <img
            src={user.profile.avatar}
            alt="article author"
            width="50"
            className="circle"
          />
          <div className="comment_details">
            <p className="commenter__name">{user.firstName}&nbsp;{user.lastName}</p>
            <p className="commenter__time">{date}</p>
          </div>
        </div>
        <div className="comment__body">
          <p>
            {body}
          </p>
        </div>
        <div className="comment__likes">
          <i id="comment__likes__icon" className="material-icons">favorite_border</i>
          <p className="comment__likes__count">{likes}</p>
        </div>
      </div>
    </div>
  );
};

ArticleComment.propTypes = {
  body: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  user: PropTypes.shape({}).isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default ArticleComment;
