import React, { useContext, useEffect } from "react";
import FilterPanel from "../characters/FilterPanel";
import { ApplictationContext } from "../../index";
import { useDispatch, useSelector } from "react-redux";
import { loadEpisodesFetchData } from "../../store/episodes/action";
import PaginationRounded from "../characters/Pagination";

const Characters = () => {
  const dispatch = useDispatch();
  const { values } = useContext(ApplictationContext);
  const getEpisodes = (data) => dispatch(loadEpisodesFetchData(data));
  const listEpisodes = useSelector((state) => state.episodesReducer);
  useEffect(() => {
    getEpisodes(values.urlEpisodes);
  }, []);
  console.log(listEpisodes);
  const filterFields = {
    Name: "name",
    Episode: "episode",
  };
  return (
    <>
      <FilterPanel filterFields={filterFields} />
      <PaginationRounded count={Math.round(20 / 10)} />
    </>
  );
};
export default Characters;
