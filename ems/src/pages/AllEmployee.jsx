import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material//Delete";
import EditIcon from "@mui/icons-material//Edit";
import axios from "axios";
import Popup from "../components/Popup";
import UserForm from "../components/UserForm";
import DeleteAleart from "../components/DeleteAleart";

const AllEmployee = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [component, setComponent] = useState(null);

  const handleDelete = (userId) => {
    setOpen(false);
    console.log("userId:", userId);
    // Delete the user with the given userId
  };

  const handleUpdate = (user) => {
    setOpen(false);
    console.log("user:", user);
    // Show a form to update the user data
  };

  //Popup handle
  const updatePopup = (user) => {
    setOpen(true);
    setComponent(<UserForm user={user} onSubmit={handleUpdate} />);
  };
  const deletePopup = (id) => {
    setOpen(true);
    setComponent(<DeleteAleart handleDelete={handleDelete} id={id} />);
    console.log(id);
  };
  useEffect(() => {
    axios
      .get("https://emsystem.glitch.me/users")
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <>
      <Popup open={open} setOpen={setOpen}>
        {component}
      </Popup>
      <TableContainer component={Paper}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          margin={"20px 0"}
        >
          Employee List
        </Typography>
        <Table aria-label="User table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#F7D060" }}>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Hobbies</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, id) => (
              <TableRow
                key={user.id}
                style={{
                  backgroundColor: id % 2 === 0 ? "#FDF4F5" : "#F6F1E9",
                }}
              >
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.dob}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.hobbies.join(", ")}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => updatePopup(user)}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <IconButton onClick={() => deletePopup(user.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllEmployee;
