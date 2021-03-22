import React, {useEffect} from 'react';
import Header from '../header/header';
import Map from '../map/map';
import CityNameItem from '../city-name-item/city-name-item';
import CardContainer from '../card-container/card-container';
import {TypeCard, TypeMap, SortType} from '../../utils/utils';
import {useSelector, useDispatch} from 'react-redux';
import {changeCity, fillList, fillSortList, setActiveOffer, setDefaultOffer, setOffersCount, setSortType, setStateSort} from '../../store/action';
import {CitesNames} from '../../utils/utils';
import SortItem from '../sort-item/sort-item';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchHotelsList} from '../../store/api-actions';

const getCitiesContainer = (offersList, offersCount, city, typeSort, hotels, onDefaultActive, activeOffer, onActive, onSort, stateSort, onStateSort) => {
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
            {Object.keys(SortType).map((type, id) => <SortItem key={`type_${id}`} typeSort={typeSort} type={type} onSort={onSort} hotels={hotels} city={city} />)}
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

const MainScreen = () => {

  const {offersCount, city, offersList, typeSort, activeOffer, stateSort} = useSelector((state) => state.MAIN);
  const {isDataLoaded} = useSelector((state) => state.USER);
  const {hotels} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  const onUserCity = (cityName, allHotels) => {
    dispatch(changeCity(cityName));
    dispatch(fillList(cityName, allHotels));
    dispatch(setOffersCount(cityName, allHotels));
    dispatch(setSortType(SortType.POPULAR));
  };
  const onSort = (allSortType, allHotels, cityName) => {
    dispatch(setSortType(allSortType));
    dispatch(fillSortList(allHotels, allSortType, cityName));
  };
  const onActive = (offer) => {
    dispatch(setActiveOffer(offer));
  };
  const onDefaultActive = () => {
    dispatch(setDefaultOffer());
  };
  const onStateSort = (sortState) => {
    dispatch(setStateSort(sortState));
  };

  useEffect(() => {
    if (!isDataLoaded) {
      dispatch(fetchHotelsList());
    }
    onUserCity(city, hotels);
  }, [isDataLoaded, hotels]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return <div className="page page--gray page--main">
    <Header />
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

export default MainScreen;
