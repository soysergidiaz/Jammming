import React, {useState} from 'react';
import './styles/Playlist.css';
import Tracklist from './Tracklist';

function Playlist(props) {

  const [playlistTitle, setPlaylistTitle] = useState('Playlist Name');

  return (
    <div className='playlist'>

      <input type="text" className='playlist-title' value={props.playlistTitle} onChange={({target}) => props.setPlaylistTitle(target.value)} />
      <Tracklist song={props.playlist} onAdd={props.onAdd} text={props.text} />
      <button type='submit'>Submit</button>
      
    </div>
  )
}

export default Playlist
