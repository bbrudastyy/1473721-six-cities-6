import React, {useEffect} from 'react';
import Header from '../header/header';
import PropTypes from 'prop-types';
import CardContainer from '../card-container/card-container';
import {TypeCard} from '../../utils/utils';
import {connect} from "react-redux";
import cardProp from '../card/card.prop';
import {fetchHotelsFavotiteList} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import {getFavoriteList, getHotels, getIsFavoriteLoaded} from '../../store/data/selectors';

const FavoritesScreen = ({favoriteList, loadFavorite, isFavoriteLoaded, hotels}) => {

  useEffect(() => {
    if (!isFavoriteLoaded) {
      loadFavorite();
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

FavoritesScreen.propTypes = {
  favoriteList: PropTypes.arrayOf(cardProp),
  loadFavorite: PropTypes.func.isRequired,
  isFavoriteLoaded: PropTypes.bool.isRequired,
  hotels: PropTypes.arrayOf(cardProp)
};

const mapDispatchToProps = (dispatch) => ({
  loadFavorite() {
    dispatch(fetchHotelsFavotiteList());
  }
});

const mapStateToProps = (state) => ({
  favoriteList: getFavoriteList(state),
  isFavoriteLoaded: getIsFavoriteLoaded(state),
  hotels: getHotels(state)
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
