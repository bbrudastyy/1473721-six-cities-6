import React from 'react';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login';
import FavoritesScreen from '../favorites-screen/favorites';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

const searchHotel = (hotels, id) => hotels.find((hotel) => hotel.id === Number(id));
const searchComments = (comments, id) => comments.filter((comment) => comment.id === Number(id));

const App = ({offersCount, hotels, comments}) => {
  const id = window.location.pathname.substring(7);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            offersCount={offersCount}
            hotels={hotels} />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path="/offer/:id">
          <OfferScreen
            hotel={searchHotel(hotels, id)}
            comments={searchComments(comments, id)} />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  hotels: PropTypes.array.isRequired,
  comments: PropTypes.array
};

export default App;
