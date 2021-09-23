import React from "react";
import Drawer from "../../../components/drawer/drawer";
import styled from "styled-components";
import { Paper, Grid } from "@material-ui/core";

import AssignmentIcon from "@material-ui/icons/Assignment";

import { useHistory } from "react-router-dom";

export default function CustomerDetails() {
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
                  <AssignmentIcon className="icon" /> Customers
                </a>
                / Customer Details
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
                  <strong>Customer Image</strong>
                </div>

                <label htmlFor="contained-button-file"></label>
              </Grid>
            </Grid>

            <div className="col-md-10 col-sm-12 m-auto">
              <div style={{ display: "flex" }}>
                <h5 className="m-2">ID: </h5>
                <p className="m-2">258</p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2">Full Name: </h5>
                <p className="m-2">Neil Robertson</p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2">Registration Date:</h5>
                <p className="m-2">20/06/2021</p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2"> Email: </h5>
                <p className="m-2">thethunderfromdownunder@gmail.com</p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2">Phone Number: </h5>
                <p className="m-2">+088 031 420 698</p>
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
