import React from "react"
import MovieTile from "../MovieTile/MovieTile"
import Info from "../Info/Info"
import './DetailContainer.css'
import movieData from '../movieData';


const DetailContainer = (props) => {

  const makeDateDisplay = (release) => {
    const dateNums = release.split("-");
    const year = dateNums.shift();
    dateNums.push(year);
    return dateNums.join('~');
  };

  return (
    <div className='movie-container' style={{
      backgroundImage: 'url(' + props.movie.movie.backdrop_path + ')'
    }}>
      <Info movie={props} />
    </div>
  )
}

export default DetailContainer