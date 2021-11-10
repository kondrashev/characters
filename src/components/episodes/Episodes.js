import React from "react";
import FilterPanel from "../characters/FilterPanel";

const Characters = () => {
  const filterFields = {
    Name: "name",
    Episode: "episode",
  };
  return (
    <>
      <FilterPanel filterFields={filterFields} />
    </>
  );
};
export default Characters;
