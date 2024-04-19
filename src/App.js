import React, {useState, useCallback} from 'react';
import './App.css';
import SearchBar from './components/SearchBar.jsx';
import SearchResults from './components/SearchResults.jsx';
import Playlist from './components/Playlist.jsx';

function App() {

  const [song, setSong] = useState([]);

const [playlist, setPlaylist] = useState([]);
const [playlistTitle, setPlaylistTitle] = useState('Playlist Name');

const addSong = (song) => setPlaylist((current) => {
  if(current.some(element => element.data.uri === song.data.uri)){
    return [...current];
  } else {
  return [...current, song]}
});

const removeSong = (song) => setPlaylist((current) => current.filter(track => track !== song));

//const songsUris = playlist.map((song) => song.uri);

async function getSongs(search) {

  const url = `https://spotify23.p.rapidapi.com/search/?q=${search}&type=tracks&offset=0&limit=20&numberOfTopResults=5`;
  const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '590f718923msh0ba43159ed0cecep1662f1jsn5c9b843806f6',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSong(result.tracks.items);
  } catch (error) {
      console.log(`Ha habido un error: ${error}`);
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
