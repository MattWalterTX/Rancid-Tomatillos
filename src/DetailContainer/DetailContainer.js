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
      backgroundImage: 'url(' + props.backdrop_path + ')'
    }}>
      <Info 
        title={props.title}
        rating={props.average_rating}
        release={(makeDateDisplay(props.release_date))}
        />
    </div>
  )
}

export default DetailContainer