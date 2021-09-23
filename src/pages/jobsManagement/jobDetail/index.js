import React, { useState } from "react";
import Drawer from "../../../components/drawer/drawer";
import styled from "styled-components";
import { Paper, Grid, Avatar } from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { useHistory } from "react-router-dom";

export default function JobsDetail() {
  let history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <Drawer>
      <ProfileWrapper>
        <Paper classes={{ root: "paper" }}>
          <Grid xs={12}>
            <Grid
              xs={12}
              container
              justify="space-between"
              alignItems="center"
              className="mb-5"
            >
              <div className="title">
                <a className="title backLink text-black" onClick={goBack}>
                  <AssignmentIcon className="icon" /> Jobs Management
                </a>{" "}
                / Job Details
              </div>
            </Grid>

            <div className="col-md-10 col-sm-12 m-auto">
              <div style={{ display: "flex" }}>
                <h5 className="m-2">Job Title: </h5>
                <p className="m-2">Job Title Here </p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2"> Customer Name: </h5>
                <p className="m-2">Name Here Here </p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2">Service / Product Name: </h5>
                <p className="m-2">Service Name Here </p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2">Location:</h5>
                <p className="m-2">Dubai</p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2">Date:</h5>
                <p className="m-2">20/06/2021</p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2">Status:</h5>
                <p className="m-2">In Progress</p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2">Description:</h5>
                <p className="m-2">
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                </p>
              </div>
            </div>
          </Grid>
        </Paper>
      </ProfileWrapper>
    </Drawer>
  );
}

const ProfileWrapper = styled.div`
  width: 100%;
  padding: 15px;

  .paper {
    padding: 20px;
    .buttons {
      display: flex;
    }
    .heading {
      text-align: center;
    }
    .avatar {
      display: flex;
      justify-content: center;
    }
    .btn {
      background: #a30000;
      color: white;
    }
  }
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .label {
    color: #3c4b64;
    padding-bottom: 10px;
  }
  .fields {
    margin: auto;
    margin-top: 20px;
  }
  .button {
    padding-top: 30px;
    text-align: center;
    margin: auto;
  }
`;
const AddCourseWrapper = styled.div`
  width: 100%;
  padding: 15px;
  .paper {
    padding: 20px;
    .buttons {
      display: flex;
    }
    .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
      background-color: #a30000;
    }
    .MuiSwitch-colorSecondary.Mui-checked {
      color: white;
    }
  }
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .editorPaper {
    padding: 20px;
    margin-top: 30px;
  }
  .name {
    padding-bottom: 20px;
  }
  .label {
    color: #3c4b64;
    padding-bottom: 10px;
  }
  .image {
    font-size: 16px;
    background-color: #a30000;
    padding: 10px;
    width: 100%;
  }
`;
