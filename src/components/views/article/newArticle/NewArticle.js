import React, { useState } from 'react';
import Modal from '@Views/article/newArticle/Modal';
import editor from '@Views/article/newArticle/articleEditor';
import thumbnailFetcher from '@Utils/thumbnailFetcher';
import '@Views/article/newArticle/newArticle.scss';

const NewArticle = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState({});
  const [thumbnail, setThumbnail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const getEditorContent = async () => {
    try {
      const articleBody = await editor.save();
      setBody(articleBody);
      const newThumbnail = thumbnailFetcher(articleBody.blocks);
      setThumbnail(newThumbnail);
      return { body, thumbnail };
    } catch (error) {
      return error;
    }
  };
  const show = () => {
    setShowModal(!showModal);
    return getEditorContent();
  };
  return (
    <div>
      <div className="new-article">
        <div className="article-input">
          <input
            id="article_title"
            type="text"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
          />
          <div id="editorjs" />
        </div>
        <span id="done_btn">
          <button type="submit" onClick={show}>Done?</button>
        </span>
      </div>{showModal ? <Modal showModal={show} src={thumbnail} title={title} body={JSON.stringify(body)} thumbnail={thumbnail} /> : ''}

    </div>
  );
};

export default NewArticle;
