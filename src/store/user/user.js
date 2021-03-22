import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, setLogin} from '../action';
import {AuthorizationStatus} from '../../utils/utils';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  loginName: ``,
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
    state.isDataLoaded = true;
  });
  builder.addCase(setLogin, (state, action) => {
    state.loginName = action.payload;
  });
});

export {user};
