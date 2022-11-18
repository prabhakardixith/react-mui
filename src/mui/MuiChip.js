import React from "react";
import { Stack, Chip, Avatar } from "@mui/material";
export const MuiChip = () => {
  return (
    <Stack direction="row" spacing={1} sx={{ marginTop: "20px" }}>
      <Chip label="Chip" size="small" color="primary" />
      <Chip label="Chip" avatar={<Avatar>V</Avatar>} size="small" variant="outlined" color="secondary" />
    </Stack>
  );
};
