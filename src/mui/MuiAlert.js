import React from "react";
import { Stack, Alert,AlertTitle ,Button} from "@mui/material";
export const MuiAlert = () => {
  return (
    <Stack sx={{marginTop:'20px'}}>
      <Alert severity="error"  action={<Button color="inherit">undo</Button>}><AlertTitle>Error</AlertTitle>This is an error alert</Alert>
      <Alert severity="warning" onClose={()=> alert('close')}>This is an error alert</Alert>
      <Alert severity="success">This is an error alert</Alert>
    </Stack>
  );
};
