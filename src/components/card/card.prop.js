import PropTypes from 'prop-types';

export default {
  offer: PropTypes.object.isRequired,
  id: PropTypes.number,
  price: PropTypes.number,
  isPremium: PropTypes.bool,
  previewImage: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  type: PropTypes.number,
  isFavorite: PropTypes.bool,
  favoriteScreen: PropTypes.bool
};
