import React, {useState} from 'react';
import Rating from '../rating/rating';

const Form = () => {
  const ratingValues = [5, 4, 3, 2, 1];

  const [userForm, setUserForm] = useState({
    rating: 0,
    review: ``
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
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
    <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``} onChange={handleFieldChange} />
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
      </p>
      <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
    </div>
  </form>;
};

export default Form;
