import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import CardProps from '../card/card.prop';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {getFavoriteList} from '../../store/data/selectors';
import {getStateSort, getActiveOffer} from '../../store/main/selectors';

const FavoritesList = ({hotels, cityName, onActive, onDefaultActive}) => {
  const className = {
    article: `favorites__card`,
    linkWrapper: `cities__image-wrapper`,
    divInfo: `favorites__card-info`,
    button: `place-card__bookmark-button--active`
  };

  return <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{cityName}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {hotels.map((hotel) => {
        if (hotel.city.name === cityName) {
          return <Card key={`hotel_${hotel.id}`} offer={hotel} className={className} onActive={onActive} onDefaultActive={onDefaultActive} />;
        } else {
          return ``;
        }
      })}
    </div>
  </li>;
};

const mapStateToProps = (state) => ({
  activeOffer: getActiveOffer(state),
  stateSort: getStateSort(state),
  favoriteList: getFavoriteList(state)
});

const mapDispatchToProps = (dispatch) => ({
  onActive(offer) {
    dispatch(ActionCreator.setActiveOffer(offer));
  },
  onDefaultActive() {
    dispatch(ActionCreator.setDefaultOffer());
  }
});

FavoritesList.propTypes = {
  hotels: PropTypes.arrayOf(CardProps),
  cityName: PropTypes.string,
  onActive: PropTypes.func,
  onDefaultActive: PropTypes.func
};

export {FavoritesList};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
