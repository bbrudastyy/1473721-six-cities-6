import React from 'react';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login';
import FavoritesScreen from '../favorites-screen/favorites';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

const App = ({offersCount}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen offersCount={offersCount} />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path="/offer/:id">
          <OfferScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired
};

export default App;
