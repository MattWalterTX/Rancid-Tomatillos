import React from "react"
import MovieTile from "../MovieTile/MovieTile"
import Info from "../Info/Info"
import './DetailContainer.css'
import movieData from '../movieData';


const DetailContainer = ({ movie, showAll }) => {
console.log(movie)
  const makeDateDisplay = (release) => {
    const dateNums = release.split("-");
    const year = dateNums.shift();
    dateNums.push(year);
    return dateNums.join('~');
  };

  return (
    <div className='movie-container' style={{
      backgroundImage: 'url(' + movie.backdrop_path + ')'
    }}>
      <Info movie={movie} makeDate={makeDateDisplay} showAll={showAll}/>
    </div>
  )
}

export default DetailContainer