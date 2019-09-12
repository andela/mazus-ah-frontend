/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Holder from '@Views/article/newArticle/Holder';
import './tagsInput.scss';

const TagsInput = (props) => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTag] = useState('');
  const addTags = (event) => {
    if (event.key === 'Enter' && event.target.value !== '' && tags.length < 10) {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      setTag('');
    }
  };
  const removeTags = (index) => {
    setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
  };
  const sendTags = () => props.selectedTags(tags);
  return (
    <div className="tags-input">
      <Holder sendTags={sendTags} />
      <input
        type="text"
        id="tag-input"
        value={tagInput}
        onChange={e => setTag(e.target.value)}
        onKeyUp={event => addTags(event)}
        placeholder="Add Tags"
      />
      <div className="tags" tags={tags}>
        {tags.map((tag, index) => (
          <p id="tag-content" key={index}>
            <span>{tag}</span>
            <i
              className="material-icons"
              onClick={() => removeTags(index)}
            >
              &nbsp;close
            </i>
          </p>
        ))}
      </div>
    </div>
  );
};

TagsInput.propTypes = {
  selectedTags: PropTypes.func.isRequired,
};

export default TagsInput;
