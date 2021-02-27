import React from 'react';
import Header from '../header/header';
import Map from '../map/map';
import CityNameItem from '../city-name-item/city-name-item';
import PropTypes from 'prop-types';
import CardContainer from '../card-container/card-container';
import {TypeCard, TypeMap, TypeSort} from '../../utils/utils';
import CardProps from '../card/card.prop';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {CitesNames} from '../../utils/utils';
import SortItem from '../sort-item/sort-item';

const getCitiesContainer = (offersList, offersCount, city, onSort, typeSort, hotels, onActive, onDefaultActive, activeOffer, stateSort, onStateSort) => {
  if (offersList.length !== 0) {
    return <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersCount} places to stay in {city}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by </span>
          <span className="places__sorting-type" tabIndex={0} onClick={(evt) => {
            evt.preventDefault();
            onStateSort(stateSort);
          }}>
            {typeSort}
            <svg className="places__sorting-arrow" width={7} height={4}>
              <use xlinkHref="#icon-arrow-select" />
            </svg>
          </span>
          <ul className={`places__options places__options--custom ${stateSort ? `places__options--opened` : ``}`}>
            {Object.keys(TypeSort).map((type, id) => <SortItem key={`type_${id}`} typeSort={typeSort} type={type} onSort={onSort} hotels={hotels} city={city} />)}
          </ul>
        </form>
        <CardContainer hotels={offersList} containerType={TypeCard.MAIN} onActive={onActive} onDefaultActive={onDefaultActive} />
      </section>
      <div className="cities__right-section">
        <Map hotels={offersList} type={TypeMap.CITIES} activeOffer={activeOffer} />
      </div>
    </div>;
  } else {
    return <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
        </div>
      </section>
      <div className="cities__right-section" />
    </div>;
  }
};

const MainScreen = (props) => {
  const {offersCount, hotels, city, onUserCity, offersList, onSort, typeSort, onActive, onDefaultActive, activeOffer, stateSort, onStateSort} = props;
  return <div className="page page--gray page--main">
    <Header/>
    <main className={`page__main page__main--index ${offersList.length === 0 ? `page__main--index-empty` : ``}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Object.values(CitesNames).map((cityName, id) => <CityNameItem key={`cityName_${id}`} cityName={cityName} onUserCity={onUserCity} city={city} hotels={hotels} />)}
          </ul>
        </section>
      </div>
      <div className="cities">
        {getCitiesContainer(offersList, offersCount, city, onSort, typeSort, hotels, onActive, onDefaultActive, activeOffer, stateSort, onStateSort)}
      </div>
    </main>
  </div>;
};

MainScreen.propTypes = {
  offersCount: PropTypes.number,
  hotels: PropTypes.arrayOf(CardProps).isRequired,
  onUserCity: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  offersList: PropTypes.arrayOf(CardProps),
  typeSort: PropTypes.string.isRequired,
  onActive: PropTypes.func,
  onDefaultActive: PropTypes.func,
  activeOffer: CardProps,
  stateSort: PropTypes.bool,
  onStateSort: PropTypes.func
};

const mapStateToProps = (state) => ({
  city: state.city,
  offersList: state.offersList,
  offersCount: state.offersCount,
  typeSort: state.typeSort,
  activeOffer: state.activeOffer,
  stateSort: state.stateSort
});

const mapDispatchToProps = (dispatch) => ({
  onUserCity(cityName, hotels) {
    dispatch(ActionCreator.changeCity(cityName));
    dispatch(ActionCreator.fillList(cityName, hotels));
    dispatch(ActionCreator.setOffersCount(cityName, hotels));
    dispatch(ActionCreator.setSortType(TypeSort.POPULAR));
  },
  onSort(sortType, hotels, cityName) {
    dispatch(ActionCreator.setSortType(sortType));
    dispatch(ActionCreator.fillSortList(hotels, sortType, cityName));
  },
  onActive(offer) {
    dispatch(ActionCreator.setActiveOffer(offer));
  },
  onDefaultActive() {
    dispatch(ActionCreator.setDefaultOffer());
  },
  onStateSort(sortState) {
    dispatch(ActionCreator.setStateSort(sortState));
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
