import React from 'react'
import PropTypes from 'prop-types';
import './MovieTile.css'
import { NavLink } from 'react-router-dom'

const MovieTile = ({id , poster, showMore, title}) => {
  return (
    <div className='movie-tile'  >
      <NavLink to={`/${id}`}>
      <button className='tile-button' id={id} onClick={() => showMore(id)}><img className='tile-img' src={poster} alt={title}></img>
     </button>
      </NavLink>
    </div>
  )
}

export default MovieTile

MovieTile.propTypes = {
  id: PropTypes.number,
  poster: PropTypes.string,
  showMore: PropTypes.func,
  title: PropTypes.string
}