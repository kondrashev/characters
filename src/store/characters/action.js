export const LOAD_CHARACTERS_DATA_SUCCESS = "LOAD_CHARACTERS_DATA_SUCCESS";

const loadCharactersFetchDataSuccess = (characters) => {
  return {
    type: LOAD_CHARACTERS_DATA_SUCCESS,
    characters,
  };
};
export const loadCharactersFetchData = (url) => async (dispatch) => {
  let response = await fetch(url);
  if (response.status === 200) {
    response = await response.json();
    dispatch(loadCharactersFetchDataSuccess(response));
  } else {
    console.log({ message: "Error!!!" });
  }
};
