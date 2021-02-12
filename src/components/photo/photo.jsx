import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({photo}) => {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={photo} alt="Photo studio" />
    </div>
  );
};

Photo.propTypes = {
  photo: PropTypes.string
};

export default Photo;
