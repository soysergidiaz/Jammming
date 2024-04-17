import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar.jsx';
import SearchResults from './components/SearchResults.jsx';
import Playlist from './components/Playlist.jsx';

function App() {
  return (
    <>
      <header>
        <h1>Ja<span>mmm</span>ing</h1>
      </header>

      <div className="search-bar">
        <SearchBar />
      </div>

      <div className='program'>
        <SearchResults />
        <Playlist />
      </div>
    </>
  );
}

export default App;
