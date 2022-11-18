import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
export const MuiList = () => {
  return (
    <Box
      sx={{
        width: "400px",
        bgcolor: "white",
        marginTop: "20px",
      }}
    >
      <List>
        <ListItemButton d>
          <ListItem>
            <ListItemText primary="List Item 1" />
          </ListItem>
        </ListItemButton>
        <Divider />
        <ListItem>
          <ListItemText primary="List Item 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="List Item 3" />
        </ListItem>
      </List>
    </Box>
  );
};
