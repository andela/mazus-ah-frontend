/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTags, getArticlesByCategory } from '../../../../redux/actions/landingPageActions';
import Cards from '../card/cards';
import './categories.scss';

const Category = (props) => {
  useEffect(() => {
    const fetchArticles = async (allTags) => {
      await props.getArticlesByCategory(allTags);
    };
    const fetchTags = async () => {
      const res = await props.getTags();
      fetchArticles(res);
    };

    fetchTags();
  }, []);
  const allArticles = props.article.articles;
  return (
    allArticles.map((artle) => {
      let categoryArticle;
      const cards = artle.data.articles.allArticles.map((e) => {
        categoryArticle = e;
        return (
          <Cards key={e.title} {...e} />
        );
      });
      return (
        <div key={categoryArticle.tagsList[0]} className="category-container">
          <div className="top-div">
            <p>{categoryArticle.title}</p>
            <p id="related-articles-btn"><Link to="*">related articles <i className="material-icons">navigate_next</i></Link></p>
          </div>
          <div className="bottom-div">
            {cards}
          </div>
        </div>
      );
    })
  );
};

Category.propTypes = {
  getTags: PropTypes.func.isRequired,
  getArticlesByCategory: PropTypes.func.isRequired,
  article: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  tags: state.tags,
  article: state.article,
});


export default connect(
  mapStateToProps,
  { getTags, getArticlesByCategory },
)(Category);
