import React from 'react';
import PropTypes from 'prop-types';

const InsideItem = ({good}) => {
  return (
    <li className="property__inside-item">
      {good}
    </li>
  );
};

InsideItem.propTypes = {
  good: PropTypes.string
};

export default InsideItem;
