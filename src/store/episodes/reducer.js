import { LOAD_EPISODES_DATA_SUCCESS } from "./action";

export const episodesReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_EPISODES_DATA_SUCCESS:
      return action.episodes;
    default:
      return state;
  }
};
