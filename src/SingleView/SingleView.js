import React from "react"
import DetailContainer from "../DetailContainer/DetailContainer"
import "./SingleView.css"

const SingleView = ({props}) => {
  
  return (
    <div className='single-view' style={{
      backgroundImage: `url("https://as2.ftcdn.net/v2/jpg/02/97/55/51/1000_F_297555159_oBIxZgwuZeEPZ2BbQZdYaAdZEYF8BVdq.jpg")`
    }}>
      {/* <h2>This is the single view container</h2> */}
      <DetailContainer movie={props}/>
    </div>
  )
}

export default SingleView