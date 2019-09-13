import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TagsInput from '@Views/article/newArticle/tags/TagsInput';
import Thumbnail from '@Views/article/newArticle/thumbnail/Thumbnail';
import { publishNewArticle } from '@Actions/newArticleActions';
import PropTypes from 'prop-types';
import './modal.scss';

const defaultThumbnail = 'https://res.cloudinary.com/mazus/image/upload/v1566988928/default-article-image-large_eeu8ov.gif';
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
  const fullArticle = {
    title,
    description,
    body,
    tags: articleTags,
    status: '',
    thumbnail: articleThumbnail,
  };
  const publish = (status) => {
    if (!articleThumbnail) {
      fullArticle.thumbnail = `${defaultThumbnail}`;
    }
    onClick(status, fullArticle, history);
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
            <button className="publish-btn" type="button" onClick={() => publish('published')} disabled={loading}>PUBLISH</button>
            <button className="draft-btn" type="button" onClick={() => publish('draft')}>SAVE DRAFT</button>
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
  errors: state.article.errors,
  loading: state.article.loading,
});
const mapDispatchToProps = dispatch => ({
  onClick: (
    status,
    articleData,
    history,
  ) => dispatch(publishNewArticle(status, articleData, history)),
});

export const publishModal = Modal;
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal));
