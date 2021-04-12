import {
  Box,
  Container,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import compImg1 from "../assets/company1.jpg";
import compImg2 from "../assets/company2.jpg";
import compImg3 from "../assets/company3.png";
import compImg4 from "../assets/company4.png";
import compImg5 from "../assets/company5.png";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  logoWrap: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    color: "#00549c",
    fontSize: 32,
    fontWeight: 100,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    height: "70px",
    width: "80%",
  },
  img: {
    height: "100% !important",
  },
}));
const tileData = [
  {
    img: compImg1,
  },
  {
    img: compImg2,
  },
  {
    img: compImg3,
  },
  {
    img: compImg4,
  },
  {
    img: compImg5,
  },
];

const Partners = () => {
  const classes = useStyles();
  return (
    <section>
      <Container maxWidth="lg">
        <Box className={`wrap`}>
          <Typography variant="h4" className={`center ${classes.title}`}>
            Our Trusted Partners
          </Typography>
          <Box className={classes.logoWrap}>
            <GridList className={classes.gridList} cols={3}>
              {tileData.map((tile) => (
                <img src={tile.img} alt={tile.title} className={classes.img} />
              ))}
            </GridList>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Partners;
