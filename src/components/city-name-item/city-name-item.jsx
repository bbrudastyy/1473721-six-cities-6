import React from 'react';
import PropTypes from 'prop-types';
import cardProp from '../card/card.prop';

const CityNameItem = ({cityName, onUserCity, city, hotels}) => {
  return <li className="locations__item">
    <a className={`locations__item-link tabs__item ${cityName === city ? `tabs__item--active` : ``}`} href="#" onClick={(evt) => {
      evt.preventDefault();
      onUserCity(cityName, hotels);
    }}>
      <span>{cityName}</span>
    </a>
  </li>;
};

CityNameItem.propTypes = {
  cityName: PropTypes.string,
  city: PropTypes.string,
  onUserCity: PropTypes.func.isRequired,
  hotels: PropTypes.arrayOf(cardProp)
};

export default CityNameItem;
