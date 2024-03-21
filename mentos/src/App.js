import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">
      <Router>
        <Header  backButton="/" />
        <Routes>
          <Route path="/" element={
            <>
              {/* Main Swiping Screen */}
              <TinderCards />
              <SwipeButtons />
            </>
          } />
          <Route path="/messages" element={
            <>
              {/* Messaging Screen Placeholder */}
             
              <h1>Messages</h1>
            </>
          } />
          <Route path="/profile" element={
            <>
              {/* Profile Screen Placeholder */}
             
              <h1>Profile</h1>
            </>
          } />
          {/* Further routes can be added as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
