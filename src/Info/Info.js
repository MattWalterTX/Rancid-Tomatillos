import React, { Component } from "react"
import './Info.css'
import movieData from '../movieData';

const Info = ({title, rating, release}) => {

  return (
    <div>
      <h4>Movie Details Here</h4>
      <p>Title: {title}</p>
      <p>Average Rating: {rating.toFixed(1)}</p>
      <p>Release Date: {release}</p>
    </div>
  )
}

export default Info