import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  Avatar,
  Drawer,
  List,
  ListItem,
  Box,
  Icon,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    zIndex: 999,
  },
  row: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  container: {
    width: 1170,
    margin: "auto",
  },
  button_1: {
    fontSize: "11px",
    color: "#585860",
  },
  button_2: {
    fontSize: 13,
    color: "#c9d0d6",
    marginRight: "1rem",
    display: "flex",
  },

  AppBar: {
    backgroundColor: "#fff",
    backgroundSize: "cover",
    position: "relative",
    zIndex: theme.zIndex.drawer + 1,
  },
  AppBar_2: {
    backgroundColor: "#353b47",
    backgroundSize: "cover",
    height: "60px",
  },
  mainLogo: {
    color: "#a1a1a1",
    justifyContent: "left",
    "&:hover": {
      background: "transparent",
    },
  },

  avatar: {
    height: "60px",
    width: "100px",
    borderRadius: 0,
  },

  loginButton: {
    background: "#e91e63",
    color: "#fff",
    borderRadius: "25px",
    padding: "0px 25px",
  },
  navItems: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
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

const Header = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };
  const list = () => {
    <List>
      <ListItem>THis is a list item</ListItem>
    </List>;
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.AppBar}>
          <Grid item sm={12} xs={12} className={classes.container}>
            <Toolbar>
              <Grid className={classes.grow}>
                <Button className={[classes.mainLogo]}>
                  <Avatar
                    src="https://uploads.codesandbox.io/uploads/user/3e41a372-fc65-4387-bca0-70a050914db8/VIR9-logo.jpg"
                    className={classes.avatar}
                  />
                </Button>
              </Grid>
              <Box className={classes.navItems}>
                <Button color="inherit" className={classes.button_1}>
                  Discover
                </Button>
                <Button color="inherit" className={classes.button_1}>
                  Profile
                </Button>
                <Button
                  color="inherit"
                  className={[classes.buttonFontSize, classes.loginButton]}
                >
                  Login
                </Button>
              </Box>
              <Box
                className={classes.mobileToggle}
                onClick={toggleDrawer(true)}
              >
                <Icon style={{ fontSize: "2rem" }}>menu</Icon>
              </Box>
            </Toolbar>
          </Grid>
        </AppBar>
      </div>
      <Drawer anchor={"top"} open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
};

export default Header;
