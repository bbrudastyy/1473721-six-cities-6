import {ActionType} from '../action';
import {AuthorizationStatus} from '../../utils/utils';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  loginName: ``,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true
      };
    case ActionType.SET_LOGIN:
      return {
        ...state,
        loginName: action.payload
      };
    default:
      return {...state};
  }
};

export {user};
