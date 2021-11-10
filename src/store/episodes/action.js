export const LOAD_EPISODES_DATA_SUCCESS = "LOAD_EPISODES_DATA_SUCCESS";

const loadEpisodesFetchDataSuccess = (episodes) => {
  return {
    type: LOAD_EPISODES_DATA_SUCCESS,
    episodes,
  };
};
export const loadEpisodesFetchData = (url) => async (dispatch) => {
  let response = await fetch(url);
  if (response.status === 200) {
    response = await response.json();
    dispatch(loadEpisodesFetchDataSuccess(response));
  } else {
    console.log({ message: "Error!!!" });
  }
};
