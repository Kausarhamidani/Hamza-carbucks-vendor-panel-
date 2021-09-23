import React, { useState } from "react";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

export default function ProductFilter() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="Ten">Ten</MenuItem>
          <MenuItem value="Twenty">Twenty</MenuItem>
          <MenuItem value="Thirty">Thirty</MenuItem>
          <MenuItem value="Fourty">Fourty</MenuItem>
          <MenuItem value="Fifty">Fifty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
