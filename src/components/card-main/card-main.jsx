import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';

const CardMain = ({hotels}) => {
  return <div className="cities__places-list places__list tabs__content">
    {hotels.map((offer) => <Card key={offer.id} offer={offer}/>)}
  </div>;
};

CardMain.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object)
};

export default CardMain;
