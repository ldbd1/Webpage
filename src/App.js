import './App.css';
import React from 'react';
import ConcentrationsPage from './pages/ConcentrationsPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ES from './c_ES';
import Applied from './c_applied';
import Pure from './c_pure';
import Social from './c_social';

function App() {
  return (
    <div className="App">
      <ConcentrationsPage />
      {/* <header className="App-header">
        <img src={stadium} className="App-logo" alt="logo" />
      </header> */}
    </div>
  );
}

export default App;
