import { useState } from "react";
import Scouts from "../mocks/Scouts.js";
import { Autocomplete, Box, Button, Checkbox, FormControlLabel, TextField } from "@mui/material";


const newScout = {
  label: "New Scout",
  firstName: "",
  lastName: "",
  ageGroup: "",
  hasAllergy: false
};

function ScoutForm() {

  const [scouts, setScouts] = useState(Scouts);
  const [scout, setScout] = useState({...newScout});



  function handleChange(event) {
    const {name, value} = event.target;

    setScout((prevScout) => ({...prevScout, [name]: value})); 
    
  }

  function handleSelect(event, scout) {

    if(scout=== null) {
      scout = {...newScout};
    }

    setScout(scout);
    
  }

  function onSubmit(event) {
    event.preventDefault();

    console.log(scout);
    
  }

  function toggleAllergy() {
    setScout((prevScout) => ({...prevScout, hasAllergy: !prevScout.hasAllergy}));
    
  }


  return (
    <Box component="form" onSubmit={onSubmit} noValidate>
      <Autocomplete
        disablePortal
        id="scout-select"
        options={scouts}
        onChange={handleSelect}
        defaultValue={newScout}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Scout" />}
      />

      <h3>Add new Scout</h3>
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

      <FormControlLabel
        control={
          <Checkbox checked={scout.hasAllergy} onClick={toggleAllergy} />
        }
        label="Has Food Allergy?"
      />

      <Button type="submit">Submit</Button>
    </Box>
  );
}

export default ScoutForm;