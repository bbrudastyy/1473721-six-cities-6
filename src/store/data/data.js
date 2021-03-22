import {ActionType} from '../action';

const initialState = {
  favoriteList: [],
  hotels: [],
  nearHotels: [],
  comments: [],
  isHotelLoaded: false,
  isCommentsLoaded: false,
  isNearLoaded: false,
  isFavoriteLoaded: false,
  hotel: null,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        hotels: action.payload
      };
    case ActionType.LOAD_FAVORITE_HOTELS:
      return {
        ...state,
        favoriteList: action.payload,
        isFavoriteLoaded: true
      };
    case ActionType.LOAD_HOTEL:
      return {
        ...state,
        hotel: action.payload,
        isHotelLoaded: true
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true
      };
    case ActionType.LOAD_NEAR_HOTELS:
      return {
        ...state,
        nearHotels: action.payload,
        isNearLoaded: true
      };
    case ActionType.SET_DEFAULT_STATE_LOAD:
      return {
        ...state,
        isNearLoaded: false,
        isCommentsLoaded: false,
        isHotelLoaded: false
      };
    default:
      return {...state};
  }
};

export {data};
