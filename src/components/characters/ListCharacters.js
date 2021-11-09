import React, { useContext, useEffect, useRef } from "react";
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
    marginLeft: "40px",
    fontSize: "20px",
  },
});
export default function ListCharacters() {
  const classes = useStyles();
  const { values, setValues } = useContext(ApplictationContext);
  const dispatch = useDispatch();
  const getCharacters = (data) => dispatch(loadCharactersFetchData(data));
  const listCharacters = useSelector((state) => state.charactersReducer);
  const pagination = [];
  for (let i = 1; i <= 20; i++) {
    pagination.push(i);
  }
  const page = useRef(1);
  let url = `https://rickandmortyapi.com/api/character/${pagination
    .filter((item) => (page.current === 1 ? item < 11 : item > 10))
    .join(",")}`;
  useEffect(() => {
    const data = {
      url,
    };
    getCharacters(data);
  }, [url]);
  console.log(pagination);
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
