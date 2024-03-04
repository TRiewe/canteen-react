import { useState } from "react";
import Scouts from "../mocks/Scouts.js";
import { Autocomplete, Box, Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";


const newScout = {
  label: "",
  firstName: "",
  lastName: "",
  ageGroup: "",
  hasAllergy: false
};

function ScoutForm() {

  const [scouts, setScouts] = useState(Scouts);
  const [scout, setScout] = useState({...newScout});
  const [isNewScout, setIsNewScout] = useState(true);



  function handleChange(event) {
    const {name, value} = event.target;

    setScout((prevScout) => ({...prevScout, [name]: value})); 
    
  }

  function handleSelect(event, scout) {

    if(scout === null) {
      scout = {...newScout};
      setIsNewScout(true);
    } else {
      setIsNewScout(false);
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
    <Box >
      <Autocomplete
        disablePortal
        id="scout-select"
        options={scouts}
        onChange={handleSelect}
        defaultValue={newScout}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Scout" />}
      />

      <Typography variant="h4">
        {isNewScout ? "Add new Scout" : "Modify Scout"}
      </Typography>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1 } }}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
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

        <ButtonGroup orientation="horizontal" size="medium" variant="outlined">
          <Button type="submit">Submit</Button>
          {!isNewScout && (
            <div>
              <Button type="submit" color="secondary">
                Permisions
              </Button>
              <Button
                type="submit"
                onClick={(e) => console.log(e.target)}
                color="error"
              >
                Delete
              </Button>
            </div>
          )}
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default ScoutForm;