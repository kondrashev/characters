import React, { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
import { ApplictationContext } from "../../index";

const useStyles = makeStyles({
  pagination: {
    position: "fixed",
    bottom: "0px",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
});
export default function PaginationRounded() {
  const classes = useStyles();
  const { values, setValues } = useContext(ApplictationContext);
  const pagination = (step) => {
    const page = [];
    for (let i = 1; i <= 10; i++) {
      page.push(step > 1 ? `${step - 1}${i}` : `${i}`);
    }
    if (step > 1) page[9] = parseInt(page[8]) + 1;
    page.join(",");
    return page;
  };
  const handleChange = (event, value) => {
    if (event.target.value !== undefined) {
      setValues({
        ...values,
        urlCharacters: `https://rickandmortyapi.com/api/character/${pagination(
          value
        )}`,
      });
    }
  };
  return (
    <Pagination
      count={Math.round(826 / 10)}
      variant="outlined"
      shape="rounded"
      onChange={handleChange}
      className={classes.pagination}
    />
  );
}
