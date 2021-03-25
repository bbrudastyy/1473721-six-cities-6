import React, {useEffect} from 'react';
import Header from '../header/header';
import CityNameItem from '../city-name-item/city-name-item';
import {SortType} from '../../utils/utils';
import {useSelector, useDispatch} from 'react-redux';
import {changeCity, fillList, setOffersCount, setSortType} from '../../store/action';
import {CitesNames} from '../../utils/utils';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchHotelsList} from '../../store/api-actions';
import {STATE_SELECTOR} from '../../utils/state-selector';
import CiteisContainer from '../cities-container/cities-container';

const MainScreen = () => {

  const {city, offersList} = useSelector(STATE_SELECTOR.MAIN);
  const {isDataLoaded} = useSelector(STATE_SELECTOR.USER);
  const {hotels} = useSelector(STATE_SELECTOR.DATA);

  const dispatch = useDispatch();

  const onUserCity = (cityName, allHotels) => {
    dispatch(changeCity(cityName));
    dispatch(fillList(cityName, allHotels));
    dispatch(setOffersCount(cityName, allHotels));
    dispatch(setSortType(SortType.POPULAR));
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
        {<CiteisContainer />}
      </div>
    </main>
  </div>;
};

export default MainScreen;
