import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ApplictationContext } from "../../index";
import { useDispatch, useSelector } from "react-redux";
import { loadEpisodesFetchData } from "../../store/episodes/action";

function createData(name, date, episode, created, url, characters) {
  return {
    name,
    date,
    episode,
    created,
    url,
    characters,
  };
}
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">{row.episode}</TableCell>
        <TableCell align="right">{row.created}</TableCell>
        <TableCell align="right">{row.url}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Characters
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>URL</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.characters.map((characterRow) => (
                    <TableRow key={characterRow}>
                      <TableCell component="th" scope="row">
                        {characterRow}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ListEpisodes() {
  const dispatch = useDispatch();
  const { values } = useContext(ApplictationContext);
  const getEpisodes = (data) => dispatch(loadEpisodesFetchData(data));
  const listEpisodes = useSelector((state) => state.episodesReducer);
  useEffect(() => {
    getEpisodes(values.urlEpisodes);
  }, [values.urlEpisodes]);
  console.log(listEpisodes); //////////////////////
  const rows = listEpisodes?.map((item) => {
    return createData(
      item.name,
      item.air_date,
      item.episode,
      item.created,
      item.url,
      item.characters
    );
  });
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Episode</TableCell>
            <TableCell align="right">Created</TableCell>
            <TableCell align="right">URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
