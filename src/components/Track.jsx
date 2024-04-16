import React from 'react'

function Track(props) {
  return (
    <div className="track">

      <div className="data">
        <h2>{props.title}</h2>
        <p>{props.author} | {props.album}</p>
      </div>

      <button className='add-button'>+</button>

      
    </div>
  )
}

export default Track
