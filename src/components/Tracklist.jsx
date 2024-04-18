import React from 'react';
import './styles/Tracklist.css';
import Track from './Track';

function Tracklist(props) {

  return (
    <div className='tracklist'>

      {props.song.map((each, index) => (
        <div key={index} className='song'>
          <Track title={each.title} author={each.author} album={each.album} key={each.id} />
          <button onClick={()=>props.onAdd(each)} className='add-button'>{props.text}</button>
        </div>
      ))}
      
    </div>
  )
}

export default Tracklist
