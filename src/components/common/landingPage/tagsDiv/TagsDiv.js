import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tag from '@Common/landingPage/tag/Tag';
import './tagsDiv.scss';

const TagsDiv = (props) => {
  const { article: { tags } } = props;
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    setAllTags(tags);
  }, [tags]);

  return (
    <div className="tags-container">
      <p>Tags</p>
      <div className="article-tags">
        {allTags.map(tag => <Tag key={tag} tagName={tag} />)}
      </div>
    </div>
  );
};


TagsDiv.propTypes = {
  article: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  article: state.article,
});

export default connect(
  mapStateToProps,
  null,
)(TagsDiv);
