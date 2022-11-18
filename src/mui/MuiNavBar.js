import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useState } from "react";

export const MuiNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ORGANICSTORE
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button
            color="inherit"
            id="resources-button"
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            aria-controls={open ? "resources-menu" : undefined}
          >
            Resources
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>

        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal:'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal:'right'
          }}
        >
          <MenuItem onClick={() => setAnchorEl(null)}>Blog</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Podcat</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
