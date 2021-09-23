import React from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
export default function CustomInput(props) {
  const { placeholder, label, disabled, type } = props;

  return (
    <InputWrapper>
      <form>
        <div className="label">
          <strong>{label}</strong>
        </div>
        <div>
          <TextField
            // onChange={(e) => {
            //   props.setValue(e.target.value);
            // }}
            disabled={disabled}
            type={type}
            required
            id="standard-required"
            placeholder={placeholder}
            classes={{ root: "input" }}
          />
        </div>
      </form>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  .input {
    border: 1px solid #a30000;
    padding: 0px 9px;
  }
  .label {
    color: #3c4b64;
    padding-bottom: 10px;
  }
  .MuiInputBase-input::-webkit-input-placeholder {
    color: black;
    opacity: 1;
  }
  .MuiFormControl-root {
    width: 100%;
  }
  .MuiInput-underline:before {
    content: none;
    border-bottom: 0px;
  }
  .MuiInput-underline:after {
    border-bottom: 0px;
  }
`;
