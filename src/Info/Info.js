import React, { Component } from "react"
import './Info.css'

const Info = ({title, rating, release}) => {

  

  return (
    <div className='info'>
      <h3>Movie Details Here</h3>
      <h3>Title: {title}</h3>
      <h3>Average Rating: {rating.toFixed(1)}</h3>
      <h3>Release Date: {release}</h3>
    </div>
  )
}

export default Info