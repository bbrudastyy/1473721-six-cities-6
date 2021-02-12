import dayjs from 'dayjs';

const RATING_ZERO = 0;
const NUMBER_FOR_RATING = 20;

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

export const formDate = (value, format) => dayjs(value).format(format);
