import {combineReducers} from "redux";
import {reducer as user} from "./user/user.js";
import {reducer as data} from "./data/data.js";
import {reducer as screen} from "./screen/screen.js";
import {reducer as films} from "./films/films.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.DATA]: data,
  [NameSpace.SCREEN]: screen,
  [NameSpace.FILMS]: films,
});
