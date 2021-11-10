import React, { useContext, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { ApplictationContext } from "../../index";
import { useDispatch, useSelector } from "react-redux";
import { loadCharactersFetchData } from "../../store/characters/action";
import CardCharacter from "./CardCharacter";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    marginTop: "10px",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%,0)",
  },
  title: {
    marginLeft: "36%",
    fontSize: "20px",
  },
});
export default function ListCharacters() {
  const classes = useStyles();
  const { values } = useContext(ApplictationContext);
  const dispatch = useDispatch();
  const getCharacters = (data) => dispatch(loadCharactersFetchData(data));
  const listCharacters = useSelector((state) => state.charactersReducer);
  const pagination = (step) => {
    const page = [];
    for (let i = 1; i <= 10; i++) {
      page.push(step > 1 ? `${step - 1}${i}` : `${i}`);
    }
    if (step > 1) page[9] = parseInt(page[8]) + 1;
    page.join(",");
    return page;
  };
  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${pagination(
      values.numberPage
    )}`;
    getCharacters(url);
  }, [values.numberPage]);
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>List characters</Typography>
      <List>
        {listCharacters?.map((item) => (
          <ListItem key={item.id}>
            <CardCharacter item={item} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
