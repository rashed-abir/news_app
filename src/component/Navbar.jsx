import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import Switch from "@material-ui/core/Switch";
import { ThemeProvider, createMuiTheme, Paper } from "@material-ui/core";
import News from "./News";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  main: {
    justifyContent: "space-between",
  },
}));

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.main}>
          <div style={{ display: "flex" }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              style={{ marginTop: "8px" }}
              variant="h5"
              color="inherit"
            >
              News
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <Typography style={{ marginTop: "8px", marginRight: "5px" }}>
              Mode
            </Typography>
            <Switch checked={darkMode} onClick={() => setDarkMode(!darkMode)} />
          </div>
        </Toolbar>
      </AppBar>
      <ThemeProvider theme={theme}>
        <Paper style={{ height: "100%" }}>
          <News />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default Navbar;
