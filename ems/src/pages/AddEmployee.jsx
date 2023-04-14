import React, { useState } from "react";
import { Box, Typography, Avatar, CssBaseline, Container } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import UserForm from "../components/UserForm";

const theme = createTheme();

const AddEmployee = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            margin: "30px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <PersonAddAltIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register New User
          </Typography>
          <UserForm />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AddEmployee;
