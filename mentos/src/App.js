// App component
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
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <h1>Main page</h1>
            </>
          } />
          <Route path="/scoreboard" element={
            <>
              <Header backButton="/" />
              <h1>Score board</h1>
            </>
          } />
          <Route path="/messages" element={
            <>
              <Header backButton="/" />
              <h1>Messages</h1>
            </>
          } />
          <Route path="/studysessions" element={
            <>
              <Header backButton="/" />
              <h1>Study Sessions</h1>
            </>
          } />
          <Route path="/teach" element={
            <>
              <Header backButton="/" />
              <TinderCards />
              <SwipeButtons />
            </>
          } />
          <Route path="/learn" element={
            <>
              <Header backButton="/" />
              <h1>Learn</h1>
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
