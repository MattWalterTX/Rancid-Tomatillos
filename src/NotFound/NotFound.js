import React from "react"
import { Link } from "react-router-dom"
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>404 - Not Found!</h1>
      <h1>Please navigate back to the home page with your browser or the link below</h1>
      <Link to="/"><h2>RETURN HOME</h2></Link>
    </div>
  )
}

export default NotFound