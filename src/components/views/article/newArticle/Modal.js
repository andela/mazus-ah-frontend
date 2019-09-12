import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TagsInput from '@Views/article/newArticle/TagsInput';
import Thumbnail from '@Views/article/newArticle/Thumbnail';
import { publishNewArticle } from '@Actions/newArticleActions';
import PropTypes from 'prop-types';
import './modal.scss';


const Modal = (
  {
    showModal,
    title,
    body,
    loading,
    history,
    onClick,
  },
) => {
  const [description, setDescription] = useState('');
  const [articleTags, setArticleTags] = useState([]);
  const [articleThumbnail, setArticleThumbnail] = useState('');
  const selectedTags = (tags) => {
    setArticleTags(tags);
    return articleTags;
  };
  const getThumbnail = (thumbnail) => {
    setArticleThumbnail(thumbnail);
    return articleThumbnail;
  };
  const publish = () => {
    const fullArticle = {
      title,
      description,
      body,
      tags: articleTags,
      thumbnail: articleThumbnail,
    };
    onClick(fullArticle, history);
  };
  return (
    <div className="overlay">
      <div className="modal-content">
        <div className="desc-tags">
          <textarea
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description"
          />
          <TagsInput selectedTags={selectedTags} />
          <div className="action-btn">
            <button className="publish-btn" type="button" onClick={publish} disabled={loading}>PUBLISH</button>
            <button className="draft-btn" type="button">SAVE DRAFT</button>
          </div>
        </div>
        <Thumbnail getThumbnail={getThumbnail} />
        <span id="close" role="button" tabIndex="0" onClick={() => showModal()} onKeyPress={() => showModal()}>
          <i
            className="material-icons"
          >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;close
          </i>
        </span>
      </div>
    </div>
  );
};

Modal.propTypes = {
  showModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  newArticle: state.newArticle,
  errors: state.newArticle.errors,
  loading: state.newArticle.loading,
});
const mapDispatchToProps = dispatch => ({
  onClick: (articleData, history) => dispatch(publishNewArticle(articleData, history)),
});

export const publishModal = Modal;
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal));
