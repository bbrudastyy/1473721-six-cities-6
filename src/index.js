import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import rootReducer from './store/root-reducer';
import {createAPI} from './services/api';
import {requireAuthorization, setStatusCode} from './store/action';
import {AuthorizationStatus} from './utils/utils';
import {checkAuth} from './store/api-actions';
import {redirect} from "./store/middlewares/redirect";
import {HttpCode} from "./services/api";
import {configureStore} from '@reduxjs/toolkit';

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
    () => store.dispatch(setStatusCode(HttpCode.NOT_FOUND)));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
      />
    </Provider>,
    document.querySelector(`#root`)
);
