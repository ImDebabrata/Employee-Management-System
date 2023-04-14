import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormGroup,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
} from "@mui/material";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState({
    reading: false,
    writing: false,
    gaming: false,
    cooking: false,
  });

  const handleHobbiesChange = (event) => {
    setHobbies({ ...hobbies, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, phone, dob, gender, hobbies });
  };
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            label="Phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="DOB"
            type="date"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Hobbies</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={hobbies.reading}
                    onChange={handleHobbiesChange}
                    name="reading"
                  />
                }
                label="Reading"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={hobbies.writing}
                    onChange={handleHobbiesChange}
                    name="writing"
                  />
                }
                label="Writing"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={hobbies.gaming}
                    onChange={handleHobbiesChange}
                    name="gaming"
                  />
                }
                label="Gaming"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={hobbies.cooking}
                    onChange={handleHobbiesChange}
                    name="cooking"
                  />
                }
                label="Cooking"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserForm;
