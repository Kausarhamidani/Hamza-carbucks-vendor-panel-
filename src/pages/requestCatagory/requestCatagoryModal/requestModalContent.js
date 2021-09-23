import React, { useState } from "react";
import styled from "styled-components";
import { Paper, Grid, TextField, Button } from "@material-ui/core";
import TextEditor from "../../../components/generic/text.editor/text.editor";
import { IsMobileWidth } from "../../../components/generic/util/util";

export default function RequestModalContent() {
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
  };

  return (
    <CreatePromotionWrapper>
      <Grid xs={12}>
        <Grid xs={12}>
          <Paper classes={{ root: "editorPaper" }}>
            <div className="label">
              <strong>Category Description</strong>
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
        <Button variant="contained" color="primary" onClick={submitForm}>
          Send
        </Button>
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
