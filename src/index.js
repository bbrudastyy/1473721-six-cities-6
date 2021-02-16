import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {getHotelsMocks, getCommentsMocks} from './mocks/offers';

const hotels = getHotelsMocks().slice();
const comments = getCommentsMocks().slice();

ReactDOM.render(
    <App
      offersCount={hotels.length}
      hotels={hotels}
      comments={comments}
    />,
    document.querySelector(`#root`)
);
