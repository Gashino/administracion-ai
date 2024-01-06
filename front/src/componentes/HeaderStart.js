import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import LoginModal from "./LogInModal";
import { useNavigate } from "react-router-dom";

const Header = ({ onLogin }) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const iconBuilding = require("../recursos/building-1062 (1).png");

  const handleClick = () => {
    setOpen(true);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <AppBar position="static" sx={{
        backgroundColor: '#fbfbf3',
        boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.5)',
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
      }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button onClick={() => handleNavigation('/home')}>
              <img src={iconBuilding} alt="Logo" height="50" />
            </Button>
          </Typography>
          <Button onClick={handleClick}
            sx={{
              color: '#2c2c2b',
              backgroundColor: 'transparent', '&:hover': { backgroundColor: 'transparent' },
              fontSize: '1.2rem'
            }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <LoginModal onLogin={onLogin} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Header;
