import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import CardProps from '../card/card.prop';

const CardNear = ({hotels}) => {
  const className = {
    article: `near-places__card`,
    linkWrapper: `near-places__image-wrapper`,
    divInfo: ``,
    button: `place-card__bookmark-button--active`
  };

  return <div className="near-places__list places__list">
    {hotels.map((offer) => <Card key={`hotel_${offer.id}`} offer={offer} className={className} />)}
  </div>;
};

CardNear.propTypes = {
  hotels: PropTypes.arrayOf(CardProps)
};

export default CardNear;
