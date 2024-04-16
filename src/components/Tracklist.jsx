import React, {useState, useEvent} from 'react';
import Track from './Track';

function Tracklist() {

  const [song, setSong] = useState([{
      title: "Lonely",
      author: "Justin Bieber",
      album: "Justice",
      id: 1
    },
    {
        title: "Manifiesto",
        author: "Nach",
        album: "Un día en suburbia",
        id: 2
    }
  ]);

  return (
    <div className='tracklist'>

      {song.map((each) => (
        <Track title={each.title} author={each.author} album={each.album} key={each.id} />
      ))}
      
    </div>
  )
}

export default Tracklist
