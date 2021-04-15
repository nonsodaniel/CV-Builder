import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";
import { ArrowDropDown } from "@material-ui/icons";
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 72,
    zIndex: 999,
  },
  container: {
    width: 1170,
    margin: "auto",
  },

  button: {
    fontSize: 13,
    color: "#c9d0d6",
    marginRight: "1rem",
    display: "flex",
  },
toolBar:{
  minHeight: '100%'
},
  AppBar: {
    backgroundColor: "#353b47",
    backgroundSize: "cover",
    height: 50,
    boxShadow: 'none'
  },

  mobileToggle: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  navText: {
    fontSize: 14,
  },
}));

const HomeHeader = () => {
  const classes = useStyles();
  return (
      <AppBar
        position="static"
        className={`${classes.AppBar}  ${classes.root}`}
      >
        <Grid item sm={12} xs={12} className={classes.container}>
          <Toolbar className={classes.toolBar}>
            <NavLink to="/cv" color="inherit" className={classes.button}>
              <Typography className={classes.navText}>CV</Typography>
              <ArrowDropDown />
            </NavLink>
            <NavLink
              to="/cover-letter"
              color="inherit"
              className={classes.button}
            >
              <Typography className={classes.navText}>Cover Letter</Typography>
              <ArrowDropDown />
            </NavLink>
            <NavLink to="/search" color="inherit" className={classes.button}>
              <Typography className={classes.navText}>Search</Typography>
              <ArrowDropDown />
            </NavLink>
          </Toolbar>
        </Grid>
      </AppBar>
  );
};

export default HomeHeader;
