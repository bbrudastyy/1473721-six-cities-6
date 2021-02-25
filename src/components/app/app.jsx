import React from 'react';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login';
import FavoritesScreen from '../favorites-screen/favorites';
import OfferScreen from '../offer-screen/offer-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

const getFavoritesHotels = (hotels) => hotels.filter((hotel) => hotel.isFavorite);

const App = ({hotels, comments}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            hotels={hotels} />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen
            hotels={getFavoritesHotels(hotels)} />
        </Route>
        <Route exact path="/offer/:id"
          render={({match}) => {
            const {id} = match.params;
            const hotel = hotels.find((element) => element.id === +id);
            const hotelOthers = hotels.filter((element) => element.city.name === hotel.city.name);
            const hotelComments = comments.filter((comment) => comment.id === +id);
            return <OfferScreen hotel={hotel} comments={hotelComments} hotels={hotelOthers} />;
          }} >
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  hotels: PropTypes.array.isRequired,
  comments: PropTypes.array
};

export default App;
