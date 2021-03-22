import dayjs from 'dayjs';

const RATING_ZERO = 0;
const NUMBER_FOR_RATING = 20;
const VALUE_FOR_SPLICE = 1;

export const TypeCard = {
  MAIN: `cities__place`,
  FAVORITE: `favorites`,
  NEAR: `near-places`
};

export const TypeMap = {
  CITIES: `cities`,
  PROPERTY: `property`
};

export const TypeSort = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

export const CitesNames = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const getRatingWidth = (rating) => {
  const width = `0%`;
  const rank = Number(rating.toFixed(0));
  if (rank !== RATING_ZERO) {
    return `${rank * NUMBER_FOR_RATING}%`;
  } else {
    return width;
  }
};

export const getSortHotels = (hotels, sortType, cityName) => {
  const hotelsDefault = getHotelsByCity(hotels, cityName);
  const hotelsCopy = hotelsDefault.slice();
  switch (sortType) {
    case TypeSort.POPULAR:
      return hotelsDefault;
    case TypeSort.LOW_TO_HIGH:
      return hotelsCopy.sort(sortLowToHight);
    case TypeSort.HIGH_TO_LOW:
      return hotelsCopy.sort(sortHighToLow);
    case TypeSort.TOP_RATED:
      return hotelsCopy.sort(sortTopRated);
    default:
      return hotelsDefault;
  }
};

const sortLowToHight = (pointA, pointB) => pointA.price - pointB.price;
const sortHighToLow = (pointA, pointB) => pointB.price - pointA.price;
const sortTopRated = (pointA, pointB) => pointB.rating - pointA.rating;

export const getHotelsByCity = (hotels, cityName) => hotels.filter((hotel) => hotel.city.name === cityName);
export const randomItem = (elements, min) => elements[randomInteger(min, elements.length - 1)];
export const formDate = (value, format) => dayjs(value).format(format);

export const changeHotel = (hotels, hotel) => {
  let itemNumber = null;
  hotels = hotels.slice();
  hotels.forEach((currentValue, index) => {
    if (currentValue.id === hotel.id) {
      itemNumber = index;
    }
  });
  hotels.splice(itemNumber, VALUE_FOR_SPLICE, hotel);

  return hotels;
};
