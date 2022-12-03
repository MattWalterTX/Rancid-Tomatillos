import React from "react"
import MovieTile from "../MovieTile/MovieTile"
import Info from "../Info/Info"
import './DetailContainer.css'
import movieData from '../movieData';


const DetailContainer = () => {

  const makeDateDisplay = (release) => {
    const dateNums = release.split("-");
    const year = dateNums.shift();
    dateNums.push(year);
    return dateNums.join('~');
  };

  return (
    <div className='movie-container' style={{
      backgroundImage: 'url(' + movieData[3].backdrop_path + ')'
    }}>
      <Info 
        title={movieData[3].title}
        rating={movieData[3].average_rating}
        release={(makeDateDisplay(movieData[3].release_date))}
        />
    </div>
  )
}

export default DetailContainer