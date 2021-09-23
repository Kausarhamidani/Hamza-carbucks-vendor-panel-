import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import NativeSelect from "@material-ui/core/NativeSelect";
import styled from "styled-components";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

export default function StateSelect(props) {
  const { label, defaultOption, country, onChange, region, setRegion } = props;
  const category = (a) => {
    props.category(a);
  };

  return (
    <SelectWrapper>
      <div className="label">
        <strong>{label}</strong>
      </div>
      <FormControl classes={{ root: "form" }}>
        <RegionDropdown
          blankOptionLabel="No country selected"
          defaultOptionLabel="Now select a region"
          country={country}
          value={region}
          onChange={(val) => onChange(val)}
          classes={{ root: "select" }}
          style={{
            padding: "7px",
            borderColor: "#A30000",
            color: "black",
            fontSize: "16px",
          }}
        />
      </FormControl>
    </SelectWrapper>
  );
}
const SelectWrapper = styled.div`
  width: 100%;
  .label {
    color: #3c4b64;
    padding-bottom: 10px;
  }
  .form {
    width: 100%;
    color: #495057;
  }
  .select {
    border: 1px solid #a30000;
    padding-left: 10px;
  }
  .MuiInput-underline:before {
    content: none;
    border-bottom: 0px;
  }
  .MuiInput-underline:after {
    border-bottom: 0px;
  }
  .heading {
  }
`;
