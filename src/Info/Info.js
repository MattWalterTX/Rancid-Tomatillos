import React, { Component } from "react"
import './Info.css'
import { NavLink } from 'react-router-dom';

const Info = ({ movie, showAll, makeDate }) => {
  return (
    <div className='info'>
      {/* <h3>Movie Details Here</h3> */}
      <h3>Title: {movie.title}</h3>
      <h3>Average Rating: {movie.average_rating.toFixed(1)}</h3>
      <h3>Release Date: {makeDate(movie.release_date)}</h3>
      <NavLink to='/'><button className='return-button' onClick={showAll}>Return</button></NavLink>
    </div>
  )
}

export default Info