import React, { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageContext from '../../context/LanguageContext';
import {
  Button,
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";

export default function Topbar() {
  const { language } = useContext(LanguageContext);
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
            {language === "en" ? "English" : "Türkçe"}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}