import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  AppBar: {
    backgroundColor: "#3C4146",
    height: "100px",
    justifyContent: "center"
  },
  title: {
    flexGrow: 1,
    textAlign: "center"
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Consuming GitHub API
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
