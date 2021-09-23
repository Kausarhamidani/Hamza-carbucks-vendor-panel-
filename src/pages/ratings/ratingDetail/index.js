import React, { useState } from "react";
import Drawer from "../../../components/drawer/drawer";
import styled from "styled-components";
import { Paper, Grid } from "@material-ui/core";
import CustomButton from "../../../components/generic/custom.button/custom.button";
import CustomInput from "../../../components/generic/custom.input/custom.input";
import TextEditor from "../../../components/generic/text.editor/text.editor";
import Switch from "@material-ui/core/Switch";
import { IsMobileWidth } from "../../../components/generic/util/util";
import ImageCropper from "../../../components/generic/ImageCropper";
import Button from "@material-ui/core/Button";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import BackButton from "../../../components/generic/custom.button/back.button";
import Rating from "@material-ui/lab/Rating";
import StarHalfIcon from "@material-ui/icons/StarHalf";

export default function ViewRatings() {
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
                <StarHalfIcon className="icon" /> Ratings
              </a>{" "}
              / Rating Details
            </div>
          </Grid>

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
                  <CustomInput
                    label=" Name"
                    placeholder=" Name"
                    disabled="true"
                  />
                </div>
                <div className="label display-flex" style={{ display: "flex" }}>
                  <strong> Rating</strong>
                  <div>
                    <Rating
                      name="read-only"
                      value="2"
                      readOnly
                      className="ml-5"
                    />
                  </div>
                </div>
                <div className="label display-flex" style={{ display: "flex" }}>
                  <strong> Comment</strong>
                </div>
                <div
                  style={{ border: "1px solid #ccc", padding: 10, height: 242 }}
                >
                  <p>{sampleText}</p>
                </div>

                <div className="text-right">
                  <textarea
                    name="replyBack"
                    rows="4"
                    cols="50"
                    className="border  mt-5 p-2"
                  >
                    Thank you for everything you have done, and I know that all
                    of us adore you.
                  </textarea>
                </div>
                <Grid
                  container
                  justify="flex-end"
                  xs={12}
                  style={{ paddingTop: "20px" }}
                >
                  <Grid>
                    <CustomButton> Rate Back</CustomButton>
                  </Grid>
                </Grid>

                {/* <div>
                  <div className="label" style={{ paddingTop: "20px" }}>
                    <strong>Documents Required</strong>
                  </div>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      padding: 10,
                      height: 242,
                    }}
                  >
                    <p>
                      {sampleText}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="label" style={{ paddingTop: "20px" }}>
                    <strong>Registration Proceedure</strong>
                  </div>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      padding: 10,
                      height: 242,
                    }}
                  >
                    <p>
                      {sampleText}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="label" style={{ paddingTop: "20px" }}>
                    <strong>Lecture Details</strong>
                  </div>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      padding: 10,
                      height: 242,
                    }}
                  >
                    <p>
                      {sampleText}
                      
                    </p>
                  </div>
                </div>
                <div>
                  <div className="label" style={{ paddingTop: "20px" }}>
                    <strong>Fees Details</strong>
                  </div>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      padding: 10,
                      height: 242,
                    }}
                  >
                    <p>
                      {sampleText}
                      
                    </p>
                  </div>
                </div>
                <div>
                  <div className="label" style={{ paddingTop: "20px" }}>
                    <strong>Test Details*</strong>
                  </div>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      padding: 10,
                      height: 242,
                    }}
                  >
                    <p>
                      {sampleText}
                      
                    </p>
                  </div>
                </div>
                <div>
                  <div className="label" style={{ paddingTop: "20px" }}>
                    <strong>Refund Policy For Online Payments</strong>
                  </div>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      padding: 10,
                      height: 242,
                    }}
                  >
                    <p>
                      {sampleText}
                      
                    </p>
                  </div>
                </div>
              */}
              </Paper>
            </Grid>
            {/* <Grid
              xs={12}
              md={6}
              lg={6}
              style={!mobileWidth ? { paddingLeft: "15px" } : null}
            >
              <Paper classes={{ root: "editorPaper" }}>
                <h2 style={{ textAlign: "center" }}>Arabic</h2>
                <div className="name">
                  <CustomInput
                    label="Title Name"
                    placeholder="Title Name"
                    disabled="true"
                  />
                </div>
                <div className="label">
                  <strong>Course Description</strong>
                </div>
                <div
                  style={{ border: "1px solid #ccc", padding: 10, height: 242 }}
                >
                  <p>
                    {sampleText}
                  </p>
                </div>
                <div>
                  <div className="label" style={{ paddingTop: "20px" }}>
                    <strong>Documents Required</strong>
                  </div>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      padding: 10,
                      height: 242,
                    }}
                  >
                    <p>
                      {sampleText}
                      
                    </p>
                  </div>
                </div>
                <div>
                  <div className="label" style={{ paddingTop: "20px" }}>
                    <strong>Registration Proceedure</strong>
                  </div>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      padding: 10,
                      height: 242,
                    }}
                  >
                    <p>
                      {sampleText}
                      
                    </p>
                  </div>
                </div>
                <div>
                  <div className="label" style={{ paddingTop: "20px" }}>
                    <strong>Lecture Details</strong>
                  </div>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      padding: 10,
                      height: 242,
                    }}
                  >
                    <p>
                      {sampleText}
                      
                    </p>
                  </div>
                </div>
                <div>
                  <div className="label" style={{ paddingTop: "20px" }}>
                    <strong>Fees Details</strong>
                  </div>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      padding: 10,
                      height: 242,
                    }}
                  >
                    <p>
                      {sampleText}
                      
                    </p>
                  </div>
                </div>
                <div>
                  <div className="label" style={{ paddingTop: "20px" }}>
                    <strong>Test Details*</strong>
                  </div>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      padding: 10,
                      height: 242,
                    }}
                  >
                    <p>
                      {sampleText}
                      
                    </p>
                  </div>
                </div>
                <div>
                  <div className="label" style={{ paddingTop: "20px" }}>
                    <strong>Refund Policy For Online Payments</strong>
                  </div>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      padding: 10,
                      height: 242,
                    }}
                  >
                    <p>
                      {sampleText}
                      
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>
          */}
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
