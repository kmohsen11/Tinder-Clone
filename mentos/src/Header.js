import React from "react";
import "./Header.css";
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBack";

function Header({ backButton }) {
  const navigate = useNavigate();
  
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => navigate(backButton)}>
          <ArrowBackIosIcon fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/2560px-Dunder_Mifflin%2C_Inc.svg.png"
            alt="Tempo"
            style={{ height: '50px' }}
          />
        </IconButton>
      )}

      <Link to="/">
        <IconButton>
          <h1 style={{ fontSize: '1rem', margin: 0 }}>Main page</h1>
        </IconButton>
      </Link>

      <Link to="/scoreboard">
        <IconButton>
          <h1 style={{ fontSize: '1rem', margin: 0 }}>Score board</h1>
        </IconButton>
      </Link>

      <Link to="/messages">
        <IconButton>
          <h1 style={{ fontSize: '1rem', margin: 0 }}>Messages</h1>
        </IconButton>
      </Link>

      <Link to="/studysessions">
        <IconButton>
          <h1 style={{ fontSize: '1rem', margin: 0 }}>Study Sessions</h1>
        </IconButton>
      </Link>

      <Link to="/teach">
        <IconButton>
          <h1 style={{ fontSize: '1rem', margin: 0 }}>Teach</h1>
        </IconButton>
      </Link>

      <Link to="/learn">
        <IconButton>
          <h1 style={{ fontSize: '1rem', margin: 0 }}>Learn</h1>
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
