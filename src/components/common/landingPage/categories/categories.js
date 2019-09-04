/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '@Common/loader/Loader';

import { getTags, getArticlesByCategory, loaded } from '@Actions/landingPageActions';
import Cards from '@Common/landingPage/card/Cards';
import './categories.scss';

const Category = (props) => {
  const [tagsIndex, setTagsIndex] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const fetchArticles = async (allTags) => {
    await props.getArticlesByCategory(allTags, tagsIndex);
    setTagsIndex(tagsIndex + 10);
    setIsFetching(false);
  };

  // fetch tags and call the fetchArticle function on Mount
  useEffect(() => {
    const fetchTags = async () => {
      props.loaded(true);
      const tags = await props.getTags();
      await fetchArticles(tags);
    };

    fetchTags();
  }, []);

  // sets isfetching to true once user scrolls to the bottom
  function handleScroll() {
    const { scrollTop, offsetHeight } = document.documentElement;
    if (window.innerHeight + scrollTop !== offsetHeight || isFetching) return;
    setIsFetching(true);
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // call fetchArticles once isFetching is true
  useEffect(() => {
    if (isFetching) {
      fetchArticles(props.tags);
    }
  }, [isFetching]);

  const { article: { articles } } = props;

  const { isLoading } = props;
  return isLoading ? <Loader /> : (
    <div>
      {
      articles.map((singleCategory) => {
        let categoryArticle;
        const cards = singleCategory.articles.allArticles.map((catArticle) => {
          categoryArticle = catArticle;
          return (
            <Cards key={catArticle.title} {...catArticle} />
          );
        });
        return (
          <div key={categoryArticle.tagsList[0]} className="category-container">
            <div className="top-div">
              <p>{categoryArticle.tagsList[0]}</p>
              <p id="related-articles-btn"><Link to="*">related articles <i className="material-icons">navigate_next</i></Link></p>
            </div>
            <div className="bottom-div">
              {cards}
            </div>
          </div>
        );
      })
    }
    </div>
  );
};

Category.propTypes = {
  getTags: PropTypes.func.isRequired,
  getArticlesByCategory: PropTypes.func.isRequired,
  article: PropTypes.shape({}).isRequired,
  tags: PropTypes.array.isRequired,
  loaded: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  tags: state.article.tags,
  article: state.article,
  isLoading: state.article.isLoading,
});


export default connect(
  mapStateToProps,
  { getTags, getArticlesByCategory, loaded },
)(Category);
