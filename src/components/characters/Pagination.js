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
  const handleChange = (event, value) => {
    if (event.target.value !== undefined) {
      setValues({ ...values, numberPage: value });
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
