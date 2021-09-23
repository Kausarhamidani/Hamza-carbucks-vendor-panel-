import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import styled from 'styled-components';
export default function RadioButtons() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
      <RadioWrapper>
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio/>} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
    </RadioWrapper>
  );
}

const RadioWrapper = styled.div`
.MuiSvgIcon-root {
    color:#A30000

}
.MuiFormLabel-root {
    color: #3C4B64;
    font-weight:bolder;
}


`