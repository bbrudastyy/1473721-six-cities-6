import React from 'react';
import PropTypes from 'prop-types';
import {SortType} from '../../utils/utils';
import CardProps from '../card/card.prop';

const SortItem = ({typeSort, type, onSort, hotels, city}) => {
  console.log(typeSort);
  return <li className={`places__option ${SortType === type ? `places__option--active` : ``}`} onClick={(evt) => {
    evt.preventDefault();
    onSort(typeSort[type], hotels, city);
  }} tabIndex={0}>{typeSort[type]}</li>;
};

SortItem.propTypes = {
  typeSort: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  hotels: PropTypes.arrayOf(CardProps).isRequired,
  city: PropTypes.string.isRequired,
};

export default SortItem;
