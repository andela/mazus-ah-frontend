import React, { useState } from 'react';
import Modal from '@Views/article/newArticle/modal/Modal';
import editor from '@Utils/articleEditor';
import '@Views/article/newArticle/newArticle.scss';

const NewArticle = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState({});
  const [showModal, setShowModal] = useState(false);
  const getEditorContent = async () => {
    try {
      const articleBody = await editor.save();
      setBody(articleBody);
      return body;
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
          <button className="done" type="submit" onClick={show}>Done?</button>
        </span>
      </div>{showModal ? <Modal showModal={show} title={title} body={JSON.stringify(body)} /> : ''}

    </div>
  );
};

export default NewArticle;
