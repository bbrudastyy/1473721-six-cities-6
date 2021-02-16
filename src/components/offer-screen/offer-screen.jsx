import React from 'react';
import Header from '../header/header';
import Photo from '../photo/photo';
import InsideItem from '../inside-item/inside-item';
import PropTypes from 'prop-types';
import {getRatingWidth} from '../../utils/utils';
import Comment from '../comment/comment';
import OtherPlace from '../other-place/other-place';
import Form from '../form/form';

const getPhotosContainer = (photos) => {
  if (photos) {
    return <div className="property__gallery-container container">
      <div className="property__gallery">
        {photos.map((photo, id) => < Photo key={`photo_${id}`} photo={photo} />)}
      </div>
    </div>;
  } else {
    return ``;
  }
};

const getGoodsContainer = (goods) => {
  if (goods) {
    return <div className="property__inside">
      <h2 className="property__inside-title">{`What's inside`}</h2>
      <ul className="property__inside-list">
        {goods.map((good, id) => < InsideItem key={`good_${id}`} good={good} />)}
      </ul>
    </div>;
  } else {
    return ``;
  }
};

const getCommentContainer = (comments) => {
  if (comments) {
    return <ul className="reviews__list">
      {comments.map((comment, id) => < Comment key={`comment_${id}`} comment={comment} />)}
    </ul>;
  } else {
    return ``;
  }
};

const getOtherPlace = (hotels, name) => {
  if (hotels) {
    return <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the {name}</h2>
        <div className="near-places__list places__list">
          {hotels.map((hotel, id) => <OtherPlace key={`hotel_${id}`} hotel={hotel} />)}
        </div>
      </section>
    </div>;
  } else {
    return ``;
  }
};

const OfferScreen = ({hotel, comments, hotels}) => {

  const {images, isFavorite, title, isPremium, rating, type, bedrooms, maxAdults, price, goods, host, description, city} = hotel;
  const {avatarUrl, isPro} = host;

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          {getPhotosContainer(images)}
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? <div className="property__mark"> <span>Premium</span> </div> : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button ${isFavorite ? `property__bookmark-button--active` : ``} button`} type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getRatingWidth(rating)}`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              {getGoodsContainer(goods)}
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={avatarUrl} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
                <ul className="reviews__list">
                  {getCommentContainer(comments)}
                </ul>
                <Form />
              </section>
            </div>
          </div>
          <section className="property__map map" />
        </section>
        {getOtherPlace(hotels, city.name)}
      </main>
    </div>
  );
};

OfferScreen.propTypes = {
  comments: PropTypes.array,
  hotel: PropTypes.object,
  hotels: PropTypes.array
};

export default OfferScreen;
