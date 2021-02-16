import React from 'react';
import PropTypes from 'prop-types';
import {getRatingWidth} from '../../utils/utils';
import {Link} from 'react-router-dom';

const OtherPlace = ({hotel}) => {
  const {id, previewImage, price, rating, isFavotite, description, type} = hotel;
  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{`€${price}`}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavotite ? `place-card__bookmark-button--active` : ``} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingWidth(rating)}`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{description}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OtherPlace.propTypes = {
  hotel: PropTypes.object,
  id: PropTypes.number,
  previewImage: PropTypes.string,
  rating: PropTypes.number,
  isFavotite: PropTypes.bool,
  type: PropTypes.string,
  description: PropTypes.string
};

export default OtherPlace;
