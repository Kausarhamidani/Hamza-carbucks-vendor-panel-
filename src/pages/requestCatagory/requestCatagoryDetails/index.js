import React, { useState } from "react";
import Drawer from "../../../components/drawer/drawer";
import styled from "styled-components";
import { Paper, Grid, Button } from "@material-ui/core";
import CustomViewInput from "../../../components/generic/custom.input/custom.viewinput";
import { IsMobileWidth } from "../../../components/generic/util/util";
import { useHistory } from "react-router-dom";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RequestDialog from "../requestCatagoryModal";

export default function ViewRequestedCategory() {
  const mobileWidth = IsMobileWidth();
  const [open, setOpen] = useState(false);

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
                <LocalOfferIcon className="icon" /> Request Category
              </a>
              / Requested Category Details
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
                <div className="name">
                  <CustomViewInput
                    label="Title"
                    placeholder="Title"
                    disabled="true"
                  />
                </div>
                <div className="name">
                  <CustomViewInput
                    label="Date"
                    placeholder="Date"
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
          >
            <Button
              // style={{ marginLeft: 5 }}
              size="small"
              variant="contained"
              color="secondary"
              onClick={() => setOpen(true)}
            >
              Comment
            </Button>
          </Grid>
        </Paper>
      </AddCourseWrapper>
      <RequestDialog open={open} setOpen={setOpen} />
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
