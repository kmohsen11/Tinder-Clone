import React from "react";
import "./Header.css";
import IconButton from '@mui/material/IconButton';
function Header() {
  return (
    <div className="header">  
        <IconButton>
        <h1 style={{ fontSize: '1rem', margin: 0 }}>Main page</h1>
      </IconButton>

      <IconButton>
        <h1 style={{ fontSize: '1rem', margin: 0 }}>Score board</h1>
      </IconButton>

      <IconButton>
        <h1 style={{ fontSize: '1rem', margin: 0 }}>Messages</h1>
      </IconButton>

      <IconButton>
        <h1 style={{ fontSize: '1rem', margin: 0 }}>Study Sessions</h1>
      </IconButton>

      <IconButton>
        <h1 style={{ fontSize: '1rem', margin: 0 }}>Teach</h1>
      </IconButton>

      <IconButton>
        <h1 style={{ fontSize: '1rem', margin: 0 }}>Learn</h1>
      </IconButton>

      <IconButton>
        <img 
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/2560px-Dunder_Mifflin%2C_Inc.svg.png" 
          alt="Tempo" 
          style={{ height: '50px' }} // Adjust size as needed
        />
      </IconButton>

        </div>
  );
} 
export default Header;
