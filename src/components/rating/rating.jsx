import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({checked, rating, handleFieldChange}) => {

  return <>
    <input className="form__rating-input visually-hidden" name="rating" value={rating} checked={checked} id={`${rating}-stars`} type="radio" onChange={handleFieldChange} />
    <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
      <svg className="form__star-image" width={37} height={33}>
        <use xlinkHref="#icon-star" />
      </svg>
    </label>
  </>;

};

Rating.propTypes = {
  checked: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  handleFieldChange: PropTypes.func.isRequired
};

export default Rating;


