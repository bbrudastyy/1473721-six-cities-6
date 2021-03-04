import React, {useState} from 'react';
import Rating from '../rating/rating';
import PropTypes from 'prop-types';
import {commentPost} from '../../store/api-actions';

const Form = ({id}) => {
  const ratingValues = [5, 4, 3, 2, 1];

  const [userForm, setUserForm] = useState({
    rating: 0,
    comment: ``
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    commentPost(id, userForm);
    setUserForm({rating: 0, comment: ``});
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setUserForm({...userForm, [name]: value});
  };

  return <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
    <label className="reviews__label form__label" htmlFor="review">Your review</label>
    <div className="reviews__rating-form form__rating">
      {ratingValues.map((ratingValue) => <Rating key={`rating_${ratingValue}`} rating={ratingValue} handleFieldChange={handleFieldChange} />)}
    </div>
    <textarea className="reviews__textarea form__textarea" id="comment" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" value={userForm.comment} onChange={handleFieldChange} />
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
      </p>
      <button className="reviews__submit form__submit button" type="submit">Submit</button>
    </div>
  </form>;
};

Form.propTypes = {
  id: PropTypes.number.isRequired
};

export default Form;
