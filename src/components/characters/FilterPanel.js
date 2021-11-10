import React, { useContext } from "react";
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
  let filterKeys = [];
  let filterKey = "";
  let filterValues = [];
  let makeURL = [];
  const handleChangeCheckBox = (event) => {
    if (event.target.checked) {
      filterKeys.push(event.target.value);
      document.querySelector(`#${event.target.value}`).disabled = false;
      document.querySelector(`#${event.target.value}`).focus();
    } else {
      filterKeys = filterKeys.filter((item) => item !== event.target.value);
      document.querySelector(`#${event.target.value}`).disabled = true;
      filterValues = filterValues.filter(
        (item) =>
          item !== document.querySelector(`#${event.target.value}`).value
      );
      document.querySelector(`#${event.target.value}`).value = "";
    }
  };
  const handleChangeInput = (event) => {
    filterKey = event.target.value;
  };
  const rememberFields = (event) => {
    filterValues.push(filterKey);
  };
  const getURL = () => {
    let url = "";
    makeURL = [];
    filterKeys.forEach((item, index) => {
      if (filterKeys.length === 1) {
        makeURL.push(`?${item}=${filterValues[index]}`);
      } else {
        makeURL.push(`&${item}=${filterValues[index]}`);
      }
    });
    url = makeURL.join("");
    if (url.indexOf("&") !== -1) {
      url = `?${url.substr(1)}`;
    }
    setValues({
      ...values,
      urlCharacters: `https://rickandmortyapi.com/api/character/${url}`,
    });
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
