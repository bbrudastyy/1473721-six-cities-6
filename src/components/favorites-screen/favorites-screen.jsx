import React, {useEffect} from 'react';
import Header from '../header/header';
import CardContainer from '../card-container/card-container';
import {TypeCard} from '../../utils/utils';
import {useSelector, useDispatch} from 'react-redux';
import {fetchHotelsFavotiteList} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import {STATE_SELECTOR} from '../../utils/state-selector';

const FavoritesScreen = () => {

  const {favoriteList, isFavoriteLoaded, hotels} = useSelector(STATE_SELECTOR.DATA);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFavoriteLoaded) {
      dispatch(fetchHotelsFavotiteList());
    }
  }, [isFavoriteLoaded, hotels]);

  if (!isFavoriteLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <CardContainer hotels={favoriteList} containerType={TypeCard.FAVORITE} />
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>
  );
};

export default FavoritesScreen;
