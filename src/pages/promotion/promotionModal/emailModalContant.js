import React, { useState } from "react";
import styled from "styled-components";
import { Paper, Grid, FormControl, Select, MenuItem } from "@material-ui/core";
import CustomButton from "../../../components/generic/custom.button/custom.button";
import CustomInput from "../../../components/generic/custom.input/custom.input";
import TextEditor from "../../../components/generic/text.editor/text.editor";
import { IsMobileWidth } from "../../../components/generic/util/util";
import ImagePicker from "../../../components/generic/antdImagePicker/antdImagePicker";

import axios from "axios";
import DateSelect from "../../../components/generic/date.picker/antDatePicker";

export default function CreatePromotion() {
  const [DurationStartDate, setDurationStartDate] = useState("");
  const [DurationEndDate, setDurationEndDate] = useState("");
  const [PreviousPrice, setPreviousPrice] = useState("");
  const [titleEnglish, settitleEnglish] = useState("");
  const [EnglishDescription, setEnglishDescription] = useState("");
  const [Discount, setDiscount] = useState("");
  const [titleArabic, settitleArabic] = useState("");
  const [ArabicDescription, setArabicDescription] = useState("");
  const [AfterDiscountPrice, setAfterDiscountPrice] = useState("");
  const [image, setImage] = useState(null);

  const mobileWidth = IsMobileWidth();

  const submitForm = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("DurationStartDate", DurationStartDate);
    data.append("DurationEndDate", DurationEndDate);
    data.append("PreviousPrice", PreviousPrice);
    data.append("titleEnglish", titleEnglish);
    data.append("EnglishDescription", EnglishDescription);
    data.append("Discount", Discount);
    data.append("titleArabic", titleArabic);
    data.append("ArabicDescription", ArabicDescription);
    data.append("AfterDiscountPrice", AfterDiscountPrice);
    data.append("image", image);

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
  const [status, setstatus] = useState("Customers");
  const [fileList, setFileList] = useState([]);
  const handleChange = (event) => {
    setstatus(event.target.value);
  };

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
          <div className="label" style={{ textAlign: "center" }}>
            <strong>Image</strong>
          </div>
          <Grid xs={12} md={6} lg={4}>
            <ImagePicker
              type="single"
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
            <div>
              <DateSelect fullWidth />
            </div>
            <div style={{ marginTop: 20 }} className="name">
              <CustomInput
                setValue={(a) => {
                  settitleEnglish(a);
                }}
                label="Provious Price"
                placeholder="Privious Price"
              />
            </div>
            <div style={{ marginTop: 20 }} className="name">
              <CustomInput
                setValue={(a) => {
                  settitleEnglish(a);
                }}
                label="Discount"
                placeholder="Discount"
              />
            </div>
            <div style={{ marginTop: 20 }} className="name">
              <CustomInput
                setValue={(a) => {
                  settitleEnglish(a);
                }}
                label="Price After Discount"
                placeholder="Price After Discount"
              />
            </div>
            {/* <div className="name">
              <div className="label">
                <strong>Target Audiance</strong>
              </div>
              <FormControl variant="filled">
                <Select value={status} onChange={handleChange}>
                  <MenuItem value="Customers">Customers</MenuItem>
                  <MenuItem value="Vendors">Vendors</MenuItem>
                  <MenuItem value="All">All</MenuItem>
                </Select>
              </FormControl>
            </div> */}
            <div style={{ marginTop: 20 }} className="name">
              <CustomInput
                setValue={(a) => {
                  settitleEnglish(a);
                }}
                label="Promotion Title"
                placeholder="Promotion Title"
              />
            </div>
            <div className="label">
              <strong>Promotion Description</strong>
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
          <CustomButton onClick={submitForm}>Create Promotion</CustomButton>
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
