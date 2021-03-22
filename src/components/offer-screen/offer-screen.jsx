import React, {useEffect} from 'react';
import Header from '../header/header';
import Photo from '../photo/photo';
import InsideItem from '../inside-item/inside-item';
import PropTypes from 'prop-types';
import {getRatingWidth} from '../../utils/utils';
import Reviews from '../reviews/reviews';
import CardContainer from '../card-container/card-container';
import {TypeCard, TypeMap} from '../../utils/utils';
import CardProps from '../card/card.prop';
import CommentProps from '../comment/comment.prop';
import Map from '../map/map';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {fetchHotel, fetchComments, fetchNear} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {HttpCode} from '../../services/api';
import {getHotel, getIsHotelLoaded, getIsCommentsLoaded, getIsNearLoaded, getComments, getNearHotels} from '../../store/data/selectors';
import {getCity, getOffersList, getOffersCount, getTypeSort, getActiveOffer, getStatusCode} from '../../store/main/selectors';

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

const getOtherPlace = (hotels, name, onActive, onDefaultActive) => {
  if (hotels) {
    return <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the {name}</h2>
        <CardContainer hotels={hotels} containerType={TypeCard.NEAR} onActive={onActive} onDefaultActive={onDefaultActive} />
      </section>
    </div>;
  } else {
    return ``;
  }
};

const OfferScreen = ({id, setOffer, hotel, comments, nearHotels, isHotelLoaded, isCommentsLoaded, isNearLoaded, onActive, onDefaultActive, activeOffer, statusCode}) => {

  useEffect(() => {
    if (!isHotelLoaded && !isCommentsLoaded && !isNearLoaded) {
      setOffer(id);
    }

  }, [isHotelLoaded, isCommentsLoaded, isNearLoaded, id]);

  if (!isHotelLoaded || !isCommentsLoaded || !isNearLoaded) {
    if (statusCode === HttpCode.NOT_FOUND) {
      return (
        <NotFoundScreen />
      );
    } else {
      return (
        <LoadingScreen />
      );
    }
  }

  const {images, isFavorite, title, isPremium, rating, type, bedrooms, maxAdults, price, goods, host, description, city} = hotel;
  const {avatarUrl, isPro} = host;

  return (
    <div className="page">
      <Header />
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
              <Reviews comments={comments} id={id} />
            </div>
          </div>
          <Map hotels={nearHotels} type={TypeMap.PROPERTY} activeOffer={activeOffer} />
        </section>
        {getOtherPlace(nearHotels, city.name, onActive, onDefaultActive)}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  offersList: getOffersList(state),
  offersCount: getOffersCount(state),
  typeSort: getTypeSort(state),
  activeOffer: getActiveOffer(state),
  hotel: getHotel(state),
  isHotelLoaded: getIsHotelLoaded(state),
  isCommentsLoaded: getIsCommentsLoaded(state),
  isNearLoaded: getIsNearLoaded(state),
  comments: getComments(state),
  nearHotels: getNearHotels(state),
  statusCode: getStatusCode(state)
});

const mapDispatchToProps = (dispatch) => ({
  onActive(offer) {
    dispatch(ActionCreator.setActiveOffer(offer));
  },
  onDefaultActive() {
    dispatch(ActionCreator.setDefaultOffer());
  },
  setOffer(id) {
    dispatch(fetchHotel(id));
    dispatch(fetchComments(id));
    dispatch(fetchNear(id));
    dispatch(ActionCreator.setStatusCode(HttpCode.OK));
  }
});

OfferScreen.propTypes = {
  comments: PropTypes.arrayOf(CommentProps),
  hotel: CardProps,
  activeOffer: PropTypes.object.isRequired,
  onActive: PropTypes.func,
  onDefaultActive: PropTypes.func,
  id: PropTypes.number.isRequired,
  setOffer: PropTypes.func.isRequired,
  isHotelLoaded: PropTypes.bool.isRequired,
  isCommentsLoaded: PropTypes.bool.isRequired,
  isNearLoaded: PropTypes.bool.isRequired,
  nearHotels: PropTypes.array,
  statusCode: PropTypes.number
};

export {OfferScreen};
export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);
