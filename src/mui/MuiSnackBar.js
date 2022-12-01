import React, { useState, forwardRef } from "react";
import { Snackbar, Button, Alert, AlertProps } from "@mui/material";

const SnackbarAlert = forwardRef(function snackBarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});
export const MuiSnackBar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar anchorOrigin={{
        vertical:'bottom',
        horizontal:'center',
      }} open={open} message='form submitted sucessfully' autoHideDuration={2000} onClose={handleClose}/> */}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <SnackbarAlert name='prabhakar'>form submitted sucessfully</SnackbarAlert>
      </Snackbar>
    </>
  );
};
