import {ActionType} from './action';
import {hotels} from '../mocks/offers';
import {getHotelsByCity, CitesNames, TypeSort} from '../utils/utils';

const offers = getHotelsByCity(hotels, CitesNames.PARIS);

const initialState = {
  city: CitesNames.PARIS,
  offersList: offers,
  offersCount: offers.length,
  typeSort: TypeSort.POPULAR,
  activeOffer: {id: -1},
  stateSort: false
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
    default:
      return {...state};
  }
};

export {reducer};
