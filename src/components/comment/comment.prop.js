import PropTypes from 'prop-types';

export default PropTypes.shape({
  text: PropTypes.text,
  date: PropTypes.date,
  id: PropTypes.number,
  rating: PropTypes.number,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string
  })
});
