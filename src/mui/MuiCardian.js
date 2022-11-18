import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiCard from "./MuiCard";
export const MuiCardian = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}><Typography>Accordian 1</Typography></AccordionSummary>
        <AccordionDetails>
            <Typography>
            "REACT Training docs Each component creates a history object that keeps track of the current location  and also the previous locations in a stack.",
            </Typography>
            <MuiCard/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
