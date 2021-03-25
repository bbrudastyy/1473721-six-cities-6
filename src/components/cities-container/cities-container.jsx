import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {STATE_SELECTOR} from '../../utils/state-selector';
import Map from '../map/map';
import CardContainer from '../card-container/card-container';
import {TypeCard, TypeMap, SortType} from '../../utils/utils';
import SortItem from '../sort-item/sort-item';
import {setSortType, fillSortList, setActiveOffer, setDefaultOffer, setStateSort} from '../../store/action';

const CiteisContainer = () => {
  // offersList, offersCount, city, typeSort, hotels, onDefaultActive, activeOffer, onActive, onSort, stateSort, onStateSort
  // const {} = useSelector(STATE_SELECTOR.DATA);
  const {offersList, offersCount, city, typeSort, activeOffer, stateSort} = useSelector(STATE_SELECTOR.MAIN);
  const {hotels} = useSelector(STATE_SELECTOR.DATA);

  const dispatch = useDispatch();

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

export default CiteisContainer;
