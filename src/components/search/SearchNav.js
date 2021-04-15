import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Grid,
  InputBase,
  TextField,
  Toolbar,
  Paper,
  Divider,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./search.css";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 72,
    zIndex: 999,
  },
  container: {
    width: 1170,
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
  },

  button: {
    fontSize: 13,
    color: "#c9d0d6",
    marginRight: "1rem",
    display: "flex",
  },

  AppBar: {
    backgroundColor: "#fff",
    height: 70,
    borderBottom: "1px solid #eee",
    boxShadow: "none",
    padding: "15px 0",
  },
  navText: {
    fontSize: 14,
  },
  wrap: {
    display: "flex",
    justifyContent: "space-between",
  },
  navTitle: {
    fontSize: 23,
    fontWeight: "normal",
    margin: "4px 0 0 0",
  },
  inputWrap: {
    display: "flex",
  },

  InputRoot: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 300,
    height: 30,
    boxShadow: 0,
    border: "1px solid #d7dde2",
  },
  InputRoot_2: {
    width: 200,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 13,
  },
  iconButton: {
    padding: 10,
  },
  btnSearch: {
    marginLeft: 10,
    boxShadow: "none",
    borderColor: "#00b284",
    backgroundColor: "#00b483",
    color: "white",
    fontSize: 11,
    padding: "0 31px",
  },
}));

const SearchNav = () => {
  const classes = useStyles();
  return (
    <section>
        <AppBar position="static" className={`${classes.AppBar} `}>
          <Box sm={12} xs={12} className={classes.container}>
            <Box className={`pryTxtColor ${classes.navTitle}`}>Job Search</Box>
            <Box className={classes.inputWrap}>
              <Box component="form" className={classes.InputRoot}>
                <IconButton className={classes.iconButton} aria-label="search">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  className={classes.input}
                  placeholder="Job title, Keyword, Company"
                  inputProps={{ "aria-label": "search google maps" }}
                />
              </Box>
              <Box
                component="form"
                className={`${classes.InputRoot} ${classes.InputRoot_2}`}
              >
                <InputBase
                  className={classes.input}
                  placeholder="Search Google Maps"
                  inputProps={{ "aria-label": "search google maps" }}
                />
              </Box>
              <Button
                variant="contained"
                color="success"
                ml={3}
                className={classes.btnSearch}
              >
                Primary
              </Button>
            </Box>
          </Box>
        </AppBar>
    </section>
  );
};

export default SearchNav;
