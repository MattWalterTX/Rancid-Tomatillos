import React, { Component } from "react"
import './Info.css'
import { NavLink } from 'react-router-dom';

const Info = ({ movie, showAll, makeDate }) => {
  // update movie details

  return (
    <div className='info'>
      <h3>Title: {movie.movie.title}</h3>
      <h3>Average Rating: {movie.movie.average_rating}</h3>
      <h3>Release Date: {makeDate(movie.movie.release_date)}</h3>
      <NavLink to='/'><button className='return-button' onClick={showAll}>Return</button></NavLink>
    </div>
  )
}

export default Info