import {ActionType} from './action';
import {CitesNames, TypeSort, AuthorizationStatus} from '../utils/utils';

const initialState = {
  city: CitesNames.PARIS,
  offersList: [],
  offersCount: null,
  typeSort: TypeSort.POPULAR,
  activeOffer: {id: -1},
  stateSort: false,
  hotels: [],
  nearHotels: [],
  comments: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return {
        ...state,
        city: action.payload
      };
    case ActionType.FILL_LIST:
      return {
        ...state,
        offersList: action.payload
      };
    case ActionType.SET_OFFERS_COUNT:
      return {
        ...state,
        offersCount: action.payload
      };
    case ActionType.SET_SORT_TYPE:
      return {
        ...state,
        typeSort: action.payload
      };
    case ActionType.FILL_SORT_LIST:
      return {
        ...state,
        offersList: action.payload
      };
    case ActionType.SET_ACTIVE_OFFER:
      return {
        ...state,
        activeOffer: action.payload
      };
    case ActionType.SET_DEFAULT_OFFER:
      return {
        ...state,
        activeOffer: action.payload
      };
    case ActionType.SET_STATE_SORT:
      return {
        ...state,
        stateSort: action.payload
      };
    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        hotels: action.payload
      };
    case ActionType.LOAD_NEAR_HOTELS:
      return {
        ...state,
        nearHotels: action.payload,
        isDataLoaded: true
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isDataLoaded: true
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true
      };
    default:
      return {...state};
  }
};

export {reducer};
