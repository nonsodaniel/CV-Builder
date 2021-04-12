import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 1170,
    margin: "auto",
  },
  wrap: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  AppBar: {
    backgroundColor: "#353b47",
    backgroundSize: "cover",
    height: "60px",
    color: "#888",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Container maxWidth="lg">
        <Box container>
          <BottomNavigation showLabels className={classes.root}>
            <BottomNavigationAction label="TERMS & CONDITIONS " />
            <BottomNavigationAction label="PRIVACY POLICY" />
            <BottomNavigationAction label="CONTACT US" />
          </BottomNavigation>
        </Box>
      </Container>
      <AppBar position="static" className={`${classes.AppBar} `}>
        <Grid item sm={12} xs={12} className={classes.container}>
          <Toolbar sm={12} xs={12}>
            <Box className={classes.wrap}>
              <Typography>POWERED BY MyPerfectCV</Typography>
              <Typography>
                © 2021, Bold Limited. All rights reserved.
              </Typography>
            </Box>
          </Toolbar>
        </Grid>
      </AppBar>
    </footer>
  );
};

export default Footer;
