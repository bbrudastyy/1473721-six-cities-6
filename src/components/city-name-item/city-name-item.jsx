// import React from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import {ActionCreator} from '../../store/action';

// const CityNameItem = ({cityName, onUserCity, city}) => {
//   return <li className="locations__item">
//     <a city-name={cityName} className={`locations__item-link tabs__item ${cityName === city ? `tabs__item--active` : ``}`} href="#" onClick={onUserCity}>
//       <span city-name={cityName}>{cityName}</span>
//     </a>
//   </li>;
// };

// CityNameItem.propTypes = {
//   cityName: PropTypes.string,
//   city: PropTypes.string,
//   onUserCity: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   city: state.city,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onUserCity(evt) {
//     dispatch(ActionCreator.changeCity(evt.target.getAttribute(`city-name`)));
//   },
// });

// export {CityNameItem};
// export default connect(mapStateToProps, mapDispatchToProps)(CityNameItem);

import React from 'react';
import PropTypes from 'prop-types';
import cardProp from '../card/card.prop';
// import {connect} from 'react-redux';
// import {ActionCreator} from '../../store/action';

const CityNameItem = ({cityName, onUserCity, city, hotels}) => {
  return <li className="locations__item">
    <a className={`locations__item-link tabs__item ${cityName === city ? `tabs__item--active` : ``}`} href="#" onClick={(evt) => {
      evt.preventDefault();
      onUserCity(cityName, hotels);
    }}>
      <span>{cityName}</span>
    </a>
  </li>;
};

CityNameItem.propTypes = {
  cityName: PropTypes.string,
  city: PropTypes.string,
  onUserCity: PropTypes.func.isRequired,
  hotels: PropTypes.arrayOf(cardProp)
};

// const mapStateToProps = (state) => ({
//   city: state.city,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onUserCity(evt) {
//     dispatch(ActionCreator.changeCity(evt.target.getAttribute(`city-name`)));
//   },
// });

// export {CityNameItem};
export default CityNameItem;
// export default connect(mapStateToProps, mapDispatchToProps)(CityNameItem);

