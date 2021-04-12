import { AppBar, Box, Grid, Toolbar } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({}));

const SearchNav = () => {
  const classes = useStyles();
  return (
    <section>
      <Box>
        <AppBar position="static" className={`${classes.AppBar_2} `}>
          <Grid item sm={12} xs={12} className={classes.container}>
            <Toolbar></Toolbar>
          </Grid>
        </AppBar>
      </Box>
    </section>
  );
};

export default SearchNav;
