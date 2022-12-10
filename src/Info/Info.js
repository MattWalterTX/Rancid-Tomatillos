import React from "react"
import './Info.css'
import { NavLink } from 'react-router-dom'

const Info = ({ movie, showAll, makeDate }) => {

  return (
    <div className='info'>

      <h2 className='title-header'> {movie.title}</h2>
      <h3>{movie.tagline}</h3>
      <p className="movie-info">{movie.overview}</p>
      <span className="info-heading">GENRES:</span><p className="movie-info"> {movie.genres.join(', ')}</p>
      <span className="info-heading" >BUDGET:</span><p className="movie-info"> {movie.budget}</p>
      <span className="info-heading" >RELEASED:</span><p className="movie-info"> {makeDate(movie.release_date)}</p>
      <span className="info-heading" >REVENUE:</span> <p className="movie-info">{movie.revenue}</p>
      <span className="info-heading" >AVG RATING:</span><p className="movie-info">  {movie.average_rating}</p>
      <span className="info-heading">RUNTIME:</span><p className="movie-info"> {movie.runtime}</p>
      <img className="movie-photo" src={movie.backdrop_path}></img>
      <NavLink to='/'><button className='return-button' onClick={showAll}>HOME</button></NavLink>
    </div>
  ) 
   
  
}

export default Info