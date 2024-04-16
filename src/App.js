import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar.jsx';
import './components/comps.css';
import Tracklist from './components/Tracklist';
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
        <Tracklist />
        <Playlist />
      </div>
    </>
  );
}

export default App;
