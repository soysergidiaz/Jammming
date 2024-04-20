import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from './components/SearchBar.jsx';
import SearchResults from './components/SearchResults.jsx';
import Playlist from './components/Playlist.jsx';
import Spotify from './Spotify.js';

function App() {

const [song, setSong] = useState([]);
const [playlist, setPlaylist] = useState([]);
const [playlistTitle, setPlaylistTitle] = useState('Playlist Name');
const [userId, setUserId] = useState();

//Función para añadir canciones
const addSong = (song) => setPlaylist((current) => {
  if(current.some(element => element.uri === song.uri)){
    return [...current];
  } else {
  return [...current, song]}
});

//Función para eliminar canciones de la playlist
const removeSong = (song) => setPlaylist((current) => current.filter(track => track !== song));

// Función para obtener canciones y enviarlas al Tracklist
async function getSongs(search) {
  const canciones = await Spotify.getSongs(search);
  if (canciones) {
    setSong(canciones);
  }
}

return (
  <>
    <header>
      <h1>Ja<span>mmm</span>ing</h1>
    </header>

    <div className="search-bar">
      <SearchBar getSongs={getSongs} />
    </div>

    <div className='program'>
      <SearchResults song={song} onAdd={addSong} text="+" />
      <Playlist playlistTitle={playlistTitle} setPlaylistTitle={setPlaylistTitle} playlist={playlist} onAdd={removeSong} text="-" />
    </div>
  </>
);
}

export default App;
