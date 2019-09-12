import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import { rateArticle } from '@Actions/articleActions';

const RateComponent = ({
  rateArticle: rateFunction,
  slug,
  rate,
  editable,
}) => {
  const [currentUserRate, setCurrentUserRate] = useState(0);
  useEffect(() => {
    const sendRating = async () => {
      await rateFunction({ rate: currentUserRate }, slug);
    };
    if (currentUserRate > 0) sendRating();
  }, [currentUserRate]);

  useEffect(() => {
    const previousRate = (rate === undefined || rate === 'null') ? 0 : rate;
    setCurrentUserRate(previousRate);
  }, [rate]);

  const updateCurrentUserRate = (newValue) => {
    setCurrentUserRate(newValue);
  };
  return (
    <div className="star_rate_component">
      <StarRatingComponent
        name="articleRate"
        starCount={5}
        value={parseInt(currentUserRate, 10)}
        onStarClick={updateCurrentUserRate}
        starColor="#FFCC00"
        emptyStarColor="grey"
        editing={editable}
      />
    </div>
  );
};

RateComponent.propTypes = {
  rateArticle: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,
};

export default connect(
  null,
  { rateArticle },
)(RateComponent);
