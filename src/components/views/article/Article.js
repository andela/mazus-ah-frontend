
import React, { Fragment, useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getArticleBySlug } from '@Redux/actions/articleActions';
import Tag from '@Common/tags/Tag';
import ArticleCommentList from '@Common/comments/ArticleCommentList';
import ArticleCommentForm from '@Common/comments/ArticleCommentForm';
import Loader from '@Common/loader/Loader';
import parseDataFromJSON from '@Utils/parseEditorData';
import StarRating from '@Common/starRating/StarRating';
import Card from '@Common/landingPage/card/Cards';
import isEmpty from '@Utils/isEmpty';
import readTimeFunc from '@Utils/readTime';
import ShareArticle from './shareArticle/ShareArticle';
import './article.scss';

const Article = ({
  getArticleBySlug: fetchSingleArticleBySlug,
  match,
  singleArticle,
  loading,
  error,
  relatedArticles,
  authenticatedUser,
  userData,
  articleStat,
}) => {
  const [articleStatistics, setArticleStatistics] = useState({});
  const [averageRating, setAverageRating] = useState(0);
  const articleSlug = match.params.slug;
  useEffect(() => {
    const allStat = articleStat;
    setArticleStatistics(allStat);
  }, [articleStat]);

  useEffect(() => {
    const getArticle = async () => {
      const userId = userData && userData.id;
      await fetchSingleArticleBySlug(articleSlug, userId);
    };
    getArticle();
    window.scrollTo(0, 0);
  }, [match, fetchSingleArticleBySlug]);
  useEffect(() => {
    setAverageRating(singleArticle.ratings > 0 ? singleArticle.ratings : 0);
  }, [singleArticle]);
  return (
    <Fragment>
      <div className="article__container">
        {loading
          && (
          <center>
            <Loader />
          </center>
          )}
        {!loading && Object.keys(error).length > 0 && (
          <div className="article__notfound">
            <i className="material-icons">highlight_off</i>
            <h1>Article Does Not Exist</h1>
          </div>
        )}
        {!loading && Object.keys(error).length === 0 && (
          <div className="article_title__row">
            <div className="article__author__details">
              <div id="author__profile__div">
                <img src="https://image.flaticon.com/icons/svg/147/147144.svg" alt="article author" width="70" className="circle" />
              </div>
              <div id="author__profile__div">
                <h5 className="author__name">{singleArticle?.author?.firstName} {singleArticle?.author?.lastName}</h5>
                <button className="follow__button" type="button">Follow</button>
                <div className="user__comment_info"><i className="material-icons">comment</i><span>{singleArticle?.articlecomment?.length}</span></div>
                <StarRating slug={articleSlug} rate={`${averageRating}`} editable={false} />
              </div>
            </div>
            <div className="article__content">
              <p className="article__read__time">{readTimeFunc(singleArticle.readTime)}</p>
              <h1 className="article__title">{singleArticle.title}</h1>
              <p className="article__description">
                {singleArticle.description}
              </p>
              <div className="article__body">
                {Object.keys(singleArticle).length > 0
                  ? ReactHtmlParser(parseDataFromJSON((JSON.parse(singleArticle.body))))
                  : <h1>Something went wrong..</h1>
           }
              </div>
              <div className="article__tags">
                {singleArticle?.tagsList?.length > 0 ? singleArticle.tagsList.map(tag => (
                  <Tag tagName={tag.toString()} key={tag.toString()} />
                )) : <p className="article__no__tags">No Tags for this article</p>}
              </div>
              <div className="article__divider" />
              <div className="article__actions">
                <div className="article__ratings">
                  <StarRating slug={articleSlug} rate={`${articleStatistics.rate}`} editable />
                </div>
                <div className="article__interaction">
                  <i className="material-icons">bookmark_border</i>
                  <ShareArticle
                    title={singleArticle?.title}
                    author={singleArticle?.author}
                  />
                  <i className="material-icons">report</i>
                </div>
              </div>
              {authenticatedUser ? (
                <ArticleCommentForm match={match} />
              ) : ''
              }
              {singleArticle?.articlecomment?.length > 0 ? singleArticle.articlecomment.map(
                comment => (
                  <ArticleCommentList
                    key={comment.id}
                    {...comment}
                  />
                ),
              ) : <p className="article__no__comments">No Comments for this article</p>}
              {authenticatedUser ? (
                ''
              )
                : (<Link to="/signin"><button type="button" className="comment_load_more">Sign in to Comment</button></Link>)
                }

              <div className="article__related__articles">
                <h3>Related Articles</h3>
                <div className="article__divider" />
                <div className="related__article__container">
                  {
                  !isEmpty(relatedArticles) ? relatedArticles.map((related) => {
                    if (related.id !== singleArticle.id) {
                      return (
                        <Card
                          key={related.id}
                          {...related}
                        />
                      );
                    }
                    return null;
                  }) : <h2>There are currently no related articles to this article</h2>
                }
                </div>
              </div>
            </div>
          </div>
        )
        }
      </div>
    </Fragment>
  );
};

Article.propTypes = {
  getArticleBySlug: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
  singleArticle: PropTypes.shape({}),
  error: PropTypes.shape({}),
  loading: PropTypes.bool.isRequired,
  relatedArticles: PropTypes.shape([]),
  authenticatedUser: PropTypes.bool.isRequired,
  userData: PropTypes.shape({}).isRequired,
  articleStat: PropTypes.shape({}).isRequired,
};

Article.defaultProps = {
  singleArticle: {},
  error: {},
  relatedArticles: [],
};

const mapStateToProps = state => ({
  singleArticle: state.singleArticle.article,
  loading: state.singleArticle.loading,
  error: state.singleArticle.error,
  relatedArticles: state.singleArticle.article.relatedArticles,
  authenticatedUser: state.auth.isAuthenticated,
  userData: state.auth.user,
  articleStat: state.singleArticle.articleStat,
});

export const ArticleComponent = Article;

export default connect(
  mapStateToProps,
  { getArticleBySlug },
)(Article);
