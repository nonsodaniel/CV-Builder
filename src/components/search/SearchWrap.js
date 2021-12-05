import {
  Box,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    top: "4.3rem",
  },
  leftTitle: {
    fontWeight: 600,
    fontSize: 12,
    color: "#58585F",
    margin: "25px 0 27px 0",
    borderBottom: "1px solid #d7dde2",
    paddingBottom: 15,
  },
  formControl: {
    minWidth: 270,
    borderRadius: 0,
    background: "white",
    marginBottom: 16,

    "&:focus-within": {
      opacity: 1,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #d7dde2",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #d7dde2",
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #d7dde2",
    },

    "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #d7dde2",
    },
  },
  select: {
    borderRadius: 0,
    fontSize: 13,
    padding: "5px 0",
    "&:hover": {},
  },
  leftBox: {
    background: "#F1F5F9",
    padding: "40px 20px 20px 20px",
    maxHeight: "100vh",
  },
  linkBox: {
    display: "flex",
    flexDirection: "column",
  },
  txtLinks: {
    paddingBottom: 15,
    fontSize: 14,
  },
  searchResult: {
    color: "#585861",
    fontSize: 16,
    minHeight: 190,
    borderLeft: "1px solid #e5ebf2",
    padding: "40px 0 60px 30px",
    verticalAlign: "top",
  },
}));

const SearchWrap = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={3} sm={12} className={classes.leftBox}>
          <Typography variant="h6" className={classes.leftTitle}>
            FILTER YOUR SEARCH
          </Typography>
          {[1, 2, 3].map((o) => {
            return (
              <FormControl
                variant="outlined"
                margin="dense"
                className={classes.formControl}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  Age
                </InputLabel>
                <Select
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                  className={classes.select}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            );
          })}
          <Typography variant="h6" className={classes.leftTitle}>
            RECENT SEARCHES
          </Typography>
          <Box className={classes.linkBox}>
            <Link className={classes.txtLinks}>Viewed Jobs</Link>
            <Link className={classes.txtLinks}>Saved Jobs</Link>
          </Box>
          <Typography variant="h6" className={classes.leftTitle}>
            SEARCH HISTORY
          </Typography>
          <Box className={classes.linkBox}>
            <Link className={classes.txtLinks}>Viewed Jobs</Link>
            <Link className={classes.txtLinks}>Saved Jobs</Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={8} sm={12} className={classes.searchResult}>
          World
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchWrap;
