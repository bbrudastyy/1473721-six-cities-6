import {NameSpace} from '../root-reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getLoginName = (state) => state[NameSpace.USER].loginName;
export const getIsDataLoaded = (state) => state[NameSpace.USER].isDataLoaded;
