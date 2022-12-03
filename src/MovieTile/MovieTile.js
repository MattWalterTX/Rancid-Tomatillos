import React from 'react';
import './MovieTile.css'

const MovieTile = ({poster}) => {
  return (
    <div className='movie-tile' >
      <img className='tile-img' src={poster} ></img>
    </div>
  )
}

export default MovieTile;