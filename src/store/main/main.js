import {ActionType} from '../action';
import {CitesNames, TypeSort} from '../../utils/utils';

const initialState = {
  city: CitesNames.PARIS,
  offersList: [],
  offersCount: null,
  typeSort: TypeSort.POPULAR,
  activeOffer: {id: -1},
  stateSort: false,
  hotels: [],
  isFavoriteLoaded: false,
  statusCode: null
};

const main = (state = initialState, action) => {
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
        activeOffer: action.payload,
      };
    case ActionType.SET_STATE_SORT:
      return {
        ...state,
        stateSort: action.payload
      };
    case ActionType.SET_FAVORITE_HOTEL:
      return {
        ...state,
        hotels: action.payload,
        isFavoriteLoaded: false
      };
    case ActionType.SET_STATUS_CODE:
      return {
        ...state,
        statusCode: action.payload
      };
    default:
      return {...state};
  }
};

export {main};
