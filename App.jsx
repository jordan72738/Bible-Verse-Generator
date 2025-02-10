import React from 'react';
import RandomVerse from './components/RandomVerse';
import SpecificVerse from './components/SpecificVerse';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bible Verse App</h1>
      {/* Component for fetching a random verse */}
      <RandomVerse />
      {/* Component for fetching a specific verse (John 3:16) */}
      <SpecificVerse passage="John 3:16" />
    </div>
  );
}

export default App;
