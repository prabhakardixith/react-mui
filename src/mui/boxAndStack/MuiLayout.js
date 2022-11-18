import React from "react";
import { Box, Stack, Grid } from "@mui/material";
const MuiLayout = () => {
  return (
    <>
      {" "}
      <Stack
        sx={{ border: "1px solid black" }}
        direction="row-reverse"
        spacing={4}
      >
        <Box
          sx={{
            height: "100px",
            width: "100px",
            padding: "16px",
            backgroundColor: "red",
            color: "white",
            "&:hover": {
              backgroundColor: "white",
              color: "red",
            },
          }}
        >
          MuiLayout
        </Box>

        <Box
          sx={{
            height: "100px",
            width: "100px",
            padding: "16px",
            backgroundColor: "purple",
            color: "white",
            "&:hover": {
              backgroundColor: "white",
              color: "red",
            },
          }}
        >
          MuiLayout
        </Box>
      </Stack>
    </>
  );
};

export default MuiLayout;
