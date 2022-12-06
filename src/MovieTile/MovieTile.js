import React from 'react';
import './MovieTile.css'

const MovieTile = ({id , poster, showMore}) => {
  return (
    <div className='movie-tile'  >
      <button className='tile-button' id={id} onClick={() => showMore(id)}><img className='tile-img' src={poster} ></img>
     </button>
    </div>
  )
}

export default MovieTile;