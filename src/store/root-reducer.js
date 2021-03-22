import {combineReducers} from 'redux';
import {data} from './data/data';
import {user} from './user/user';
import {main} from './main/main';

export const NameSpace = {
  DATA: `DATA`,
  MAIN: `MAIN`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.MAIN]: main,
  [NameSpace.USER]: user,
});
