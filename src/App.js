import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar.jsx';
import './components/comps.css';

function App() {
  return (
    <>
      <header>
        <h1>Ja<span>mmm</span>ing</h1>
      </header>

      <div className="search-bar">
        <SearchBar />
      </div>
    </>
  );
}

export default App;
