import React from 'react';
import './styles/Track.css';

function Track(props) {
  return (
    <div className="track">

      <div className="data">
        <h2>{props.title}</h2>
        <p>{props.author} | {props.album}</p>
      </div>

    </div>
  )
}

export default Track
