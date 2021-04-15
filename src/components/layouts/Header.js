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
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Link } from "react-router-dom";
import HomeHeader from "../home/HomeHeader";

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
  modal: {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    width: "80%",
    outline: 0,
    boxShadow: '0 0 10px 20px #483a2f0d',
    borderRadius: '10px',
    position: "absolute",
    bottom: "1rem",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  modalWrap: {
    display: "flex",
    flexDirection: "column",
    fontSize: 20,
   
   

  },
  modalLink:{
    textDecoration: "none",
    margin: '20px 0',
    color:  '#5a5a5a',
    
  },
  btnCreate: {
    padding: '18px 22px',
    fontSize: 22,
    background: "#ff8000"
  }

}));

const Header = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
                onClick={handleOpen}
              >
                <Icon style={{ fontSize: "2rem" }}>menu</Icon>
              </Box>
            </Toolbar>
          </Grid>
        </AppBar>
        <HomeHeader />
      </div>
   

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box className={classes.paper}>
          <Box className={classes.modalWrap}>
            <Link className={classes.modalLink}>MY CV</Link>
            <Link className={classes.modalLink}>SETTINGS</Link>
            <Link className={classes.modalLink}>CONTACT US</Link>
            <Link className={`${classes.modalLink} ${classes.modalLinkLast}`}>LOGOUT</Link>
            <Button className={classes.btnCreate} variant="contained" size="large" color="primary" disableElevation>
 CREATE YOUR CV
</Button>
          </Box>
            </Box>
          </Fade>
        </Modal>
    </>
  );
};

export default Header;
