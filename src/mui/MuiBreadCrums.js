import React from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
export const MuiBreadCrums = () => {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumbs" >
        <Link underline='hover' href='#'>Home</Link>
        <Link underline='hover' href='#'>Catalog</Link>
        <Link underline='hover' href='#'>Accesories</Link>
        <Typography color='text.primary'>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};
