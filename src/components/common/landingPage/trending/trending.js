import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTrendingArticles } from '../../../../redux/actions/landingPageActions';
import './trending.scss';

const formatDate = (createdAt) => {
  const date = new Date(createdAt);
  return `${date.toLocaleString('default', { month: 'short' })} ${date.getDay()}`;
};

const TrendingArticles = (props) => {
  // eslint-disable-next-line react/prop-types
  const { trends } = props;
  useEffect(() => {
    const fetchTrendingArticles = async () => {
      await props.getTrendingArticles();
    };
    fetchTrendingArticles();
  }, []);

  return (
    trends.articles ? trends.articles.map((singleArticle) => {
      /* istanbul ignore next-line */
      if (trends.articles.indexOf(singleArticle) <= 7) {
        return (
          <div className="trending-container" key={singleArticle.id}>
            <p id="article-number">{trends.articles.indexOf(singleArticle) + 1}</p>
            <div>
              <Link id="trending-title" to="*"><h1>{singleArticle.title}</h1></Link>
              <p>{singleArticle.description}</p>
              <p className="fade-text">{formatDate(singleArticle.createdAt)}  •  {singleArticle.readTime} mins read</p>
            </div>
          </div>
        );
      }
      /* istanbul ignore next-line */
      return null;
    }) : <p>Nothing to show</p>
  );
};


TrendingArticles.propTypes = {
  getTrendingArticles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  trends: state.article.trends,
});

export default connect(
  mapStateToProps,
  { getTrendingArticles },
)(TrendingArticles);
