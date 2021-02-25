import {ActionType} from './action';
import {hotels} from '../mocks/offers';
import {getHotelsByCity} from '../utils/utils';

const offers = getHotelsByCity(hotels, `Paris`);

const initialState = {
  city: `Paris`,
  offersList: offers,
  offersCount: offers.length
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
    default:
      return {...state};
  }
};

export {reducer};
