import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';

const CardNear = ({hotels}) => {
  return <div className="cities__places-list places__list tabs__content">
    {hotels.map((offer) => <Card key={offer.id} offer={offer}/>)}
  </div>;
};

CardNear.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.object)
};

export default CardNear;
