import React from 'react'
import Tracklist from './Tracklist'

function SearchResults({songs}) {
  return (
    <div>

      <Tracklist songs={songs} />
      
    </div>
  )
}

export default SearchResults
