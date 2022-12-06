import React, { Component } from "react"
import './Info.css'

const Info = ( props, showAll ) => {
  return (
    <div className='info'>
      <h3>Movie Details Here</h3>
      <h3>Title: {props.movie.movie.movie.title}</h3>
      <h3>Average Rating: {props.movie.movie.movie.average_rating.toFixed(1)}</h3>
      <h3>Release Date: {props.movie.movie.movie.release_date}</h3>
      <button className='return-button' onClick={() => showAll}>Return</button>
    </div>
  )
}

export default Info