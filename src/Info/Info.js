import React, { Component } from "react"
import './Info.css'
import { NavLink } from 'react-router-dom';

const Info = ({ movie, showAll, makeDate }) => {
  // update movie details

  return (
    <div className='info'>
      <h3>Title: {movie.title}</h3>
      <h3>Average Rating: {movie.average_rating}</h3>
      <h3>Release Date: {makeDate(movie.release_date)}</h3>
      <h5>overview: {movie.overview}</h5>
      <h5>genres: {movie.genres}</h5>
      <h5>budget: {movie.budget}</h5>
      <h5>revenue: {movie.revenue}</h5>
      <h5>runtime: {movie.runtime}</h5>
      <h5>tagline: {movie.tagline}</h5>
      <NavLink to='/'><button className='return-button' onClick={showAll}>Return</button></NavLink>
    </div>
  )
}

export default Info