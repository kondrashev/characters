import React, { useContext } from "react";
import ListCharacters from "./ListCharacters";
import PaginationRounded from "./Pagination";
import { ApplictationContext } from "../../index";
import FilterPanel from "./FilterPanel";

const Characters = () => {
  const { values, setValues } = useContext(ApplictationContext);
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
      <PaginationRounded />
    </>
  );
};
export default Characters;
