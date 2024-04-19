import React from 'react';
import './styles/Tracklist.css';
import Track from './Track';

function Tracklist(props) {

  return (
    <div className='tracklist'>

      {console.log(props.song)}

      {props.song.map((each, index) => (
        <div key={index} className='song'>
          <Track title={each.data.name} author={each.data.artists.items[0].profile.name} album={each.data.albumOfTrack.name} uri={each.data.uri} />
          <button onClick={()=>props.onAdd(each)} className='add-button'>{props.text}</button>
        </div>
      ))}
      
    </div>
  )
}

export default Tracklist
