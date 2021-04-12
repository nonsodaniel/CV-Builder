import {
  Box,
  Typography,
  FormLabel,
  Grid,
  FormControlLabel,
  RadioGroup,
  Radio,
  Paper,
  Container,
  Button,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  center: {
    textAlign: "center",
  },
  heroWrap: {
    background:
      "url(https://www.myperfectcv.co.uk/wp-content/themes/myperfectresume/images/bg-bottom-mpr-lp.png) repeat-x scroll left bottom,url(https://www.myperfectcv.co.uk/wp-content/themes/myperfectresume/images/bg-hero-banner-02.jpg) repeat scroll left top transparent",
    marginBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      padding: "3rem 0",
    },
  },
  heroTitle: {
    textAlign: "center",
  },
  title: {
    paddingTop: theme.spacing(3),
    fontSize: "40px",
    lineHeight: ".8em",
    fontWeight: 400,
    marginTop: 0,
    color: "#5a5a5a",
    marginBottom: 5,
    [theme.breakpoints.down("sm")]: {
      lineHeight: 1.2,
      padding: "3rem 0",
    },
  },
  subtitle: {
    paddingTop: theme.spacing(1),
    color: "#0059a4",
    fontSize: 27,
    fontWeight: "400",
  },
  heroItems: {
    margin: "1rem 0 4rem 0",
    [theme.breakpoints.down("sm")]: {
      display: "none",
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
    margin: "2rem auto",
    borderRadius: 5,
  },
  btnWrap: {
    display: "flex",
  },
}));

const Hero = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  return (
    <Paper className={classes.heroWrap}>
      <Container maxWidth="md">
        <Box className={classes.heroTitle}>
          <Typography variant="h4" className={`title ${classes.title}`}>
            The online CV builder that's so easy to use
          </Typography>
          <Typography variant="h5" className={`title ${classes.subtitle}`}>
            The CVs write themselves
          </Typography>
        </Box>

        <Grid container spacing={3} className={classes.heroItems}>
          <Grid item xs={12} md={4} sm={6}>
            <Box className={classes.paper}>
              <Icon style={{ fontSize: "7rem" }}>add_circle</Icon>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Box className={classes.paper}>
              {" "}
              <Icon style={{ fontSize: "7rem" }}>add_circle</Icon>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Box className={classes.paper}>
              {" "}
              <Icon style={{ fontSize: "7rem" }}>add_circle</Icon>
            </Box>
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
      </Container>
    </Paper>
  );
};

export default Hero;
