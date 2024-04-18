import React, {useState, useCallback} from 'react';
import './App.css';
import SearchBar from './components/SearchBar.jsx';
import SearchResults from './components/SearchResults.jsx';
import Playlist from './components/Playlist.jsx';

function App() {

  const [song, setSong] = useState([{
      title: "Lonely",
      author: "Justin Bieber",
      album: "Justice",
      id: 1
    },
    {
      title: "Manifiesto",
      author: "Nach",
      album: "Un día en suburbia",
      id: 2
    },
    {
      title: "La vida (Respira el momento)",
      author: "Calle 13",
      album: "Multiviral",
      id: 3
    }
  ]);

  const [playlist, setPlaylist] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState('Playlist Name');

  const addSong = (song) => setPlaylist((current) => {
    if(current.some(element => element.id === song.id)){
      return [...current];
    } else {
    return [...current, song]}
  });

  const removeSong = (song) => setPlaylist((current) => current.filter(track => track !== song));

  return (
    <>
      <header>
        <h1>Ja<span>mmm</span>ing</h1>
      </header>

      <div className="search-bar">
        <SearchBar />
      </div>

      <div className='program'>
        <SearchResults song={song} onAdd={addSong} text="+" />
        <Playlist playlistTitle={playlistTitle} setPlaylistTitle={setPlaylistTitle} playlist={playlist} onAdd={removeSong} text="-" />
      </div>
    </>
  );
}

export default App;
