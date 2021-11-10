import React from "react";
import FilterPanel from "../characters/FilterPanel";
import PaginationRounded from "../characters/Pagination";
import ListEpisodes from "./ListEpisodes";

const Characters = () => {
  const filterFields = {
    Name: "name",
    Episode: "episode",
  };
  return (
    <>
      <FilterPanel filterFields={filterFields} />
      <ListEpisodes />
      <PaginationRounded count={Math.round(20 / 10)} />
    </>
  );
};
export default Characters;
