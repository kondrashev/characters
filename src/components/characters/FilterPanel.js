import React, { useContext, useRef } from "react";
import { makeStyles } from "@mui/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { ApplictationContext } from "../../index";

const useStyles = makeStyles({
  panelFilter: {
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "#E4E5E4",
  },
  input: {
    width: "150px",
    height: "20px",
  },
});
const FilterPanel = (props) => {
  const classes = useStyles();
  const { filterFields } = props;
  const { values, setValues } = useContext(ApplictationContext);
  let byFilter = [];
  const handleChangeCheckBox = (event) => {
    if (event.target.checked) {
      byFilter.push(event.target.value);
      document.querySelector(`#${event.target.value}`).disabled = false;
      document.querySelector(`#${event.target.value}`).focus();
    } else {
      byFilter = byFilter.filter((item) => item !== event.target.value);
      document.querySelector(`#${event.target.value}`).disabled = true;
      document.querySelector(`#${event.target.value}`).value = "";
    }
  };
  let field = "";
  const handleChangeInput = (event) => {
    field = event.target.value;
  };
  const rememberFields = (event) => {
    console.log(field);
  };
  const getURL = () => {
    const newByFilter = byFilter.map((item) => {});
    // console.log(byFilter);
  };
  const setFields = Object.entries(filterFields).map(([key, value]) => {
    return (
      <>
        <FormControlLabel
          control={<Checkbox value={value} onChange={handleChangeCheckBox} />}
          label={key}
        />
        <input
          className={classes.input}
          disabled={true}
          id={value}
          onChange={handleChangeInput}
          onBlur={rememberFields}
        />
      </>
    );
  });
  return (
    <FormGroup className={classes.panelFilter}>
      {setFields}
      <Button variant="contained" onClick={getURL}>
        Filter
      </Button>
    </FormGroup>
  );
};
export default FilterPanel;
