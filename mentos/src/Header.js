import React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'; // Corrected icon name
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";

function Header({ backButton }) {
  const navigate = useNavigate();

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => navigate(backButton)}>
          <ArrowBackIosNewIcon fontSize="large" />
        </IconButton>
      ) : (
        <div className="header__logo">
          <h2>Tinder Clone</h2>
        </div>
      )}
      <div className="header__icons">
        <IconButton onClick={() => navigate("/messages")}>
          <ChatIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={() => navigate("/profile")}> {/* Assume /profile route will be implemented */}
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
