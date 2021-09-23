import axios from "axios";
import styled from "styled-components";
import React, { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import { Paper, Grid } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import DeleteIcon from "@material-ui/icons/Delete";
import Drawer from "../../../components/drawer/drawer";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CustomSelect from "../../../components/generic/select/select";
import { IsMobileWidth } from "../../../components/generic/util/util";
import StateSelect from "../../../components/generic/select/stateSelect";
import CountrySelect from "../../../components/generic/select/countrySelect";
import TextEditor from "../../../components/generic/text.editor/text.editor";
import CustomInput from "../../../components/generic/custom.input/custom.input";
import CustomButton from "../../../components/generic/custom.button/custom.button";
import ImagePicker from "../../../components/generic/antdImagePicker/antdImagePicker";

export default function AddSubAdmin() {
  const [Images, setImages] = useState([]);
  const [CompanyLogo, setCompanyLogo] = useState([]);
  const [Category, setCategory] = useState(null);
  const [Price, setPrice] = useState(null);
  const [Organise, setOrganise] = useState(null);
  const [Status, setStatus] = useState(false);
  const [EnglishTitleName, setEnglishTitleName] = useState(null);
  const [subAdminEmail, setSubAdminEmail] = useState(null);
  const [Location, setLocation] = useState([]);
  const [CourseDescription, setCourseDescription] = useState("");
  const [DocumentsRequired, setDocumentsRequired] = useState("");
  const [RegistrationProceedure, setRegistrationProceedure] = useState("");
  const [LectureDetails, setLectureDetails] = useState("");
  const [FeesDetails, setFeesDetails] = useState("");
  const [TestDetails, setTestDetails] = useState("");
  const [RefundPolicy, setRefundPolicy] = useState("");
  const [CourseDescriptionArabic, setCourseDescriptionArabic] = useState("");
  const [DocumentsRequiredArabic, setDocumentsRequiredArabic] = useState("");
  const [LectureDetailsArabic, setLectureDetailsArabic] = useState("");
  const [FeesDetailsArabic, setFeesDetailsArabic] = useState("");
  const [TestDetailsArabic, setTestDetailsArabic] = useState("");
  const [RefundPolicyArabic, setRefundPolicyArabic] = useState("");
  const [RegistrationProceedureArabic, setRegistrationProceedureArabic] =
    useState("");

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
    data.append("subAdminEmail", subAdminEmail);
    data.append("courseInformationArabic", CourseDescriptionArabic);
    data.append("documentsRequiredArabic", DocumentsRequiredArabic);
    data.append("RegistrationProcedureArabic", RegistrationProceedureArabic);
    data.append("lectureDetailsArabic", LectureDetailsArabic);
    data.append("feesDetailsArabic", FeesDetailsArabic);
    data.append("testDetailsArabic", TestDetailsArabic);
    data.append("refundPolicyForOnlinePaymentsArabic", RefundPolicyArabic);
    data.append("courseInformationEnglish", CourseDescription);
    data.append("documentsRequiredEnglish", DocumentsRequired);
    data.append("RegistrationProcedureEnglish", RegistrationProceedure);
    data.append("lectureDetailsEnglish", LectureDetails);
    data.append("feesDetailsEnglish", FeesDetails);
    data.append("testDetailsEnglish", TestDetails);
    data.append("refundPolicyForOnlinePaymentsEnglish", RefundPolicy);
    const Config = {
      onUploadProgress: function (progressEvent) {
        let percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
      },
    };
    await axios
      .post(`${process.env.REACT_APP_API}/api/trainer/AddCourse`, data, Config)
      .then((res) => {
        console.log(res);
      });
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
  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  //   const [open, setOpen] = React.useState(true);
  //   const [open1, setOpen1] = React.useState(true);
  //   console.log(Location);

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
  const [country, setcountry] = useState();
  const [region, setRegion] = useState();
  return (
    <Drawer>
      <AddCourseWrapper>
        <Paper classes={{ root: "paper" }}>
          <Grid xs={12} container justify="space-between" alignItems="center">
            <div className="title">
              <a className="title backLink text-black" onClick={goBack}>
                {" "}
                <CheckCircleIcon className="icon" /> Sub-Admin
              </a>{" "}
              / Create Sub-Admin
            </div>
          </Grid>
          <Grid
            className="my-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid>
              <div className="label">
                <strong>Image</strong>
              </div>
              <Grid
                xs={12}
                md={6}
                lg={4}
                style={{ display: "flex", flexDirection: "row" }}
              >
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
                  <CustomInput
                    setValue={(a) => {
                      setEnglishTitleName(a);
                    }}
                    label="Sub-Admin Name"
                    placeholder="Sub-Admin Name"
                  />
                </div>
                <div className="name">
                  <CustomInput
                    setValue={(a) => {
                      setSubAdminEmail(a);
                    }}
                    label="Sub-Admin Email"
                    placeholder="Sub-Admin Email"
                  />
                </div>
                {/* <div className="label">
                  <strong>Description</strong>
                </div>
                <TextEditor
                  setValue={(a) => {
                    setCourseDescription(a);
                  }}
                /> */}
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
              <CustomButton onClick={submitForm}>Create Sub-Admin</CustomButton>
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
    margin-top: 10px;
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
