import React, { useState } from "react";
import {
  DialogTitle,
  Dialog,
  Button,
  DialogContent,
  DialogActions,
  DialogContentText,
  Input,
  TextField,
} from "@mui/material";
export const MuiDialog = () => {
  const [open, setOpen] = useState(false);
  const [txt, setTxt] = useState('');

  const handleSubmit = (e) => {
    setOpen(false)
    setTxt('')
    console.log(txt);
  }

  const handleCancle = (e) => {
    setOpen(false)
    setTxt('')
    // console.log(txt);
  }
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog 
      open={open}
      onClose={()=> setOpen(false)} aria-labelledby="dialog-title" aria-describedby="dialog-desc">
        <DialogTitle id="dialog-title">Authoriser Comment</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-desc">
            {/* are you sure you want to submit the test? you will not able to edit
            after submitting */}
            <TextField value={txt} sx={{Width:'500px',Height:'300px'}} onChange={(e)=> setTxt(`${e.target.value}`)}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancle}>Cancel</Button>
          <Button autoFocus onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
