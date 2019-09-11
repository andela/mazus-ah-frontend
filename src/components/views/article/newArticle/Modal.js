import React, { useState } from 'react';
import TagsInput from '@Views/article/newArticle/TagsInput';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = (
  {
    showModal,
    src,
    title,
    body,
    thumbnail,
  },
) => {
  const [description, setDescription] = useState('');
  const [articleTags, setArticleTags] = useState([]);
  const selectedTags = (tags) => {
    setArticleTags(tags);
    return articleTags;
  };
  const publish = () => {
    const fullArticle = {
      title,
      description,
      body,
      thumbnail,
      tags: articleTags,
    };
    console.log({ description });
    return fullArticle;
  };
  return (
    <div className="overlay">
      <div className="modal-content">
        <div className="desc-tags">
          <input
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description"
          />
          <TagsInput selectedTags={selectedTags} />
          <div className="action-btn">
            <button className="publish-btn" type="button" onClick={publish}>PUBLISH</button>
            <button className="draft-btn" type="button">SAVE DRAFT</button>
          </div>
        </div>
        <img
          className="thumbnail"
          src={src}
          alt="thumbnail"
        />
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
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Modal;
