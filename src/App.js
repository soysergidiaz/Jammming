import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from './components/SearchBar.jsx';
import SearchResults from './components/SearchResults.jsx';
import Playlist from './components/Playlist.jsx';

function App() {

  const [song, setSong] = useState([]);

const [playlist, setPlaylist] = useState([]);
const [playlistTitle, setPlaylistTitle] = useState('Playlist Name');

const addSong = (song) => setPlaylist((current) => {
  if(current.some(element => element.uri === song.uri)){
    return [...current];
  } else {
  return [...current, song]}
});

const removeSong = (song) => setPlaylist((current) => current.filter(track => track !== song));

//const songsUris = playlist.map((song) => song.uri);

const [token, setToken] = useState('');
const clientID = '47dc98e7d16744ac983392be8a5f06f8';
const secretID = '60d908d5170040678d43034ea31b5a15';

useEffect(()=>{
  const urlToken = "https://accounts.spotify.com/api/token";
  const authInfo = {
      method: 'POST',
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `grant_type=client_credentials&client_id=${clientID}&client_secret=${secretID}`
  }
  fetch(urlToken, authInfo)
    .then((result) => result.json())
    .then((data) => setToken(data))
  ;
}, []);

async function getSongs(search) {
  const url = 'https://api.spotify.com/v1/search?q=' + search + '&type=track&limit=20';
  const authInfo = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token.access_token
    }
  }
  const result = await fetch(url, authInfo);
  const songs = await result.json();
  setSong(songs.tracks.items);
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
