import React, { useState } from "react";
import Drawer from "../../components/drawer/drawer";
import styled from "styled-components";
import { Paper, Grid, Avatar } from "@material-ui/core";
import CustomButton from "../../components/generic/custom.button/custom.button";
import DownloadButton from "../../components/generic/download.button/download.button";
import CustomSelect from "../../components/generic/select/select";
import CustomInput from "../../components/generic/custom.input/custom.input";
import BasicTable from "../../components/generic/table/table";
import RadioButtons from "../../components/generic/radio.buttons/radio.buttons";
import DatePicker from "../../components/generic/date.picker/date.pickter";
import PictureUpload from "../../components/picture.upload/picture.upload";
import ImagePicker from "../../components/generic/antdImagePicker/antdImagePicker";
import {
  AccessAlarm,
  ThreeDRotation,
  Edit,
  Visibility,
  Delete,
} from "@material-ui/icons";
import SpeedIcon from '@material-ui/icons/Speed';

import { Upload, Button } from "antd";
import { useHistory } from "react-router-dom";


export default function EventDetail() {
  let history = useHistory();
const goBack = ()=>{
  history.goBack()
}
 return(
    <Drawer>
      <ProfileWrapper>
        <Paper classes={{ root: "paper" }}>
          <Grid xs={12}>
          <Grid xs={12} container justify="space-between" alignItems="center" className='mb-5'>
            <div className="title">
              <a
                
                className="title backLink text-black"
                onClick={goBack}
              >
                {" "}
                <SpeedIcon className="icon" /> Dashboard
              </a>{" "}
              / Event Details
            </div>
          </Grid>
           
            <div className="col-md-10 col-sm-12 m-auto ">
              <div style={{ display: "flex" }}>
                <h5 className="m-2">Title: </h5>
                <p className="m-2">Event Title Here </p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2"> Venue: </h5>
                <p className="m-2">Event venue Here </p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2">Location: </h5>
                <p className="m-2">Event Location Here </p>
              </div>
              <div style={{ display: "flex" }}>
                <h5 className="m-2">Description:</h5>
                <p className="m-2">
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.{" "}
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
