import {NameSpace} from '../root-reducer';

export const getCity = (state) => state[NameSpace.MAIN].city;
export const getOffersList = (state) => state[NameSpace.MAIN].offersList;
export const getOffersCount = (state) => state[NameSpace.MAIN].offersCount;
export const getTypeSort = (state) => state[NameSpace.MAIN].typeSort;
export const getActiveOffer = (state) => state[NameSpace.MAIN].activeOffer;
export const getStateSort = (state) => state[NameSpace.MAIN].stateSort;
export const getStatusCode = (state) => state[NameSpace.MAIN].statusCode;
