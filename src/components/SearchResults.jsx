import React from 'react'
import Tracklist from './Tracklist'

function SearchResults(props) {
  return (
    <div className='search-results'>

      <Tracklist song={props.song} onAdd={props.onAdd} text={props.text} />
      
    </div>
  )
}

export default SearchResults
