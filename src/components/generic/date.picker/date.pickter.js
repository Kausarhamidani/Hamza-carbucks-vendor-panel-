import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width:"100%"
  },
  textField: {
    width: "100%",
    
  },
}));

export default function DatePicker() {
  const classes = useStyles();

  return (
    <DateWrapper>
       <div className="label">
                <strong>
              Date of Birth
                </strong>
            </div>
    <form className={classes.container} noValidate>
      <TextField 
        id="date"
        type="date"
        defaultValue="2017-05-24"
        classes={{root:"input"}}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    </DateWrapper>
  );
}


const DateWrapper = styled.div`
.input{
    border:1px solid #A30000;
    padding:0px 9px;
}
.label{
    color:#3C4B64;
    padding-bottom:10px;
}
.MuiInputBase-input::-webkit-input-placeholder{
    color: black;
    opacity:1;
}
.MuiFormControl-root {
    width:100%;
}
.MuiInput-underline:before{
    content:none;
    border-bottom:0px;
}
.MuiInput-underline:after {
    border-bottom:0px;
}

`