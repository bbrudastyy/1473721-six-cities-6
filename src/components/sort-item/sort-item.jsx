import React from 'react';
import PropTypes from 'prop-types';
import {TypeSort} from '../../utils/utils';
import CardProps from '../card/card.prop';

const SortItem = ({typeSort, type, onSort, hotels, city}) => {
  return <li className={`places__option ${typeSort === type ? `places__option--active` : ``}`} onClick={(evt) => {
    evt.preventDefault();
    onSort(TypeSort[type], hotels, city);
  }} tabIndex={0}>{TypeSort[type]}</li>;
};

SortItem.propTypes = {
  typeSort: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  hotels: PropTypes.arrayOf(CardProps).isRequired,
  city: PropTypes.string.isRequired,
};

export default SortItem;
