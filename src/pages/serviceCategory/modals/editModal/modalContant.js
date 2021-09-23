import React, { useState } from "react";
import styled from "styled-components";
import { Paper, Grid } from "@material-ui/core";
import CustomButton from "../../../../components/generic/custom.button/custom.button";
import CustomInput from "../../../../components/generic/custom.input/custom.input";
import { IsMobileWidth } from "../../../../components/generic/util/util";
import ImagePicker from "../../../../components/generic/antdImagePicker/antdImagePicker";

import axios from "axios";

export default function ModalContent() {
  const [titleEnglish, settitleEnglish] = useState("");

  const mobileWidth = IsMobileWidth();

  const submitForm = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("titleEnglish", titleEnglish);
  };

  const [fileList, setFileList] = useState([]);

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

  return (
    <CreatePromotionWrapper>
      <Grid style={{ display: "flex", justifyContent: "space-around" }}>
        <Grid>
          <div className="label">
            <strong>Catagory Image</strong>
          </div>
          <Grid xs={12} md={6} lg={4}>
            <ImagePicker
              fileList={fileList}
              setFileList={setFileList}
              onChange={onChange}
              onPreview={onPreview}
            />
          </Grid>
          <label htmlFor="contained-button-file"></label>
        </Grid>
      </Grid>

      <Grid xs={12}>
        <Grid xs={12}>
          <Paper classes={{ root: "editorPaper" }}>
            {/* <h2 style={{ textAlign: "center" }}>English</h2> */}
            <div className="name">
              <CustomInput
                setValue={(a) => {
                  settitleEnglish(a);
                }}
                label="Catagory Name"
                placeholder="catagory name"
              />
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Grid container justify="flex-end" xs={12} style={{ paddingTop: "20px" }}>
        <Grid>
          <CustomButton onClick={submitForm}>Save</CustomButton>
        </Grid>
      </Grid>
    </CreatePromotionWrapper>
  );
}

const CreatePromotionWrapper = styled.div`
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
    background-color: grey;
    padding: 10px;
  }
  .Mui-focused {
    color: #a30000;
  }
  .MuiInput-underline:after {
    border-bottom: 2px solid #a30000;
  }
`;
