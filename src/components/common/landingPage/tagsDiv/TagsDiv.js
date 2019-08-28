import React from 'react';
import Tag from '../tag/Tag';
import './TagsDiv.scss';

const tagsInfo = [
  'fashion',
  'jean',
  'denim',
  'shirt',
  'navyBlue',
  'vintage',
  'adidas',
  'yeezy',
  'rippedJean',
  'lifestyle',
  'urban',
];

const TagsDiv = () => (
  <div className="tags-container">
    <p>Tags</p>
    <div className="article-tags">
      {tagsInfo.map(tag => <Tag tagName={tag} />)}
    </div>
  </div>
);

export default TagsDiv;
