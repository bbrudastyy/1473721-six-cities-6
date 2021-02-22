import {randomInteger, randomItem} from '../utils/utils';

const AVATAR_URL = `https://i.pravatar.cc/128`;

const DefaultValues = {
  MIN_RANDOM_BERDOOMS: 0,
  MAX_RANDOM_BERDOOMS: 6,
  MIN_LOCATION_X: 52,
  MAX_LOCATION_X: 52,
  MIN_LOCATION_Y: 4,
  MAX_LOCATION_Y: 4,
  MIN_LOCATION_TENTH_X: 369553943508,
  MAX_LOCATION_TENTH_X: 3909553943508,
  MIN_LOCATION_TENTH_Y: 85309666406198,
  MAX_LOCATION_TENTH_Y: 939309666406198,
  MIN_ZOOM: 1,
  MAX_ZOOM: 10,
  MIN: 0,
  MAX: 1000,
  MAX_PRO: 1,
  MAX_PRICE: 250,
  MAX_ADULTS: 5,
  MAX_RATING: 5,
  MAX_RATING_TENTH: 9,
  MAX_FOR_PHOTO: 3,
  MAX_RANDOM_PHOTO: 6,
  MIN_FOR_PHOTO: 1,
  OFFERS_COUNT: 4,
};

const idsHotels = [1, 2, 3, 4, 5, 6];
const idsComments = [1, 1, 1, 2, 4, 2, 4, 6, 6, 3, 3, 5];

export const citesNames = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const descriptions = [`A quiet`, `cozy and picturesque`, `that hides`, `behind a river`, `by the unique lightness`];
const type = [`apartment`, `room`, `house`, `hotel`];
const goods = [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cable TV`];
const names = [`Bogdan`, `Vladislav`, `Anna`, `Valeria`, `Anton`, `Igor`, `Kate`];

const getBeddrooms = () => randomInteger(DefaultValues.MIN_RANDOM_BERDOOMS, DefaultValues.MAX_RANDOM_BERDOOMS);
const getCoordinatesX = () => Number(`${randomInteger(DefaultValues.MIN_LOCATION_X, DefaultValues.MAX_LOCATION_X)}.${randomInteger(DefaultValues.MIN_LOCATION_TENTH_X, DefaultValues.MAX_LOCATION_TENTH_X)}`);
const getCoordinatesY = () => Number(`${randomInteger(DefaultValues.MIN_LOCATION_Y, DefaultValues.MAX_LOCATION_Y)}.${randomInteger(DefaultValues.MIN_LOCATION_TENTH_Y, DefaultValues.MAX_LOCATION_TENTH_Y)}`);
const getZoom = () => randomInteger(DefaultValues.MIN_ZOOM, DefaultValues.MAX_ZOOM);
// const getCityName = () => randomItem(cityName, DefaultValues.MIN);
const getDescription = () => descriptions[randomInteger(DefaultValues.MIN, descriptions.length - 1)];
const getType = () => randomItem(type, DefaultValues.MIN);
const getNames = () => randomItem(names, DefaultValues.MIN);
const getPrice = () => randomInteger(DefaultValues.MIN, DefaultValues.MAX_PRICE);
const getAdults = () => randomInteger(DefaultValues.MIN, DefaultValues.MAX_ADULTS);
const getPreviewPhoto = () => `img/apartment-0${randomInteger(DefaultValues.MIN_FOR_PHOTO, DefaultValues.MAX_FOR_PHOTO)}.jpg`;
// const getRandomDate = () => formDate(`${randomInteger(DefaultValues.MIN_YEAR_VALUE, DefaultValues.MAX_YEAR_VALUE)}-${randomInteger(DefaultValues.MIN_MONTH_VALUE, DefaultValues.MAX_MONTH_VALUE)}-${randomInteger(DefaultValues.MIN_DAY_VALUE, DefaultValues.MAX_DAY_VALUE)}-${randomInteger(DefaultValues.MIN_HOUR_VALUE, DefaultValues.MAX_HOUR_VALUE)}:${getRandomInteger(DefaultValues.MIN_MINUTE_VALUE, DefaultValues.MAX_MINUTE_VALUE)}`, `DD/MM/YY HH:mm`);
const getRating = () => {
  const rating = Number(`${randomInteger(DefaultValues.MIN, DefaultValues.MAX_RATING)}.${randomInteger(DefaultValues.MIN, DefaultValues.MAX_RATING_TENTH)}`);
  if (rating > DefaultValues.MAX_RATING) {
    return DefaultValues.MAX_RATING;
  } else {
    return rating;
  }
};

const getGoods = () => {
  const count = randomInteger(DefaultValues.MIN, goods.length);
  const result = [];
  for (let i = DefaultValues.MIN; i < count; i++) {
    result.push(goods[randomInteger(DefaultValues.MIN, goods.length - 1)]);
  }
  return result;
};

const getState = () => {
  if (randomInteger(DefaultValues.MIN, DefaultValues.MAX_PRO) === DefaultValues.MAX_PRO) {
    return true;
  } else {
    return false;
  }
};

const getOfferPhoto = () => {
  const photos = [];
  for (let i = 0; i < randomInteger(DefaultValues.MIN, DefaultValues.MAX_RANDOM_PHOTO); i++) {
    photos.push(`img/apartment-0${randomInteger(DefaultValues.MIN + 1, DefaultValues.MAX_FOR_PHOTO - 1)}.jpg`);
  }
  return photos;
};

const getHotel = (id) => {
  return {
    bedrooms: getBeddrooms(),
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: getZoom()
      },
      // name: getCityName()
      name: `Amsterdam`
    },
    description: getDescription(),
    goods: getGoods(),
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: new Date() * Math.random(),
      isPro: getState(),
      name: getNames()
    },
    id,
    images: getOfferPhoto(),
    isFavorite: getState(),
    isPremium: getState(),
    location: {
      latitude: getCoordinatesX(),
      longitude: getCoordinatesY(),
      zoom: getZoom()
    },
    maxAdults: getAdults(),
    previewImage: getPreviewPhoto(),
    price: getPrice(),
    rating: getRating(),
    title: `Beautiful & luxurious studio at great ${id}`,
    type: getType()
  };
};

const getComment = (id) => {
  return {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam ${id}.`,
    date: `2019-05-08T14:13:56.569Z`,
    id,
    rating: getRating(),
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: new Date() * Math.random(),
      isPro: getState(),
      name: getNames()
    }
  };
};

export const getHotelsMocks = () => {
  return idsHotels.map((id) => getHotel(id));
};

export const getCommentsMocks = () => {
  return idsComments.map((id) => getComment(id));
};
