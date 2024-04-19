import React, {useState} from 'react';
import './styles/SearchBar.css';

function SearchBar(props) {

  const [search, setSearch] = useState('');

  function handleSearch(event) {
    event.preventDefault();
    props.getSongs(search);
  }

  return (
    <div>

        <h2>Busca una canción</h2>
        <form onSubmit={handleSearch}>
          <input type="text" id='songs-finder' onChange={(event)=> setSearch(event.target.value)} />
          <button type="submit">Buscar</button>
        </form>
      
    </div>
  )
}

export default SearchBar;