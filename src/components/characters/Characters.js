import React, { useContext, useEffect } from "react";
import ListCharacters from "./ListCharacters";
import PaginationRounded from "./Pagination";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    msFlexDirection: "column",
    justifyContent: "space-between",
  },
});
const Characters = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ListCharacters />
      <PaginationRounded />
    </div>
  );
};
export default Characters;
