import React, { useState } from "react";
import Drawer from "../../../components/drawer/drawer";
import styled from "styled-components";
import { Paper, Grid } from "@material-ui/core";
import CustomButton from "../../../components/generic/custom.button/custom.button";
import CustomSelect from "../../../components/generic/select/select";
import CustomInput from "../../../components/generic/custom.input/custom.input";
import TextEditor from "../../../components/generic/text.editor/text.editor";
import Switch from "@material-ui/core/Switch";
import { IsMobileWidth } from "../../../components/generic/util/util";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import ImagePicker from "../../../components/generic/antdImagePicker/antdImagePicker";
import { useHistory } from "react-router-dom";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { Link } from "react-router-dom";

export default function ServiceEdit() {
  const [Images, setImages] = useState([]);
  const [CompanyLogo, setCompanyLogo] = useState(null);
  const [Category, setCategory] = useState(null);
  const [Price, setPrice] = useState(null);
  const [Organise, setOrganise] = useState(null);
  const [Status, setStatus] = useState(false);
  const [EnglishTitleName, setEnglishTitleName] = useState(null);
  const [CourseDescription, setCourseDescription] = useState("");
  const [DocumentsRequired, setDocumentsRequired] = useState("");
  const [RegistrationProceedure, setRegistrationProceedure] = useState("");
  const [blob, setBlob] = useState(null);
  const [blob2, setBlob2] = useState(null);
  const [inputImg, setInputImg] = useState("");
  const [inputImg2, setInputImg2] = useState("");
  const [hidden, setHidden] = useState(false);
  const [hidden2, setHidden2] = useState(false);
  const [imgFile, setImgFile] = useState(null);
  const [imgFile2, setImgFile2] = useState(null);
  const [fileName, setFileName] = useState("Profile Picture");
  const [fileName2, setFileName2] = useState("Company Logo");
  const [Location, setLocation] = useState([]);

  const mobileWidth = IsMobileWidth();

  const image = (e) => {
    setImages([...Images, ...e.target.files]);
  };
  console.log(Images);
  const companyLogo = (e) => {
    let file = e.target.files[0];
    setCompanyLogo([file]);
  };
  const category = (a) => {
    setCategory(a);
  };
  const organise = (a) => {
    setOrganise(a);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("trainer", "608a4b9031ecd50015779534");
    for (const file of Images) {
      data.append("courseImagesPath", file);
    }
    data.append("companyLogoImagePath", CompanyLogo[0]);

    data.append("category", "608a4b9031ecd50015779534");
    data.append("activeStatus", Status);
    data.append("price", Price);
    data.append("nameEnglish", EnglishTitleName);
    data.append("courseInformationEnglish", CourseDescription);
    data.append("documentsRequiredEnglish", DocumentsRequired);
    data.append("RegistrationProcedureEnglish", RegistrationProceedure);
    const Config = {
      onUploadProgress: function (progressEvent) {
        let percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        // that.setState({ filesProgress: percentCompleted });
      },
    };
    await axios
      .post(`${process.env.REACT_APP_API}/api/trainer/AddCourse`, data, Config)
      .then((res) => {
        console.log(res);
      });
  };

  const getBlob = (blob) => {
    setBlob(blob);
  };
  const getBlob2 = (blob2) => {
    setBlob2(blob2);
  };
  const uploadimage = async (e) => {
    setHidden(true);
  };
  const uploadimage2 = async (e) => {
    setHidden2(true);
  };
  const onFileChange = (e) => {
    // setFileUrl(window.URL.createObjectURL(e.target.files[0]));
    const file = e.target.files[0];
    setImgFile(file);
    const reader = new FileReader();
    setHidden(false);

    reader.addEventListener(
      "load",
      () => {
        setInputImg(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
    setFileName(file.name);
  };
  const onFileChange2 = (e) => {
    // setFileUrl(window.URL.createObjectURL(e.target.files[0]));
    const file = e.target.files[0];
    setImgFile2(file);
    const reader = new FileReader();
    setHidden2(false);

    reader.addEventListener(
      "load",
      () => {
        setInputImg2(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
    setFileName2(file.name);
  };

  const handleAddClick = () => {
    Location.length < 10 ? (
      setLocation([
        ...Location,
        { country: "", address: "", state: "", area: "" },
      ])
    ) : (
      <div></div>
    );
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...Location];
    list.splice(index, 1);
    console.log(index);
    console.log(list);
    setLocation(list);
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...Location];
    list[index][name] = value;
    setLocation(list);
  };

  //   console.log(Location);
  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };

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
    setFileList(newFileList);
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
  return (
    <Drawer>
      <AddCourseWrapper>
        <Paper classes={{ root: "paper" }} direction="row">
          <Grid xs={12} container justify="space-between" alignItems="center">
            <div className="title">
              <Link to="/myservice" className="title backLink text-black">
                <LocalOfferIcon className="icon" /> My Services
              </Link>{" "}
              / Edit Service
            </div>
          </Grid>
          <Grid
            className="my-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid>
              <div className="label">
                <strong>Service Image</strong>
              </div>
              <Grid xs={12} md={6} lg={4}>
                <ImagePicker
                  fileList={fileList}
                  setFileList={setFileList}
                  onChange={onChange}
                  onPreview={onPreview}
                  style={{ textAlign: "center" }}
                />
              </Grid>
              <label htmlFor="contained-button-file"></label>
            </Grid>
            <Grid>
              <div className="label">
                <strong>Company Logo</strong>
              </div>
              <Grid xs={12} md={6} lg={4}>
                <ImagePicker
                  fileList={fileList1}
                  setFileList={setFileList1}
                  onChange={onChange1}
                  onPreview={onPreview1}
                  style={{ textAlign: "center" }}
                />
              </Grid>
              <label htmlFor="contained-button-file"></label>
            </Grid>
          </Grid>

          <Grid xs={12} container style={{ paddingTop: "10px" }}>
            <Grid xs={12} md={4} lg={3}>
              <CustomSelect
                category={(a) => category(a)}
                label="Select Category"
                defaultOption="Select Category"
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
              <CustomInput
                setValue={(a) => {
                  setPrice(a);
                }}
                placeholder="Enter Price"
                label="Price"
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
              <CustomSelect
                category={(a) => organise(a)}
                label="Organized By"
                defaultOption="Organized By"
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
              <Switch
                onChange={(e) => {
                  setStatus(!Status);
                }}
              />
            </Grid>
          </Grid>

          {Location.map((L, index) => {
            return (
              <Grid xs={12} container style={{ paddingTop: "10px" }}>
                <Grid
                  container
                  justify="flex-end"
                  style={{ position: "relative", top: 25 }}
                  xs={12}
                >
                  <DeleteIcon onClick={() => handleRemoveClick(index)} />
                </Grid>
                <Grid xs={12} md={4} lg={3}>
                  <CustomSelect
                    category={(a) => category(a)}
                    label="Country*"
                    defaultOption="Select Country"
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
                  <CustomInput
                    setValue={(a) => {
                      setPrice(a);
                    }}
                    placeholder="Address*"
                    label="Address"
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
                  <CustomInput
                    setValue={(a) => {
                      setPrice(a);
                    }}
                    placeholder="State*"
                    label="State"
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
                  <CustomInput
                    setValue={(a) => {
                      setPrice(a);
                    }}
                    placeholder="Area*"
                    label="Area"
                  />
                </Grid>
              </Grid>
            );
          })}

          <Grid
            container
            justify="flex-start"
            xs={12}
            style={{ paddingTop: "20px" }}
          >
            <Grid>
              <CustomButton onClick={handleAddClick}>Add Location</CustomButton>
            </Grid>
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
                    setValue={(a) => {
                      setEnglishTitleName(a);
                    }}
                    label="Service Name"
                    placeholder="Service Name"
                  />
                </div>
                <div className="label">
                  <strong> Description</strong>
                </div>
                <TextEditor
                  setValue={(a) => {
                    setCourseDescription(a);
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
          <Grid
            container
            justify="flex-end"
            xs={12}
            style={{ paddingTop: "20px" }}
          >
            <Grid>
              <CustomButton onClick={submitForm}>Update Service</CustomButton>
            </Grid>
          </Grid>
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
    background-color: grey;
    padding: 10px;
    width: 100%;
  }
`;
