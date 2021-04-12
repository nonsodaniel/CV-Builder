import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  wrap: {
    [theme.breakpoints.up("sm")]: {
      padding: "0 15px",
    },
  },
  perfectWrap: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-around",
    },
  },
  title: {
    fontSize: 30,
    fontWeight: "400",
    color: "#00549c",
  },
  details: {
    fontSize: 19,
    color: "#555",
    lineHeight: 1.6,
    fontWeight: 400,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: "2rem 1rem",
      fontSize: 26,
    },
  },
  heroBtn: {
    background: "#ff8000",
    color: "#fff",
    borderColor: "#d96d00",
    textTransform: "uppercase",
    padding: "8px 46px",
    fontSize: "25px",
    letterSpacing: "1px",
    margin: "4rem auto",
    borderRadius: 5,
  },
  btnWrap: {
    display: "flex",
  },
  bottomText: {
    textAlign: "center",
    color: "#555",
    fontSize: 10,
  },
}));
const Perfect = () => {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="lg">
        <Grid container className={classes.perfectWrap}>
          <Grid item xs={12} md={5} sm={12}>
            <Typography variant="h4" className={`center ${classes.title}`}>
              Your perfect CV – in minutes
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} sm={12}>
            <Typography variant="h6" className={classes.details}>
              Writing the perfect CV has never been easier. Just choose one of
              our job-winning designs and add our expert-written examples. In
              just 10 minutes, you’ll have a flawless professional CV.
            </Typography>
          </Grid>
        </Grid>
        <Box className={classes.btnWrap}>
          <Button
            color="primary"
            variant="contained"
            className={classes.heroBtn}
          >
            CREATE MY CV
          </Button>
        </Box>
        <p className={classes.bottomText}>
          *The names and logos of the companies referred to above are all
          trademarks of their respective holders. Unless specifically stated
          otherwise, such references are not intended to imply any affiliation
          or association with MyPerfectCV
        </p>
      </Container>
    </section>
  );
};

export default Perfect;
