import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <input type="text" placeholder="Search for a GitHub user..." />
      <button>Search</button>
      {/* Results will be displayed here */}
    </div>
  );
}

export default App;