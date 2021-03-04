import React from 'react';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history/browser-history";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <PrivateRoute exact
          path="/favorites"
          render={() => <FavoritesScreen />}>
        </PrivateRoute>
        <Route exact path="/offer/:id"
          render={({match}) => <OfferScreen id={+match.params.id}/>} >
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
