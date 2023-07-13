import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar color={"secondary"}>
      <Toolbar>
        <Typography variant="h6" flexGrow={1}>
          Code GPT
        </Typography>
        <Typography variant="body1">V 1.0</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
