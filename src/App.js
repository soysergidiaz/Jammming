import React, {useState} from 'react';
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

  const addSong = () => {
    
  }

  return (
    <>
      <header>
        <h1>Ja<span>mmm</span>ing</h1>
      </header>

      <div className="search-bar">
        <SearchBar />
      </div>

      <div className='program'>
        <SearchResults songs={song} onAdd={addSong} />
        <Playlist />
      </div>
    </>
  );
}

export default App;
