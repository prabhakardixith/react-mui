import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import React from "react";

const MuiCard = () => {
  const cardObject = [
    {
      title: "HTML",
      desc: "HTML Training docs Each component creates a history object that keeps track of the current location (history.location) and also the previous locations in a stack.",
    },
    {
      title: "CSS",
      desc: "CSS Training docs Each component creates a history object that keeps track of the current location (history.location) and also the previous locations in a stack.",
    },
    {
    title: "JAVASCRIPT",
      desc: "JAVASCRIPT Training docs Each component creates a history object that keeps track of the current location (history.location) and also the previous locations in a stack.",
    },
    {
    title: "REACT",
      desc: "REACT Training docs Each component creates a history object that keeps track of the current location (history.location) and also the previous locations in a stack.",
    }
  ];
  return (
    <Box
      width="100%"
      // height="300px"
      sx={{
        padding:'20px 20px',
        display: "grid",
        gridTemplateColumns: "300px 300px 300px 300px",
        rowGap: "10px",
        columnGap: "10px",
      }}
    >
      {cardObject &&
        cardObject.map((m) => (
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {m.title}
              </Typography>
              <Typography
                sx={{ paddingTop: "20px" }}
                variant="body2"
                color="text.secondary"
              >
                {m.desc}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      {/* <Card >
      <CardMedia component='img' height='140' image='https://source.unsplash.com/random'/>
        <CardContent >
          <Typography variant="h5" component="div">
            React
          </Typography>
          <Typography sx={{paddingTop:'20px'}} variant="body2" color="text.secondary">
            React Training docs Each component creates a history object that
            keeps track of the current location (history.location) and also the
            previous locations in a stack.
          </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
      </Card> */}
    </Box>
  );
};

export default MuiCard;
