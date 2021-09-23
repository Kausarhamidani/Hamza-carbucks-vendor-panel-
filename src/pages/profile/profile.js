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
import { Upload, Button } from "antd";

export default function Profile() {
  const [fileList, setFileList] = useState([
    // {
    //   uid: "-1",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    console.log(fileList);
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);

    if (imgWindow) {
      imgWindow.document.write(image.outerHTML);
    } else {
      window.location.href = src;
    }
  };
  const [fileList1, setFileList1] = useState([
    {
      uid: "-1",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const onChange1 = ({ fileList: newFileList }) => {
    console.log(fileList);
    setFileList1(newFileList);
  };

  const onPreview1 = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);

    if (imgWindow) {
      imgWindow.document.write(image.outerHTML);
    } else {
      window.location.href = src;
    }
  };
  const [fileList2, setFileList2] = useState([
    {
      uid: "-1",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const onChange2 = ({ fileList: newFileList }) => {
    console.log(fileList);
    setFileList2(newFileList);
  };

  const onPreview2 = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);

    if (imgWindow) {
      imgWindow.document.write(image.outerHTML);
    } else {
      window.location.href = src;
    }
  };
  const [fileList3, setFileList3] = useState([
    {
      uid: "-1",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const onChange3 = ({ fileList: newFileList }) => {
    console.log(fileList);
    setFileList3(newFileList);
  };

  const onPreview3 = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);

    if (imgWindow) {
      imgWindow.document.write(image.outerHTML);
    } else {
      window.location.href = src;
    }
  };
  return (
    <Drawer>
      <ProfileWrapper>
        <Paper classes={{ root: "paper" }}>
          <Grid xs={12}>
            <div className="heading">
              <h1>My Profile</h1>
            </div>
            <div
              className="avatar"
              style={{
                textAlign: "center",
                width: "100px",
                height: "100px",
                margin: "20px auto ",
              }}
            >
              {/* <Avatar style={{ width: "100px", height: "100px" }} /> */}
              <ImagePicker
                fileList={fileList}
                setFileList={setFileList}
                onChange={onChange}
                onPreview={onPreview}
                style={{ textAlign: "center" }}
              />
              <Edit
                style={{
                  position: "relative",
                  textAlign: "center",
                  top: "-10px",
                  right: "10px",
                }}
              />

              {/* <Upload onChange={onChange}>
                <Button style={{ width: "10px" }}>
                  <Edit />
                </Button>
              </Upload> */}
            </div>

            <div className="heading">
              <h3>Personal</h3>
            </div>
          </Grid>
          <Grid xs={12}>
            <Grid xs={12} md={8} classes={{ root: "fields" }}>
              <CustomInput placeholder="Your First Name" label="First Name" />
            </Grid>
            <Grid xs={12} md={8} classes={{ root: "fields" }}>
              <CustomInput placeholder="Your Last Name" label="Last Name " />
            </Grid>
            
          </Grid>
         
          <Grid xs={12} md={8} classes={{ root: "fields" }}>
            <CustomInput placeholder="Phone Number" label="Phone " />
          </Grid>

          <div className="heading my-4">
            <h3>Company</h3>
          </div>
          <Grid xs={12} md={8} classes={{ root: "fields" }}>
            <CustomInput placeholder="Company Name" label="Company" />
          </Grid>
          
          <div className="heading my-4">
            <h3>Documents</h3>
          </div>

          <div
            className="avatar"
            style={{
              textAlign: "center",
              // width: "100px",
              // height: "100px",
              justifyContent:'space-evenly',
              margin: "20px auto ",
            }}
          >
            <div>
            <div className="label">
              <strong>Trade License </strong>
            </div>
              <ImagePicker
                fileList={fileList1}
                setFileList={setFileList1}
                onChange={onChange1}
                onPreview={onPreview1}
                style={{ textAlign: "center" }}
              />
            </div>
            <div>
            <div className="label">
              <strong>Logo </strong>
            </div>
              <ImagePicker
                fileList={fileList2}
                setFileList={setFileList2}
                onChange={onChange2}
                onPreview={onPreview2}
                style={{ textAlign: "center" }}
              />
            </div>
            <div>
            <div className="label">
              <strong>TRN Certificate </strong>
            </div>
              <ImagePicker
                fileList={fileList3}
                setFileList={setFileList3}
                onChange={onChange3}
                onPreview={onPreview3}
                style={{ textAlign: "center" }}
              />
            </div>
          </div>

         
          
          <Grid xs={12} md={8} classes={{ root: "fields" }}>
            <CustomInput placeholder="Email" label="Email" />
          </Grid>
          <Grid xs={12} md={8} classes={{ root: "fields" }}>
            <CustomInput placeholder="Password" label="Password" />
          </Grid>
          <Grid xs={12} md={8} classes={{ root: "fields" }}>
            <CustomInput
              placeholder="Confirm Password"
              label="Confirm Password"
            />
          </Grid>
          <Grid xs={6} md={3} lg={3} className="button">
            <CustomButton style={{ backgroundColor: "grey" }}>
              Update Profile
            </CustomButton>
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
