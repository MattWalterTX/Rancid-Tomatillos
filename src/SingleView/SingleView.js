import React from "react"
import PropTypes from 'prop-types';
import DetailContainer from "../DetailContainer/DetailContainer"
import "./SingleView.css"

const SingleView = ({ movie, showAll }) => {
  
  return (
    <div className='single-view'>
      <DetailContainer movie={movie} showAll={showAll}/>
    </div>
  )
}

export default SingleView
SingleView.propTypes = {
  showAll: PropTypes.func,
  movie: PropTypes.object
}