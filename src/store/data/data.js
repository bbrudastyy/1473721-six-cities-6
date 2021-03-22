import {createReducer} from '@reduxjs/toolkit';
import {loadComments, loadFavoriteList, loadHotel, loadHotels, loadNearHotels, setDefaultStateLoad} from '../action';

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

const data = createReducer(initialState, (builder) => {
  builder.addCase(loadHotels, (state, action) => {
    state.hotels = action.payload;
  });
  builder.addCase(loadFavoriteList, (state, action) => {
    state.favoriteList = action.payload;
    state.isFavoriteLoaded = true;
  });
  builder.addCase(loadHotel, (state, action) => {
    state.hotel = action.payload;
    state.isHotelLoaded = true;
  });
  builder.addCase(loadComments, (state, action) => {
    state.comments = action.payload;
    state.isCommentsLoaded = true;
  });
  builder.addCase(loadNearHotels, (state, action) => {
    state.nearHotels = action.payload;
    state.isNearLoaded = true;
  });
  builder.addCase(setDefaultStateLoad, (state) => {
    state.isNearLoaded = false;
    state.isCommentsLoaded = false;
    state.isHotelLoaded = false;
  });
});

export {data};
