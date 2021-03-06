import React from "react";
import ListCharacters from "./ListCharacters";
import PaginationRounded from "./Pagination";
import FilterPanel from "./FilterPanel";

const Characters = () => {
  const filterFields = {
    Name: "name",
    Status: "status",
    Species: "species",
    Type: "type",
    Gender: "gender",
  };
  return (
    <>
      <FilterPanel filterFields={filterFields} />
      <ListCharacters />
      <PaginationRounded count={Math.round(826 / 10)} />
    </>
  );
};
export default Characters;
