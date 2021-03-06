import React, {useState} from 'react';
import Rating from '../rating/rating';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {commentPost} from '../../store/api-actions';

const MIN_LENGTH_COMMENT = 50;

const Form = ({id}) => {
  const ratingValues = [5, 4, 3, 2, 1];

  const dispatch = useDispatch();

  const [userForm, setUserForm] = useState({
    rating: 0,
    comment: ``,
    isDisabled: true
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(commentPost(id, userForm));
    setUserForm({rating: 0, comment: ``, isDisabled: true});
  };

  const handleFieldChange = (evt) => {
    const {name} = evt.target;
    let {value} = evt.target;
    if (name === `rating`) {
      value = Number.parseInt(value, 10);
    }

    setUserForm({...userForm, [name]: value, isDisabled: userForm.comment.length < MIN_LENGTH_COMMENT});
  };

  return <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
    <label className="reviews__label form__label" htmlFor="review">Your review</label>
    <div className="reviews__rating-form form__rating">
      {ratingValues.map((ratingValue) => <Rating key={`rating_${ratingValue}`} checked={userForm.rating === ratingValue} rating={ratingValue} handleFieldChange={handleFieldChange} />)}
    </div>
    <textarea className="reviews__textarea form__textarea" id="comment" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" value={userForm.comment} onChange={handleFieldChange} />
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
      </p>
      <button className="reviews__submit form__submit button" type="submit" disabled={userForm.isDisabled}>Submit</button>
    </div>
  </form>;
};

Form.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Form;
