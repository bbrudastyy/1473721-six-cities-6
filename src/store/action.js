import {getHotelsByCity, getSortHotels} from '../utils/utils';

export const ActionType = {
  CITY_CHANGE: `main/cityChange`,
  FILL_LIST: `main/fillList`,
  SET_OFFERS_COUNT: `main/setOffersCount`,
  SET_SORT_TYPE: `main/setSortType`,
  FILL_SORT_LIST: `main/fillSortList`,
  SET_ACTIVE_OFFER: `main/setActiveOffer`,
  SET_DEFAULT_OFFER: `main/setDefaultOffer`,
  SET_STATE_SORT: `main/setStateSort`
};

export const ActionCreator = {
  changeCity: (cityName) => ({
    type: ActionType.CITY_CHANGE,
    payload: cityName
  }),
  fillList: (cityName, hotels) => ({
    type: ActionType.FILL_LIST,
    payload: getHotelsByCity(hotels, cityName)
  }),
  setOffersCount: (cityName, hotels) => ({
    type: ActionType.SET_OFFERS_COUNT,
    payload: getHotelsByCity(hotels, cityName).length
  }),
  setSortType: (sortType) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: sortType
  }),
  fillSortList: (hotels, sortType, cityName) => ({
    type: ActionType.FILL_SORT_LIST,
    payload: getSortHotels(hotels, sortType, cityName)
  }),
  setActiveOffer: (offer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offer
  }),
  setDefaultOffer: () => ({
    type: ActionType.SET_DEFAULT_OFFER,
    payload: {id: -1}
  }),
  setStateSort: (sortState) => ({
    type: ActionType.SET_STATE_SORT,
    payload: !sortState
  })
};
