import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { likeArticle } from '@Actions/articleActions';

export const Like = ({
  likeArticle: likeArticleAction,
  slug,
  likes,
  dislikes,
  className,
  type,
  authorId,
  articleId,
  userId,
}) => {
  const sendLike = async () => {
    await likeArticleAction(slug, type, authorId, articleId, userId);
  };
  return (
    <div>
      <i
        id="like_btn"
        className={`${className} material-icons`}
        role="button"
        tabIndex="0"
        onKeyPress={sendLike}
        onClick={sendLike}
      >
        {type === 'like' ? 'thumb_up' : 'thumb_down'}
      </i>
      <span>{type === 'like' ? likes : dislikes}</span>
    </div>
  );
};

Like.propTypes = {
  likeArticle: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  className: PropTypes.string,
  authorId: PropTypes.shape({}),
  articleId: PropTypes.shape({}),
  userId: PropTypes.string,
};
Like.defaultProps = {
  className: '',
  authorId: {},
  articleId: {},
  userId: '',
  likes: 0,
  dislikes: 0,
};

const mapStateToProps = state => ({
  dislikes: state.singleArticle.article.dislikes,
  likes: state.singleArticle.article.likes,
  authorId: state.singleArticle.article,
  articleId: state.singleArticle.article,
  userId: state.auth.user.id,
});


export default connect(
  mapStateToProps,
  { likeArticle },
)(Like);
