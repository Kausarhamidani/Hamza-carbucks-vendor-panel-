import React, { useState } from "react";
import Drawer from "../../../components/drawer/drawer";
import styled from "styled-components";
import { Paper, Grid, TextField } from "@material-ui/core";

import TextEditor from "../../../components/generic/text.editor/text.editor";
import Switch from "@material-ui/core/Switch";
import { IsMobileWidth } from "../../../components/generic/util/util";
import Button from "@material-ui/core/Button";
import ImagePicker from "../../../components/generic/antdImagePicker/antdImagePicker";
import Icon from "@material-ui/core/Icon";

import axios from "axios";

export default function RatingModalContant() {
  const [EnglishDescription, setEnglishDescription] = useState("");
  const mobileWidth = IsMobileWidth();

  const submitForm = async (e) => {
    e.preventDefault();
    let data = new FormData();

    data.append("EnglishDescription", EnglishDescription);

    const Config = {
      onUploadProgress: function (progressEvent) {
        let percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
      },
    };
    await axios
      .post(
        `${process.env.REACT_APP_API}/api/trainer/AddPromotion`,
        data,
        Config
      )
      .then((res) => {
        console.log(res);
      });
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
      <Grid xs={12}>
        <Grid xs={12}>
          <Paper classes={{ root: "editorPaper" }}>
            <div className="label">
              <strong>Description</strong>
            </div>

            <TextEditor
              setValue={(a) => {
                setEnglishDescription(a);
              }}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container justify="flex-end" xs={12} style={{ paddingTop: "20px" }}>
        <Grid>
          <Button variant="contained" color="primary">
            Send
          </Button>
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
    // margin-top: 30px;
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
