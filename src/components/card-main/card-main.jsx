import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import CardProps from '../card/card.prop';

const CardMain = ({hotels, onActive, onDefaultActive}) => {
  const className = {
    article: `cities__place-card`,
    linkWrapper: `cities__image-wrapper`,
    divInfo: ``,
    button: `place-card__bookmark-button--active`
  };

  return <div className="cities__places-list places__list tabs__content">
    {hotels.map((offer) => <Card key={offer.id} offer={offer} className={className} onActive={onActive} onDefaultActive={onDefaultActive}/>)}
  </div>;
};

CardMain.propTypes = {
  hotels: PropTypes.arrayOf(CardProps),
  onActive: PropTypes.func,
  onDefaultActive: PropTypes.func
};

export default CardMain;

