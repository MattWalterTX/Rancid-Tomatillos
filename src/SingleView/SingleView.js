import React from "react"
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