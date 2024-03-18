// BackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

function BackButton() {
  const navigate = useNavigate();
  return (
    <IconButton onClick={() => navigate(-1)} aria-label="back">
      <ArrowBackIcon />
    </IconButton>
  );
}

export default BackButton;
