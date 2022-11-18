import React from "react";
import { Stack, Avatar } from "@mui/material";

export const MuiAvatar = () => {
  return <Stack direction="row" spacing={1}>
    <Avatar sx={{
        bgcolor:'primary.light'
    }}>BW</Avatar>
    <Avatar sx={{
        bgcolor:'success.light'
    }}>CK</Avatar>

    <Avatar src='https://randomuser.me/api/portraits/women/79.jpg'></Avatar>
    <Avatar src='https://randomuser.me/api/portraits/men/51.jpg'></Avatar>

  </Stack>;
};
