import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Favorite from "@mui/icons-material/Favorite";
import Person from "@mui/icons-material/Person";
export const MuiBottomNavtigation = () => {
    const[value,setValue]= useState(0)
  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "absolute",
        bottom: 0,
      }}
      value={value}
      onChange={(e,newValue)=> setValue(newValue)}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorite" icon={<Favorite />} />
      <BottomNavigationAction label="Profile" icon={<Person />} />
    </BottomNavigation>
  );
};
