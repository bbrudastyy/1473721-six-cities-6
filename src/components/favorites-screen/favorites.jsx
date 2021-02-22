import React from 'react';
import Header from '../header/header';
import PropTypes from 'prop-types';
import CardContainer from '../card-container/card-container';
import {TypeCard} from '../../utils/utils';

const FavoritesScreen = ({hotels}) => {
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <CardContainer hotels={hotels} containerType={TypeCard.FAVORITE} />
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
  hotels: PropTypes.array
};

export default FavoritesScreen;
