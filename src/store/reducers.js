import { combineReducers } from "redux";
import { charactersReducer } from "./characters/reducer";
import { episodesReducer } from "./episodes/reducer";

export default combineReducers({
  charactersReducer,
  episodesReducer,
});
