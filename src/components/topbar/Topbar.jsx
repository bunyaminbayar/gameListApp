import React, {useContext} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import UserContext from '../../context/UserContext';
import {
    Button,
    Box,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
} from "@mui/material";

export default function Topbar() {
    const { username } = useContext(UserContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News {username}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}