import React from 'react';
import {Link} from 'react-router-dom';
import {getRatingWidth} from '../../utils/utils';
import PropTypes from 'prop-types';
import CardProps from './card.prop';

const Card = ({offer, favoriteScreen = false}) => {
  const {price, isPremium, previewImage, title, rating, type, isFavorite, id} = offer;

  return <article className={`${favoriteScreen ? `favorites__card` : `cities__place-card`} place-card`}>
    {isPremium ? <div className="place-card__mark"> <span>Premium</span> </div> : ``}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={`/offer/${id}`}>
        <img className="place-card__image" src={`${previewImage}`} width={260} height={200} alt="Place image" />
      </Link>
    </div>
    <div className={`${favoriteScreen ? `favorites__card-info` : ``} place-card__info`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">{`€${price}`}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
          <svg className="place-card__bookmark-icon" width={18} height={19}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${getRatingWidth(rating)}`}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{title}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>;
};

Card.propTypes = {
  offer: CardProps,
  isFavorite: PropTypes.bool,
  favoriteScreen: PropTypes.bool
};

export default Card;
