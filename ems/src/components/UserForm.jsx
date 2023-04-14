import React, { useEffect, useState } from "react";
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

const UserForm = ({ user, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState({
    coding: false,
    writing: false,
    gaming: false,
    travelling: false,
  });

  useEffect(() => {
    setName(user?.name || "");
    setEmail(user?.email || "");
    setPhone(user?.phone || "");
    setDob(user?.dob || "");
    setGender(user?.gender || "");
    setHobbies({
      coding: user?.hobbies.includes("coding") || false,
      writing: user?.hobbies.includes("writing") || false,
      gaming: user?.hobbies.includes("gaming") || false,
      travelling: user?.hobbies.includes("travelling") || false,
    });
  }, [user]);

  const handleHobbiesChange = (event) => {
    setHobbies({ ...hobbies, [event.target.name]: event.target.checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, email, phone, dob, gender, hobbies, id: user.id || null });
    // console.log({ name, email, phone, dob, gender, hobbies });
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 1 }}
      padding={"40px 40px 0 40px"}
    >
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
                value="transgender"
                control={<Radio />}
                label="Transgender"
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
                    checked={hobbies.coding}
                    onChange={handleHobbiesChange}
                    name="coding"
                  />
                }
                label="Coding"
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
                    checked={hobbies.travelling}
                    onChange={handleHobbiesChange}
                    name="travelling"
                  />
                }
                label="Travelling"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {user ? "Update" : "Register"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserForm;
