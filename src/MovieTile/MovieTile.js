import React from 'react'
import './MovieTile.css'
import { NavLink } from 'react-router-dom'

const MovieTile = ({id , poster, showMore}) => {
  return (
    <div className='movie-tile'  >
      <NavLink to={`/${id}`}>
      <button className='tile-button' id={id} onClick={() => showMore(id)}><img className='tile-img' src={poster} ></img>
     </button>
      </NavLink>
    </div>
  )
}

export default MovieTile