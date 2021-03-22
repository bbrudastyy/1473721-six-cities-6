import {createReducer} from '@reduxjs/toolkit';
import {CitesNames, SortType} from '../../utils/utils';
import {changeCity, fillList, fillSortList, setActiveOffer, setDefaultOffer, setFavoriteHotel, setOffersCount, setSortType, setStateSort, setStatusCode} from '../action';

const initialState = {
  city: CitesNames.PARIS,
  offersList: [],
  offersCount: null,
  typeSort: SortType.POPULAR,
  activeOffer: {id: -1},
  stateSort: false,
  hotels: [],
  isFavoriteLoaded: false,
  statusCode: null
};

const main = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(fillList, (state, action) => {
    state.offersList = action.payload;
  });
  builder.addCase(setOffersCount, (state, action) => {
    state.offersCount = action.payload;
  });
  builder.addCase(setSortType, (state, action) => {
    state.typeSort = action.payload;
  });
  builder.addCase(fillSortList, (state, action) => {
    state.offersList = action.payload;
  });
  builder.addCase(setActiveOffer, (state, action) => {
    state.activeOffer = action.payload;
  });
  builder.addCase(setDefaultOffer, (state, action) => {
    state.activeOffer = action.payload;
  });
  builder.addCase(setStateSort, (state, action) => {
    state.stateSort = action.payload;
  });
  builder.addCase(setFavoriteHotel, (state, action) => {
    state.hotels = action.payload;
    state.isFavoriteLoaded = false;
  });
  builder.addCase(setStatusCode, (state, action) => {
    state.statusCode = action.payload;
  });
});

export {main};
