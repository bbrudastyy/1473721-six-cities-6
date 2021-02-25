import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {hotels, comments} from './mocks/offers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App
        hotels={hotels}
        comments={comments}
      />
    </Provider>,
    document.querySelector(`#root`)
);
