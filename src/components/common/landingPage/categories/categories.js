import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTags } from '../../../../redux/actions/landingPageActions';
import Cards from '../card/cards';
import './categories.scss';

// eslint-disable-next-line arrow-body-style
const Category = (props) => {
  const fetchTags = async () => {
    await props.getTags();
  };

  useEffect(() => { fetchTags(); }, []);
  return (
    <div className="category-container">
      <div className="top-div">
        <p>Medicine</p>
        <p id="related-articles-btn"><Link to="*">related articles <i className="material-icons">navigate_next</i></Link></p>
      </div>
      <div className="bottom-div">
        <Cards />
      </div>
    </div>
  );
};

Category.propTypes = {
  getTags: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tags: state.tags,
});

export default connect(
  mapStateToProps,
  { getTags },
)(Category);
