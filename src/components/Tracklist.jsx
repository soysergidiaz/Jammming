import React, {useState} from 'react';
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
  ])

  return (
    <div>

      <Track title={song[0].title} author={song[0].author} album={song[0].album} />
      
    </div>
  )
}

export default Tracklist
