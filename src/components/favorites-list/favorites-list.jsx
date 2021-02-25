import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import CardProps from '../card/card.prop';

const FavoritesList = ({hotels, cityName}) => {
  const className = {
    article: `favorites__card`,
    linkWrapper: `cities__image-wrapper`,
    divInfo: `favorites__card-info`,
    button: `place-card__bookmark-button--active`
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
          return <Card key={`hotel_${hotel.id}`} offer={hotel} favoriteScreen={true} className={className} />;
        } else {
          return ``;
        }
      })}
    </div>
  </li>;
};

FavoritesList.propTypes = {
  hotels: PropTypes.arrayOf(CardProps),
  cityName: PropTypes.string
};

export default FavoritesList;
