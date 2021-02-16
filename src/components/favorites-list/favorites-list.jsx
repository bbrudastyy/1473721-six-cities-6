import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

const FavoritesList = ({hotels, cityName}) => {
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
          return <Card key={`hotel_${hotel.id}`} offer={hotel} favoriteScreen={true} />;
        } else {
          return ``;
        }
      })}
    </div>
  </li>;
};

FavoritesList.propTypes = {
  hotels: PropTypes.array,
  cityName: PropTypes.string
};

export default FavoritesList;
