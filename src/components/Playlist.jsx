import React, {useState} from 'react';
import './styles/Playlist.css';
import Tracklist from './Tracklist';

function Playlist(props) {

  return (
    <div className='playlist'>

      
      <input type="text" className='playlist-title' value={props.playlistTitle} onChange={({target}) => props.setPlaylistTitle(target.value)} />
      <Tracklist song={props.playlist} onAdd={props.onAdd} text={props.text} />
      <button type='submit' onClick={props.sendPlaylist}>Submit</button>
      
      
    </div>
  )
}

export default Playlist
