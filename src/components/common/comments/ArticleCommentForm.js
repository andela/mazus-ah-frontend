import React, { useState } from 'react';
import { connect } from 'react-redux';
import TextArea from '@Common/form/textArea';
import PropTypes from 'prop-types';
import { createArticleOnComment } from '@Redux/actions/articleActions';
import './articleComment.scss';

const ArticleComment = ({ match, onSubmit }) => {
  const [comment, setComment] = useState('');

  const commentData = {
    body: comment,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit(match.params.slug, commentData);
    setComment('');
  };

  const onChange = (event) => {
    setComment(event.target.value);
  };


  return (
    <div className="article__comments">
      <div className="article__comment_input">
        <div className="user__comment_input">
          <img
            src="https://image.flaticon.com/icons/svg/147/147144.svg"
            alt="article author"
            width="50"
            className="circle"
          />
          <form className="comment_form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="column1">
                <TextArea
                  className="comment_input_field"
                  type="text"
                  name="comment"
                  onChange={onChange}
                  value={comment}
                  placeholder="Write your comment here..."
                  required
                />
              </div>
              <div className="column2">
                <button className="comment_btn" type="submit">
                  <i className="material-icons">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ArticleComment.propTypes = {
  match: PropTypes.shape({}).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  comment: state.newComment,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (slug, commentData) => dispatch(createArticleOnComment(slug, commentData)),
});

export const ArticleCommentFormComponent = ArticleComment;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleComment);
