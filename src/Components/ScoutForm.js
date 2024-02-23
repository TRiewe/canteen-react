import { useState } from "react";
import { Box, Button, Checkbox, FormControlLabel, TextField } from "@mui/material";

function ScoutForm() {

  const [scout, setScout] = useState({
    firstName: "",
    lastName: "",
    ageGroup: "",
    hasAllergy: false
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setScout((prevScout) => ({...prevScout, [name]: value})); 
    
  }

  function onSubmit(event) {
    event.preventDefault();

    console.log(scout);

    // TODO send data to database
    
  }

  function toggleAllergy() {

    setScout((prevScout) => ({...prevScout, hasAllergy: !prevScout.hasAllergy}));
    
  }


  return (
    <Box component="form" onSubmit={onSubmit} noValidate>
      <TextField
        required
        fullWidth
        id="firstName"
        label="First Name"
        name="firstName"
        value={scout.firstName}
        onChange={handleChange}
      />

      <TextField
        required
        fullWidth
        id="lastName"
        label="Last Name"
        name="lastName"
        value={scout.lastName}
        onChange={handleChange}
      />

      <TextField
        required
        fullWidth
        id="ageGroup"
        label="Age Group"
        name="ageGroup"
        value={scout.ageGroup}
        onChange={handleChange}
      />

      <FormControlLabel control={<Checkbox checked={scout.hasAllergy} onClick={toggleAllergy} />} label="Has Food Allergy?" />

      <Button type="submit">Submit</Button>
    </Box>
  );
}

export default ScoutForm;