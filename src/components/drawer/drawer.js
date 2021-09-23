import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import styled from "styled-components";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Grid from "@material-ui/core/Grid";
import logo from "../../assets/images/icon.jpeg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";

import ListItems from "../generic/list.items/list.items";

function ResponsiveDrawer(props) {
  const { children } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerWidth = () => {
    setDrawerOpen(!drawerOpen);
  };
  const drawerWidth = drawerOpen ? 0 : 240;

  const useStyles = makeStyles((theme) => ({
    root: {},
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        color: "#4C4C5B",
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "#A30000",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      justifyContent: "space-between",
    },
    content: {
      [theme.breakpoints.up("sm")]: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
      },
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <img
        src={logo}
        style={{
          width: 200,
          height: 200,
          padding: 20,
          marginRight: 0,
          borderRadius: 100,
        }}
      />
      {/* <div className={classes.toolbar} /> */}

      <ListItems />
      <div style={{ backgroundColor: "grey" }}>
        <div
          className={classes.bottomPush}
          style={{
            justifyContent: "space-between",
            textAlign: "center",
            backgroundColor: "grey",
            marginTop: "50px",
          }}
        >
          <a href="https://www.facebook.com" target="_blank">
            <FacebookIcon
              style={{ margin: 10, color: "white", fontSize: 30 }}
            />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <InstagramIcon
              style={{ margin: 10, color: "white", fontSize: 30 }}
            />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <LinkedInIcon
              style={{ margin: 10, color: "white", fontSize: 30 }}
            />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <TwitterIcon style={{ margin: 10, color: "white", fontSize: 30 }} />
          </a>
        </div>
        <div style={{ backgroundColor: "#505050" }}>
          <p style={{ color: "white", textAlign: "center" }}>
            Developed By GMITS Tech
          </p>
        </div>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <DrawerWrapper className={classes.root}>
      <CssBaseline />
      {/* <AppBar    title={<img src="https://unsplash.it/40/40"/>}  /> */}
      <AppBar elevation={1} position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            style={{ color: "black" }}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Hidden only={"xs"}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerWidth}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <div
            className="logOutWrapper"
            style={{ display: "flex", alignItems: "center" }}
          >
            <NotificationsIcon className="icon" />
            <Typography variant="body1" noWrap>
              Logout
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          {/* <img src="https://th.bing.com/th/id/OIP.Q2xVBkP2TXIG352dGYmA6gHaLH?w=182&h=274&c=7&o=5&pid=1.7" style={{width:200, height:200}} /> */}
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </DrawerWrapper>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

const DrawerWrapper = styled.div`
.MuiListItemText-root {
  color:#ffffff;
}
.MuiListItemIcon-root {
    color:#ffffff;
}
.MuiToolbar-regular {
    min-height: 64px;
    display: flex;
    justify-content: space-between;
}
.logOutWrapper{
  display:flex;
  align-items:center;
  .icon{
    margin-right:25px;
  }
}
.MuiAppBar-colorPrimary {
 background-color:#ffffff;
}
.bottomPush{
  
 marginLeft:20
  textAlign: "center",
  paddingBottom: 100,
}
`;
