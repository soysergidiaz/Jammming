import React, {useState} from 'react'

function Playlist() {

  const [playlistTitle, setPlaylistTitle] = useState('Playlist Name')

  return (
    <div className='playlist'>

      <input type="text" className='playlist-title' value={playlistTitle} onChange={({target}) => setPlaylistTitle(target.value)} />
      <button type='submit'>Submit</button>
      
    </div>
  )
}

export default Playlist
