import { React, useState } from "react";
import MuiButton from "./MuiButton";
import MuiCheckBox from "./MuiCheckBox";
import MuiRadio from "./MuiRadio";
import MuiSelect from "./MuiSelect";
import MuiText from "./MuiText";
import Typography from "@mui/material/Typography";
import MuiSwitch from "./MuiSwitch";

const MuiMain = ({setBodyColor,bodyColor}) => {
  return (
    <>
      <Typography variant="h4" color="primary">
        Material UI Practice Project
      </Typography>
      {/* Practice components added below */}

      <Typography variant="h4" color="primary" align="left">Switch</Typography>
      <MuiSwitch setBodyColor={setBodyColor} bodyColor={bodyColor}/>

      <Typography variant="h4" color="primary" align="left">
        Check Box
      </Typography>
      <MuiCheckBox />

      <Typography variant="h4" color="primary" align="left">
        Buttons
      </Typography>
      <MuiButton />
      <Typography variant="h4" color="primary" align="left">
        Text Box
      </Typography>
      <MuiText />
      <Typography variant="h4" color="primary" align="left">
        Select Button
      </Typography>
      <MuiSelect />
      <Typography variant="h4" color="primary" align="left">
        Radio Button
      </Typography>
      <MuiRadio />
    </>
  );
};

export default MuiMain;
