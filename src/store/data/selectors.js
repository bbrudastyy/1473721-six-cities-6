import {NameSpace} from '../root-reducer';

export const getFavoriteList = (state) => state[NameSpace.DATA].favoriteList;
export const getHotels = (state) => state[NameSpace.DATA].hotels;
export const getNearHotels = (state) => state[NameSpace.DATA].nearHotels;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getIsHotelLoaded = (state) => state[NameSpace.DATA].isHotelLoaded;
export const getIsCommentsLoaded = (state) => state[NameSpace.DATA].isCommentsLoaded;
export const getIsNearLoaded = (state) => state[NameSpace.DATA].isNearLoaded;
export const getIsFavoriteLoaded = (state) => state[NameSpace.DATA].isFavoriteLoaded;
export const getHotel = (state) => state[NameSpace.DATA].hotel;
