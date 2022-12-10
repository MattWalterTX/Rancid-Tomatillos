import React from "react"
import './Info.css'
import { NavLink } from 'react-router-dom';

const Info = ({ movie, showAll, makeDate }) => {

  return (
    <div className='info'>
      <h3>TITLE: {movie.title}</h3>
      <h3>{movie.overview}</h3>
      <h3>GENRES: {movie.genres.join(', ')}</h3>
      <h3>
        <div>BUDGET: {movie.budget}</div>
        <div>RELEASED: {makeDate(movie.release_date)}</div>
        <div>REVENUE: {movie.revenue}</div>
      </h3>
      <h3>
        <div>AVG RATING: {movie.average_rating}</div>
        <div>RUNTIME: {movie.runtime}</div>
      </h3>
      <h3>{movie.tagline}</h3>
      <NavLink to='/'><button className='return-button' onClick={showAll}>Return</button></NavLink>
    </div>
  )
}

export default Info