import React from 'react'

function Track(props) {
  return (
    <div className="track">

      <h2>{props.title}</h2>
      <p>{props.author} | {props.album}</p>
      
    </div>
  )
}

export default Track
