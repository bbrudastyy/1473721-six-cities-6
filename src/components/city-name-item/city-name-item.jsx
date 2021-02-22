import React from 'react';
import PropTypes from 'prop-types';

const CityNameItem = ({cityName}) => {
  return <li className="locations__item">
    <a className="locations__item-link tabs__item" href="#">
      <span>{cityName}</span>
    </a>
  </li>;
};

CityNameItem.propTypes = {
  cityName: PropTypes.string
};

export default CityNameItem;

