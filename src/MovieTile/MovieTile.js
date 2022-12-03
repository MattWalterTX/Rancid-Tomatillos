import React from 'react';
import './MovieTile.css'

const MovieTile = ({poster}) => {
  return (
    <div className='movie-tile' >
      <img className='tile-img' src={poster} width='100' height='300'></img>
      
    </div>
  )
}

export default MovieTile;