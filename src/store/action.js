import {changeHotel, getHotelsByCity, getSortHotels} from '../utils/utils';
import {adaptToClientHotel, adaptToClientComment} from './api-actions';
import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CITY_CHANGE: `main/cityChange`,
  FILL_LIST: `main/fillList`,
  SET_OFFERS_COUNT: `main/setOffersCount`,
  SET_SORT_TYPE: `main/setSortType`,
  FILL_SORT_LIST: `main/fillSortList`,
  SET_ACTIVE_OFFER: `main/setActiveOffer`,
  SET_DEFAULT_OFFER: `main/setDefaultOffer`,
  SET_STATE_SORT: `main/setStateSort`,
  LOAD_HOTELS: `data/loadHotels`,
  LOAD_FAVORITE_HOTELS: `data/loadFavoriteHotels`,
  LOAD_NEAR_HOTELS: `data/loadNearHotels`,
  LOAD_COMMENTS: `data/loadComments`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_LOGIN: `user/setLogin`,
  LOAD_HOTEL: `main/loadHotel`,
  SET_DEFAULT_STATE_LOAD: `data/setDefaultStateLoad`,
  SET_FAVORITE_HOTEL: `main/setFavoriteHotel`,
  SET_STATUS_CODE: `main/setStatusCode`
};

export const changeCity = createAction(ActionType.CITY_CHANGE, (cityName) => {
  return {
    payload: cityName
  };
});
export const fillList = createAction(ActionType.FILL_LIST, (cityName, hotels) => {
  return {
    payload: getHotelsByCity(hotels, cityName)
  };
});
export const setOffersCount = createAction(ActionType.SET_OFFERS_COUNT, (cityName, hotels) => {
  return {
    payload: getHotelsByCity(hotels, cityName).length
  };
});
export const setSortType = createAction(ActionType.SET_SORT_TYPE, (sortType) => {
  return {
    payload: sortType
  };
});
export const fillSortList = createAction(ActionType.FILL_SORT_LIST, (hotels, sortType, cityName) => {
  return {
    payload: getSortHotels(hotels, sortType, cityName)
  };
});
export const setActiveOffer = createAction(ActionType.SET_ACTIVE_OFFER, (offer) => {
  return {
    payload: offer
  };
});
export const setDefaultOffer = createAction(ActionType.SET_DEFAULT_OFFER, () => {
  return {
    payload: {id: -1}
  };
});
export const setStateSort = createAction(ActionType.SET_STATE_SORT, (sortState) => {
  return {
    payload: !sortState,
  };
});
export const loadHotels = createAction(ActionType.LOAD_HOTELS, (hotels) => {
  return {
    payload: hotels.map((hotel) => adaptToClientHotel(hotel))
  };
});
export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status,
  };
});
export const setStatusCode = createAction(ActionType.SET_STATUS_CODE, (status) => {
  return {
    payload: status
  };
});
export const loadFavoriteList = createAction(ActionType.LOAD_FAVORITE_HOTELS, (hotels) => {
  return {
    payload: hotels.map((hotel) => adaptToClientHotel(hotel))
  };
});
export const setLogin = createAction(ActionType.SET_LOGIN, (loginName) => {
  return {
    payload: loginName
  };
});
export const loadHotel = createAction(ActionType.LOAD_HOTEL, (hotel) => {
  return {
    payload: adaptToClientHotel(hotel)
  };
});
export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => {
  return {
    payload: comments.map((comment) => adaptToClientComment(comment))
  };
});
export const loadNearHotels = createAction(ActionType.LOAD_NEAR_HOTELS, (hotels) => {
  return {
    payload: hotels.map((hotel) => adaptToClientHotel(hotel))
  };
});
export const setDefaultStateLoad = createAction(ActionType.SET_DEFAULT_STATE_LOAD, () => {
  return {
  };
});
export const setFavoriteHotel = createAction(ActionType.SET_FAVORITE_HOTEL, (hotel, hotels) => {
  return {
    payload: changeHotel(hotels, hotel)
  };
});
// import {changeHotel, getHotelsByCity, getSortHotels} from '../utils/utils';
// import {adaptToClientHotel, adaptToClientComment} from './api-actions';
// import {createAction} from '@reduxjs/toolkit';

// export const ActionType = {
//   CITY_CHANGE: `main/cityChange`,
//   FILL_LIST: `main/fillList`,
//   SET_OFFERS_COUNT: `main/setOffersCount`,
//   SET_SORT_TYPE: `main/setSortType`,
//   FILL_SORT_LIST: `main/fillSortList`,
//   SET_ACTIVE_OFFER: `main/setActiveOffer`,
//   SET_DEFAULT_OFFER: `main/setDefaultOffer`,
//   SET_STATE_SORT: `main/setStateSort`,
//   LOAD_HOTELS: `data/loadHotels`,
//   LOAD_FAVORITE_HOTELS: `data/loadFavoriteHotels`,
//   LOAD_NEAR_HOTELS: `data/loadNearHotels`,
//   LOAD_COMMENTS: `data/loadComments`,
//   REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
//   SET_LOGIN: `user/setLogin`,
//   LOAD_HOTEL: `main/loadHotel`,
//   SET_DEFAULT_STATE_LOAD: `data/setDefaultStateLoad`,
//   SET_FAVORITE_HOTEL: `main/setFavoriteHotel`,
//   SET_STATUS_CODE: `main/setStatusCode`
// };

// export const ActionCreator = {
//   // changeCity: (cityName) => ({
//   //   type: ActionType.CITY_CHANGE,
//   //   payload: cityName
//   // }),
//   changeCity: createAction(ActionType.CITY_CHANGE, (cityName) => {
//     return {
//       payload: cityName
//     };
//   }),
//   fillList: (cityName, hotels) => ({
//     type: ActionType.FILL_LIST,
//     payload: getHotelsByCity(hotels, cityName)
//   }),
//   setOffersCount: (cityName, hotels) => ({
//     type: ActionType.SET_OFFERS_COUNT,
//     payload: getHotelsByCity(hotels, cityName).length
//   }),
//   setSortType: (sortType) => ({
//     type: ActionType.SET_SORT_TYPE,
//     payload: sortType
//   }),
//   fillSortList: (hotels, sortType, cityName) => ({
//     type: ActionType.FILL_SORT_LIST,
//     payload: getSortHotels(hotels, sortType, cityName)
//   }),
//   setActiveOffer: (offer) => ({
//     type: ActionType.SET_ACTIVE_OFFER,
//     payload: offer
//   }),
//   setDefaultOffer: () => ({
//     type: ActionType.SET_DEFAULT_OFFER,
//     payload: {id: -1}
//   }),
//   setStateSort: (sortState) => ({
//     type: ActionType.SET_STATE_SORT,
//     payload: !sortState,
//   }),
//   loadHotels: (hotels) => ({
//     type: ActionType.LOAD_HOTELS,
//     payload: hotels.map((hotel) => adaptToClientHotel(hotel))
//   }),
//   requireAuthorization: (status) => ({
//     type: ActionType.REQUIRED_AUTHORIZATION,
//     payload: status,
//   }),
//   setStatusCode: (status) => ({
//     type: ActionType.SET_STATUS_CODE,
//     payload: status
//   }),
//   loadFavoriteList: (hotels) => ({
//     type: ActionType.LOAD_FAVORITE_HOTELS,
//     payload: hotels.map((hotel) => adaptToClientHotel(hotel))
//   }),
//   setLogin: (loginName) => ({
//     type: ActionType.SET_LOGIN,
//     payload: loginName
//   }),
//   loadHotel: (hotel) => ({
//     type: ActionType.LOAD_HOTEL,
//     payload: adaptToClientHotel(hotel)
//   }),
//   loadComments: (comments) => ({
//     type: ActionType.LOAD_COMMENTS,
//     payload: comments.map((comment) => adaptToClientComment(comment))
//   }),
//   loadNearHotels: (hotels) => ({
//     type: ActionType.LOAD_NEAR_HOTELS,
//     payload: hotels.map((hotel) => adaptToClientHotel(hotel))
//   }),
//   setDefaultStateLoad: () => ({
//     type: ActionType.SET_DEFAULT_STATE_LOAD
//   }),
//   setFavoriteHotel: (hotel, hotels) => ({
//     type: ActionType.SET_FAVORITE_HOTEL,
//     payload: changeHotel(hotels, hotel)
//   })
// };
