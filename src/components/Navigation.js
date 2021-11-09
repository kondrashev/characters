import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ApplictationContext } from "../index";

export default function Navigation() {
  const { values, setValues } = useContext(ApplictationContext);
  const handleChange = (event, newValue) => {
    setValues({ ...values, tabIndicator: newValue });
  };
  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={values.tabIndicator}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            label="Characters"
            onClick={() => {
              setValues({
                ...values,
                showCharacters: true,
                showEpisodes: false,
              });
            }}
          />
          <Tab
            label="Episodes"
            onClick={() => {
              setValues({
                ...values,
                showEpisodes: true,
                showCharacters: false,
              });
            }}
          />
        </Tabs>
      </AppBar>
    </Box>
  );
}
