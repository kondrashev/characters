import { LOAD_CHARACTERS_DATA_SUCCESS } from "./action";

export const charactersReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_CHARACTERS_DATA_SUCCESS:
      return action.characters;
    default:
      return state;
  }
};
