import React from "react";
import { Stack,Link } from "@mui/material";
import { MuiBreadCrums } from "./MuiBreadCrums";
// import { MuiDrawer } from "./MuiDrawer";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      {/* <Link href="#" color='secondary'>Link</Link> */}
      <MuiBreadCrums/>
      {/* <MuiDrawer/> */}
    </Stack>
  );
};
