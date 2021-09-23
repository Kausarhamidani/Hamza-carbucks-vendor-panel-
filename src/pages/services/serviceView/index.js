import React, { useState } from "react";
import Drawer from "../../../components/drawer/drawer";
import styled from "styled-components";
import { Paper, Grid } from "@material-ui/core";
import CustomButton from "../../../components/generic/custom.button/custom.button";
import CustomSelect from "../../../components/generic/select/select";
import CustomViewInput from "../../../components/generic/custom.input/custom.viewinput";
import TextEditor from "../../../components/generic/text.editor/text.editor";
import Switch from "@material-ui/core/Switch";
import { IsMobileWidth } from "../../../components/generic/util/util";
import ImageCropper from "../../../components/generic/ImageCropper";
import Button from "@material-ui/core/Button";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import BackButton from "../../../components/generic/custom.button/back.button";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

export default function ServiceView() {
  const mobileWidth = IsMobileWidth();
  const [Location, setLocation] = useState([
    { country: "", address: "", state: "", area: "" },
    { country: "", address: "", state: "", area: "" },
  ]);
  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  const sampleText =
    " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <Drawer>
      <AddCourseWrapper>
        <Paper classes={{ root: "paper" }} direction="row">
          <Grid xs={12} container justify="space-between" alignItems="center">
            <div className="title">
              <a onClick={goBack} className="title backLink ">
                <LocalOfferIcon className="icon" /> My Services
              </a>{" "}
              / Service Details
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
                  src="https://material-ui.com/static/images/grid-list/camera.jpg"
                  alt="profile"
                  style={{ maxWidth: 200 }}
                />
              </Grid>
              <div className="label text-center">
                <strong>Service Image</strong>
              </div>

              <label htmlFor="contained-button-file"></label>
            </Grid>
            <Grid className="mx-2">
              <div style={{ textAlign: "center" }}>
                <img
                  className="img-fluid"
                  src="https://material-ui.com/static/images/grid-list/camera.jpg"
                  alt="profile"
                  style={{ maxWidth: 200 }}
                />
              </div>

              <div className="label text-center">
                <strong> Company Logo</strong>
              </div>
              <label htmlFor="contained-button-file"></label>
            </Grid>
          </Grid>
          <Grid xs={12} container>
            <Grid xs={12} md={4} lg={3}>
              <CustomViewInput
                placeholder="Category"
                label="Category"
                disabled="true"
              />
            </Grid>
            <Grid
              xs={12}
              md={4}
              lg={3}
              style={
                !mobileWidth ? { paddingLeft: "10px" } : { paddingTop: "10px" }
              }
            >
              <CustomViewInput
                placeholder="Enter Price"
                label="Price"
                disabled="true"
              />
            </Grid>
            <Grid
              xs={12}
              md={4}
              lg={3}
              style={
                !mobileWidth ? { paddingLeft: "10px" } : { paddingTop: "10px" }
              }
            >
              <CustomViewInput
                placeholder="Provided By"
                label="Provided By"
                disabled="true"
              />
            </Grid>
            <Grid
              xs={12}
              md={4}
              lg={3}
              style={
                !mobileWidth ? { paddingLeft: "10px" } : { paddingTop: "10px" }
              }
            >
              <div className="label">
                <strong>Status</strong>
              </div>
              <Switch checked disabled />
            </Grid>
          </Grid>
          {Location.map((L, index) => {
            return (
              <Grid xs={12} container style={{ paddingTop: "10px" }}>
                <Grid xs={12} md={4} lg={3}>
                  <CustomViewInput
                    placeholder="Country"
                    label="Country"
                    disabled="true"
                  />
                </Grid>
                <Grid
                  xs={12}
                  md={4}
                  lg={3}
                  style={
                    !mobileWidth
                      ? { paddingLeft: "10px" }
                      : { paddingTop: "10px" }
                  }
                >
                  <CustomViewInput
                    placeholder="Address"
                    label="Address"
                    disabled="true"
                  />
                </Grid>
                <Grid
                  xs={12}
                  md={4}
                  lg={3}
                  style={
                    !mobileWidth
                      ? { paddingLeft: "10px" }
                      : { paddingTop: "10px" }
                  }
                >
                  <CustomViewInput
                    placeholder="State"
                    label="State"
                    disabled="true"
                  />
                </Grid>
                <Grid
                  xs={12}
                  md={4}
                  lg={3}
                  style={
                    !mobileWidth
                      ? { paddingLeft: "10px" }
                      : { paddingTop: "10px" }
                  }
                >
                  <CustomViewInput
                    placeholder="Area"
                    label="Area"
                    disabled="true"
                  />
                </Grid>
              </Grid>
            );
          })}

          <Grid xs={12} container>
            <Grid
              xs={12}
              md={12}
              lg={12}
              style={!mobileWidth ? { paddingRight: "15px" } : null}
            >
              <Paper classes={{ root: "editorPaper" }}>
                {/* <h2 style={{ textAlign: "center" }}>English</h2> */}
                <div className="name">
                  <CustomViewInput
                    label="Service Name"
                    placeholder="Service Name"
                    disabled="true"
                  />
                </div>
                <div className="label">
                  <strong> Description</strong>
                </div>
                <div
                  style={{ border: "1px solid #ccc", padding: 10, height: 242 }}
                >
                  <p>{sampleText}</p>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            container
            justify="flex-end"
            xs={12}
            style={{ paddingTop: "20px" }}
          ></Grid>
        </Paper>
      </AddCourseWrapper>
    </Drawer>
  );
}

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
