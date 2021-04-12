import { Container, Divider } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "3rem 0",
  },
}));
const Dividers = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Divider></Divider>
    </Container>
  );
};

export default Dividers;
