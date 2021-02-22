import React from 'react';
import PropTypes from 'prop-types';
import FavoritesList from '../favorites-list/favorites-list';

const getCitiesName = (hotels) => {
  const CititesName = [];
  let cityName = ``;
  hotels.forEach((hotel) => {
    const hotelCityName = hotel.city.name;
    if (cityName !== hotelCityName) {
      cityName = hotelCityName;
      CititesName.push(cityName);
    }
  });
  return CititesName;
};

const getFavotiltesList = (hotels, names) => {
  if (hotels.length !== 0) {
    return <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {names.map((cityName, id) => <FavoritesList key={`cityName_${id}`} hotels={hotels} cityName={cityName} />)}
      </ul>
    </section>;
  } else {
    return <section className="favorites favorites--empty">
      <h1 className="visually-hidden">Favorites (empty)</h1>
      <div className="favorites__status-wrapper">
        <b className="favorites__status">Nothing yet saved.</b>
        <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
      </div>
    </section>;
  }
};

const CardFavorite = ({hotels}) => {
  return <div className="page__favorites-container container">
    {getFavotiltesList(hotels, getCitiesName(hotels))}
  </div>;
};

CardFavorite.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object)
};

export default CardFavorite;
