import React, { useState } from "react";
import Drawer from "../../../components/drawer/drawer";
import styled from "styled-components";
import { Paper, Grid } from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";

import { Upload, Button } from "antd";
import { useHistory } from "react-router-dom";

export default function Notificationdetails() {
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
                  <AssignmentIcon className="icon" /> Notifications
                </a>
                / Notification Details
              </div>
            </Grid>
            <Grid
              className="my-5"
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid className="mx-2">
                <Grid style={{ textAlign: "center" }}>
                  <img
                    className="img-fluid"
                    src="https://etimg.etb2bimg.com/photo/74295396.cms"
                    alt="profile"
                    style={{ maxWidth: 200 }}
                  />
                </Grid>
                <div className="label text-center">
                  <strong>Notification Image</strong>
                </div>

                <label htmlFor="contained-button-file"></label>
              </Grid>
            </Grid>

            <div className="col-md-10 col-sm-12 m-auto">
              <div style={{ display: "flex" }}>
                <h5 className="m-2">ID </h5>
                <p className="m-2">159</p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2"> Title: </h5>
                <p className="m-2">dummy notificatin title 1</p>
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
                <h5 className="m-2">Notification Type:</h5>
                <p className="m-2">Dispute</p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2">Description: </h5>
                <p className="m-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  sed sollicitudin metus. Curabitur quis sapien ut leo vulputate
                  facilisis. Nam quis purus dolor. Vivamus sagittis a arcu
                  dictum accumsan. Sed quis accumsan massa, vel fringilla
                  libero. Nam est libero, aliquet at elit eget, lobortis
                  ultrices dolor. Vestibulum eleifend ornare placerat. Maecenas
                  at felis eu est tincidunt faucibus. Donec ultricies eget dui
                  gravida semper. Vestibulum ac finibus sem. Donec scelerisque
                  nisl eu magna sollicitudin interdum.
                </p>
              </div>

              {/* <div style={{ display: "flex" }}>
                <h5 className="m-2">Description:</h5>
                <p className="m-2">
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                </p>
              </div> */}
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
