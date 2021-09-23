import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SpeedIcon from "@material-ui/icons/Speed";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import EmailIcon from "@material-ui/icons/Email";
import ScheduleIcon from "@material-ui/icons/Schedule";
import OpacityIcon from "@material-ui/icons/Opacity";
import styled from "styled-components";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import HistoryIcon from "@material-ui/icons/History";
import CategoryIcon from "@material-ui/icons/Category";
import AssignmentIcon from "@material-ui/icons/Assignment";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { Link } from "react-router-dom";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";

export default function ListItems() {
  return (
    <ListWrapper classes={{ root: "container" }}>
      <Link to="/">
        <List classes={{ root: "list" }}>
          <ListItem button key="Dashboard">
            <ListItemIcon classes={{ root: "listIcon" }}>
              <SpeedIcon className="icon" />
            </ListItemIcon>
            <ListItemText classes={{ primary: "text" }} primary="Dashboard" />
          </ListItem>
        </List>
      </Link>

      <Link to="/myprofile">
        <List classes={{ root: "list" }}>
          <ListItem button key="Course">
            <ListItemIcon classes={{ root: "listIcon" }}>
              <SupervisorAccount className="icon" />
            </ListItemIcon>
            <ListItemText classes={{ primary: "text" }} primary="My Profile" />
          </ListItem>
        </List>
      </Link>

      <Link to="/myservice">
        <List classes={{ root: "list" }}>
          <ListItem button key="Course">
            <ListItemIcon classes={{ root: "listIcon" }}>
              {" "}
              <LocalOfferIcon className="icon" />
            </ListItemIcon>
            <ListItemText classes={{ primary: "text" }} primary="Services" />
          </ListItem>
        </List>
      </Link>

      <Link to="/myproducts">
        <List classes={{ root: "list" }}>
          <ListItem button key="Users">
            <ListItemIcon classes={{ root: "listIcon" }}>
              {" "}
              <CheckCircleIcon className="icon" />
            </ListItemIcon>
            <ListItemText classes={{ primary: "text" }} primary="Products" />
          </ListItem>
        </List>
      </Link>

      <Link to="/notification">
        <List classes={{ root: "list" }}>
          <ListItem button key="Users">
            <ListItemIcon classes={{ root: "listIcon" }}>
              {" "}
              <NotificationsActiveIcon className="icon" />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: "text" }}
              primary="Notifications"
            />
          </ListItem>
        </List>
      </Link>
      <Link to="/chat">
        <List classes={{ root: "list" }}>
          <ListItem button key="Users">
            <ListItemIcon classes={{ root: "listIcon" }}>
              {" "}
              <EmailIcon className="icon" />
            </ListItemIcon>
            <ListItemText classes={{ primary: "text" }} primary="Inbox" />
          </ListItem>
        </List>
      </Link>

      <Link to="/promotion">
        <List classes={{ root: "list" }}>
          <ListItem button key="Users">
            <ListItemIcon classes={{ root: "listIcon" }}>
              {" "}
              <OpacityIcon className="icon" />
            </ListItemIcon>
            <ListItemText classes={{ primary: "text" }} primary="Promotion" />
          </ListItem>
        </List>
      </Link>

      <Link to="/ratings">
        <List classes={{ root: "list" }}>
          <ListItem button key="Users">
            <ListItemIcon classes={{ root: "listIcon" }}>
              {" "}
              <StarHalfIcon className="icon" />
            </ListItemIcon>
            <ListItemText classes={{ primary: "text" }} primary="Ratings" />
          </ListItem>
        </List>
      </Link>

      <Link to="/transaction">
        <List classes={{ root: "list" }}>
          <ListItem button key="Users">
            <ListItemIcon classes={{ root: "listIcon" }}>
              {" "}
              <AttachMoneyIcon className="icon" />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: "text" }}
              primary="Transaction History"
            />
          </ListItem>
        </List>
      </Link>
      <Link to="/jobsmanagement">
        <List classes={{ root: "list" }}>
          <ListItem button key="Users">
            <ListItemIcon classes={{ root: "listIcon" }}>
              {" "}
              <AssignmentIcon className="icon" />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: "text" }}
              primary="Jobs Management"
            />
          </ListItem>
        </List>
      </Link>
      <Link to="/transaction">
        <List classes={{ root: "list" }}>
          <ListItem button key="Users">
            <ListItemIcon classes={{ root: "listIcon" }}>
              {" "}
              <AttachMoneyIcon className="icon" />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: "text" }}
              primary="Terms & Conditions"
            />
          </ListItem>
        </List>
      </Link>
      <Link to="/transaction">
        <List classes={{ root: "list" }}>
          <ListItem button key="Users">
            <ListItemIcon classes={{ root: "listIcon" }}>
              {" "}
              <AttachMoneyIcon className="icon" />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: "text" }}
              primary="Privacy Policy"
            />
          </ListItem>
        </List>
      </Link>

      <Link to="/disputes">
        <List classes={{ root: "list" }}>
          <ListItem button key="Users">
            <ListItemIcon classes={{ root: "listIcon" }}>
              <CategoryIcon className="icon" />
            </ListItemIcon>
            <ListItemText classes={{ primary: "text" }} primary="Disputes" />
          </ListItem>
        </List>
      </Link>
      <Link to="/requestcategory">
        <List classes={{ root: "list" }}>
          <ListItem button key="Users">
            <ListItemIcon classes={{ root: "listIcon" }}>
              <CategoryIcon className="icon" />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: "text" }}
              primary="Request Category"
            />
          </ListItem>
        </List>
      </Link>
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  .container {
  }
  .list {
    padding-top: 0px;
    padding-bottom: 0px;
    font-size: 8px;
  }
  .list:hover {
    background-color: #9a9a9a;
  }
  .text {
    font-size: 14px;
    color: white;
  }
  .listIcon {
    min-width: 48px;
  }
  .icon {
    font-size: 22px;
    color: white;
  }
`;
