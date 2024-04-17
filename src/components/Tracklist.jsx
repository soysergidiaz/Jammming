import React from 'react';
import './styles/Tracklist.css';
import Track from './Track';

function Tracklist({songs}) {

  return (
    <div className='tracklist'>

      {songs.map((each) => (
        <div className='song'>
          <Track title={each.title} author={each.author} album={each.album} key={each.id} />
          <button value={[each.title, each.author, each.album]} className='add-button'>+</button>
        </div>
      ))}
      
    </div>
  )
}

export default Tracklist
