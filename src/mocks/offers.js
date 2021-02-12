import {randomInteger} from '../utils/utils';

const AVATAR_URL = `https://i.pravatar.cc/128`;

const DefaultValues = {
  MIN_RANDOM_BERDOOMS: 0,
  MAX_RANDOM_BERDOOMS: 6,
  MIN_LOCATION: 1,
  MAX_LOCATION: 100,
  MIN_LOCATION_TENTH: 0,
  MAX_LOCATION_TENTH: 9,
  MIN_ZOOM: 1,
  MAX_ZOOM: 10,
  MIN: 0,
  MAX: 1000000,
  MAX_PRO: 1,
  MAX_PRICE: 250,
  MAX_ADULTS: 5,
  MAX_RATING: 5,
  MAX_RATING_TENTH: 9,
  MAX_FOR_PHOTO: 3,
  MAX_RANDOM_PHOTO: 6,
  MIN_FOR_PHOTO: 1
};

const cityName = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const descriptions = [`A quiet`, `cozy and picturesque`, `that hides`, `behind a river`, `by the unique lightness`];
const type = [`apartment`, `room`, `house`, `hotel`];
const goods = [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cable TV`];
const names = [`Bogdan`, `Vladislav`, `Anna`, `Valeria`, `Anton`, `Igor`, `Kate`];

const getBeddrooms = () => randomInteger(DefaultValues.MIN_RANDOM_BERDOOMS, DefaultValues.MAX_RANDOM_BERDOOMS);
const getCoordinates = () => Number(`${randomInteger(DefaultValues.MIN_LOCATION, DefaultValues.MAX_LOCATION)}.${randomInteger(DefaultValues.MIN_LOCATION_TENTH, DefaultValues.MAX_LOCATION_TENTH)}70216`);
const getZoom = () => randomInteger(DefaultValues.MIN_ZOOM, DefaultValues.MAX_ZOOM);
const getCityName = () => cityName[randomInteger(DefaultValues.MIN, cityName.length - 1)];
const getDescription = () => descriptions[randomInteger(DefaultValues.MIN, descriptions.length - 1)];
const getType = () => type[randomInteger(DefaultValues.MIN, type.length - 1)];
const getNames = () => names[randomInteger(DefaultValues.MIN, names.length - 1)];
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
    photos.push(`img/apartment-0${randomInteger(DefaultValues.MIN, DefaultValues.MAX_FOR_PHOTO)}.jpg`);
  }
  return photos;
};

export const getHotel = () => {
  return {
    bedrooms: getBeddrooms(),
    city: {
      location: {
        latitude: getCoordinates(),
        longitude: getCoordinates(),
        zoom: getZoom()
      },
      name: getCityName()
    },
    description: getDescription(),
    goods: getGoods(),
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: new Date() * Math.random(),
      isPro: getState(),
      name: getNames()
    },
    id: new Date() * randomInteger(DefaultValues.MIN, DefaultValues.MAX),
    images: getOfferPhoto(),
    isFavorite: getState(),
    isPremium: getState(),
    location: {
      latitude: getCoordinates(),
      longitude: getCoordinates(),
      zoom: getZoom()
    },
    maxAdults: getAdults(),
    previewImage: getPreviewPhoto(),
    price: getPrice(),
    rating: getRating(),
    title: `Beautiful & luxurious studio at great ${randomInteger(DefaultValues.MIN, DefaultValues.MAX_ZOOM)}`,
    type: getType()
  };
};

export const getComment = () => {
  return {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: new Date() * Math.random(),
    rating: getRating(),
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: new Date() * Math.random(),
      isPro: getState(),
      name: getNames()
    }
  };
};

export const hotels = [
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 4.770216,
        longitude: 89.470216,
        zoom: 7
      },
      name: `Paris`
    },
    description: `behind a river`,
    goods: [],
    host: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=0.033312216572948694`,
      id: 1,
      isPro: true,
      name: `Anna`
    },
    id: 1,
    images: [`img/apartment-00.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 37.970216,
      longitude: 93.770216,
      zoom: 1
    },
    maxAdults: 5,
    previewImage: `img/apartment-01.jpg`,
    price: 144,
    rating: 4,
    title: `Beautiful & luxurious studio at great 1`,
    type: `room`
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 77.270216,
        longitude: 16.970216,
        zoom: 6
      },
      name: `Hamburg`
    },
    description: `behind a river`,
    goods: [`Cable TV`, `Cable TV`, `Washing machine`, `Baby seat`, `Dishwasher`, `Heating`, `Coffee machine`],
    host: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=0.29233397501769176`,
      id: 461769376997.02905,
      isPro: false,
      name: `Anton`,
    },
    id: 2,
    images: [`img/apartment-01.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 98.670216,
      longitude: 47.170216,
      zoom: 2
    },
    maxAdults: 1,
    previewImage: `img/apartment-02.jpg`,
    price: 173,
    rating: 5,
    title: `Beautiful & luxurious studio at great 2`,
    type: `house`
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 51.670216,
        longitude: 68.270216,
        zoom: 6
      },
      name: `"Hamburg"`
    },
    description: `behind a river`,
    goods: [`Heating`, `Coffee machine`],
    host: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=0.87490858298801446`,
      id: 461769376997.02905,
      isPro: true,
      name: `Vladislav`,
    },
    id: 3,
    images: [`img/apartment-03.jpg`, `img/apartment-02.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 16.170216,
      longitude: 15.070216,
      zoom: 7
    },
    maxAdults: 4,
    previewImage: `img/apartment-01.jpg`,
    price: 62,
    rating: 0.7,
    title: `Beautiful & luxurious studio at great 3`,
    type: `apartment`
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 53.970216,
        longitude: 87.170216,
        zoom: 10
      },
      name: `Hamburg`
    },
    description: `that hides`,
    goods: [],
    host: {
      avatarUrl: `https://i.pravatar.cc/128?rnd=0.7788740280691532`,
      id: 461769376997.02905,
      isPro: false,
      name: `Bogdan`,
    },
    id: 4,
    images: [`img/apartment-03.jpg`, `img/apartment-02.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 11.270216,
      longitude: 73.770216,
      zoom: 9
    },
    maxAdults: 5,
    previewImage: `img/apartment-03.jpg`,
    price: 102,
    rating: 4.5,
    title: `Beautiful & luxurious studio at great 4`,
    type: `room`
  }
];

export const comments = [
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: getRating(),
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: getState(),
      name: getNames()
    }
  },
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: getRating(),
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: getState(),
      name: getNames()
    }
  },
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: getRating(),
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: getState(),
      name: getNames()
    }
  },
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 2,
    rating: getRating(),
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: getState(),
      name: getNames()
    }
  },
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 3,
    rating: getRating(),
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: getState(),
      name: getNames()
    }
  },
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 3,
    rating: getRating(),
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: getState(),
      name: getNames()
    }
  },
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 4,
    rating: getRating(),
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: getState(),
      name: getNames()
    }
  },
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 4,
    rating: getRating(),
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: getState(),
      name: getNames()
    }
  },
];
