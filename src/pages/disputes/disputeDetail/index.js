import React, { useState } from "react";
import Drawer from "../../../components/drawer/drawer";
import styled from "styled-components";
import { Paper, Grid, Avatar, Button } from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { useHistory } from "react-router-dom";
import CustomButton from "../../../components/generic/custom.button/custom.button";
import AknowledgeModal from "../modals/aknowledgeModal";

export default function DisputeDetails() {
  let history = useHistory();
  const [openAknowledge, setOpenAknowledge] = useState(false);

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
                  <AssignmentIcon className="icon" /> Disputes
                </a>
                / Dispute Details
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
                  <strong>proof Image</strong>
                </div>
              </Grid>
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
                  <strong>proof Image</strong>
                </div>
              </Grid>
            </Grid>

            <div className="col-md-10 col-sm-12 m-auto">
              <div style={{ display: "flex" }}>
                <h5 className="m-2">Customer Name: </h5>
                <p className="m-2">Neil Robertson</p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2">Vendor Name: </h5>
                <p className="m-2">Graeme Dott</p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2"> Service: </h5>
                <p className="m-2">service 1</p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2">Location: </h5>
                <p className="m-2">Ajman</p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2">Date:</h5>
                <p className="m-2">20/06/2021</p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2">Message</h5>
                <p className="m-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </Grid>
        </Paper>
        <Grid
          spacing={2}
          container
          justify="flex-end"
          xs={12}
          style={{ paddingTop: "20px" }}
        >
          <Grid item>
            <Button
              onClick={() => setOpenAknowledge(true)}
              variant="contained"
              color="secondary"
            >
              Acknowledge
            </Button>
          </Grid>
        </Grid>
      </ProfileWrapper>
      <AknowledgeModal open={openAknowledge} setOpen={setOpenAknowledge} />
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
