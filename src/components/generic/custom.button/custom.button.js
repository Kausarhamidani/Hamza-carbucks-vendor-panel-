import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
export default function CustomButton(props) {
  return (
    <ButtonWrapper>
      <Button
        classes={{ root: "btn" }}
        variant="contained"
        onClick={props.onClick}
        style={{ backgroundColor: "grey" }}
      >
        <span>{props.children}</span>
      </Button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  .btn {
    width: 100%;
    background: grey;
    color: white;
  }
`;
