import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "3rem",
  },
  wrap: {
    [theme.breakpoints.up("sm")]: {
      padding: "0 15px",
    },
  },
  quotesWrap: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-around",
    },
  },
  title: {
    paddingBottom: "2rem",
    fontSize: 32,
    fontWeight: "400",
    color: "#00549c",
  },
  reviews: {
    fontSize: 16,
    color: "#555",
    lineHeight: 2,
  },
  author: {
    textAlign: "right",
    fontSize: 15,
    color: "#555",
    fontWeight: 600,
  },
}));
const Services = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <Box className={classes.wrap}>
          <Typography variant="h4" className={`center ${classes.title}`}>
            CV services – customer reviews
          </Typography>
          <Grid container spacing={3} className={classes.quotesWrap}>
            <Grid item xs={12} md={5} sm={12}>
              <Typography className={classes.reviews}>
                I found your site very easy to use and brilliant in the options
                I could choose to suit the type of CV I needed to create. The CV
                I created was professional and the advice I chose to use made it
                a winning CV. I also really appreciated the lack of hard sell
                and the ease with which I have been able to cancel the account
                until I need it again. I will definitely use this site again in
                the future and will recommend it to friends and family.
              </Typography>
              <Typography variant="h6" pb={3} className={classes.author}>
                <em>J. Wright</em>
              </Typography>
            </Grid>
            <Grid item xs={12} md={5} sm={12}>
              <Typography className={classes.reviews}>
                Very useful, nice templates and I really like the fact you make
                it easy to cancel. Sometimes more often than not, companies make
                this a difficult process. It's nice to see My Perfect CV works
                transparently. Because of this fact, I will be back should I
                ever need to work on my CV again.”
              </Typography>
              <Typography variant="h6" pb={3} className={classes.author}>
                <em>C. Rice</em>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Services;
