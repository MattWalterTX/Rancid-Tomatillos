import React from "react"
import DetailContainer from "../DetailContainer/DetailContainer"
import "./SingleView.css"

const SingleView = ({props}) => {
  


  return (
    <div className='single-view' >
      <h2>This is the single view container</h2>
      <DetailContainer movie={props}/>
    </div>
  )
}

export default SingleView