import {getHotelsByCity} from '../utils/utils';

export const ActionType = {
  CITY_CHANGE: `main/cityChange`,
  FILL_LIST: `main/fillList`,
  SET_OFFERS_COUNT: 'main/setOffersCount'
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
  })
};
