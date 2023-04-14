import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const DeleteAleart = ({ handleDelete, id }) => {
  return (
    <>
      <DialogTitle>{"Are you sure you want to delete user?"}</DialogTitle>
      {/* <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to delete user?
        </DialogContentText>
      </DialogContent> */}

      <Button color="error" onClick={() => handleDelete(id)}>
        Delete
      </Button>
    </>
  );
};

export default DeleteAleart;
