import React from 'react';
import CardMain from '../card-main/card-main';
import CardFavorite from '../card-favorite/card-favorite';
import CardNear from '../card-near/card-near';
import {TypeCard} from '../../utils/utils';
import PropTypes from 'prop-types';
import CardProps from '../card/card.prop';

const CardContainer = ({hotels, containerType, onActive, onDefaultActive}) => {
  const getContainerByType = (type) => {
    switch (type) {
      case TypeCard.MAIN:
        return <CardMain hotels={hotels} onActive={onActive} onDefaultActive={onDefaultActive}/>;
      case TypeCard.FAVORITE:
        return <CardFavorite hotels={hotels} />;
      case TypeCard.NEAR:
        return <CardNear hotels={hotels} onActive={onActive} onDefaultActive={onDefaultActive} />;
      default:
        return <CardMain hotels={hotels} onActive={onActive} onDefaultActive={onDefaultActive} />;
    }
  };

  return getContainerByType(containerType);
};

CardContainer.propTypes = {
  hotels: PropTypes.arrayOf(CardProps),
  containerType: PropTypes.string.isRequired,
  onActive: PropTypes.func,
  onDefaultActive: PropTypes.func
};

export default CardContainer;
