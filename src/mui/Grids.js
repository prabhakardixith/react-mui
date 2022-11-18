import { Grid,Paper } from "@mui/material";
import { display } from "@mui/system";
import React from "react";

const Grids = () => {
  return <>
  <Paper elevation={2} sx={{marginBottom:'5px',display:'flex',flexDirection:'row',height:'50px'}}>
  </Paper>
  <Paper elevation={3} sx={{padding:'20px',height:'300px',marginLeft:'5px',marginRight:'5px'}}>
    <Grid container columnSpacing={2} rowSpacing={1}>
      <Grid bgcolor='primary.light' item xs={6} >Item 1</Grid>
      <Grid bgcolor='primary.light' item xs={6}>Item 2</Grid>
      <Grid bgcolor='primary.light' item xs={6}>Item 3</Grid>
      <Grid bgcolor='primary.light' item xs={6}>Item 4</Grid>
    </Grid>
  </Paper>
  </>
};

export default Grids;
