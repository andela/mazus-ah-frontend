import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import { rateArticle } from '@Actions/articleActions';

const RateComponent = ({ rateArticle: rateFunction }) => {
  const [currentUserRate, setCurrentUserRate] = useState(0);

  useEffect(() => {
    const sendRating = async () => {
      await rateFunction({ rate: currentUserRate }, 'the-mindset-that-makes-you-better-with-money-1568053851989');
    };
    if (currentUserRate > 0) sendRating();
  }, [currentUserRate]);

  const updateCurrentUserRate = (newValue) => {
    setCurrentUserRate(newValue);
  };
  return (
    <div className="star_rate_component">
      <StarRatingComponent
        name="articleRate"
        starCount={5}
        value={currentUserRate}
        onStarClick={updateCurrentUserRate}
        starColor="#FFCC00"
        emptyStarColor="grey"
      />
    </div>
  );
};

RateComponent.propTypes = {
  rateArticle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  state,
});

export default connect(
  mapStateToProps,
  { rateArticle },
)(RateComponent);
