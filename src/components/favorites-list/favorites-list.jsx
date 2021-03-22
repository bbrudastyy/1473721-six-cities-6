import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import CardProps from '../card/card.prop';
import {useDispatch} from 'react-redux';
import {setActiveOffer, setDefaultOffer} from '../../store/action';

const FavoritesList = ({hotels, cityName}) => {
  const className = {
    article: `favorites__card`,
    linkWrapper: `cities__image-wrapper`,
    divInfo: `favorites__card-info`,
    button: `place-card__bookmark-button--active`
  };

  const dispatch = useDispatch();

  const onActive = (offer) => {
    dispatch(setActiveOffer(offer));
  };

  const onDefaultActive = () => {
    dispatch(setDefaultOffer());
  };

  return <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{cityName}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {hotels.map((hotel) => {
        if (hotel.city.name === cityName) {
          return <Card key={`hotel_${hotel.id}`} offer={hotel} className={className} onActive={onActive} onDefaultActive={onDefaultActive} />;
        } else {
          return ``;
        }
      })}
    </div>
  </li>;
};

FavoritesList.propTypes = {
  hotels: PropTypes.arrayOf(CardProps),
  cityName: PropTypes.string,
};

export default FavoritesList;
