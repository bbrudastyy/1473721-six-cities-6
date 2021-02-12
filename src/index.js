import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {hotels, comments} from './mocks/offers';

const Settings = {
  OFFERS_COUNT: 4,
  COMMENTS_COUNT: 5
};

// const getHotels = new Array(Settings.OFFERS_COUNT).fill().map(getHotel);
// const getComments = new Array(Settings.COMMENTS_COUNT).fill().map(getComment);

ReactDOM.render(
    <App
      offersCount={Settings.OFFERS_COUNT}
      hotels={hotels}
      comments={comments}
    />,
    document.querySelector(`#root`)
);
