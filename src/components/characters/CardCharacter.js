import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ApplictationContext } from "../../index";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardCharacter(props) {
  const { values, setValues } = useContext(ApplictationContext);
  const { item } = props;
  const handleExpandClick = () => {
    setValues({ ...values, expanded: !values.expanded });
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={item.name}
        subheader={new Date(item.created).toLocaleDateString()}
      />
      <CardMedia component="img" height="194" image={item.image} />
      <CardActions disableSpacing>
        <ExpandMore
          expand={values.expanded}
          onClick={handleExpandClick}
          aria-expanded={values.expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={values.expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Detail information</Typography>
          <Typography paragraph>{`Gender: ${item.gender}`}</Typography>
          <Typography
            paragraph
          >{`Location name: ${item.location.name}`}</Typography>
          <Typography
            paragraph
          >{`Location url: ${item.location.url}`}</Typography>
          <Typography
            paragraph
          >{`Origin name: ${item.origin.name}`}</Typography>
          <Typography paragraph>{`Origin url: ${item.origin.url}`}</Typography>
          <Typography paragraph>{`Species: ${item.species}`}</Typography>
          <Typography paragraph>{`Status: ${item.status}`}</Typography>
          <Typography paragraph>{`URL: ${item.url}`}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}