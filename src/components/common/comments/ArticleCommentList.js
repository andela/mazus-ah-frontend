/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { likeComment } from '@Redux/actions/articleActions';
import './articleComment.scss';

export const ArticleComment = ({
  id,
  body,
  likes,
  user,
  createdAt,
  likeComment: commentLike,
}) => {
  const date = moment(createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a');

  const onLikeSubmit = async (event) => {
    event.preventDefault();
    await commentLike(id);
  };

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
          <i className="material-icons" onClick={onLikeSubmit} role="button" tabIndex="0" style={{ color: likes >= 1 && 'red' }}>favorite</i>
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
  id: PropTypes.string.isRequired,
  likeComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  like: state.like,
});

export default connect(
  mapStateToProps,
  { likeComment },
)(ArticleComment);
