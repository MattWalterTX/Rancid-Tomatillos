import React, { Component } from "react"
import MovieTile from "../MovieTile/MovieTile"
import Info from "../Info/Info"
import './DetailContainer.css'
import movieData from '../movieData';

class DetailContainer extends Component {
  constructor() {
    super()
    this.state = {
      id: 0,
      title: '',
      poster_path: '',
      backdrop_path: '',
      release_date: '',
      overview: '',
      genres: [],
      budget: 0,
      revenue: 0,
      runtime: 0,
      tagline: '',
      average_rating: 0
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movie.id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log('data: ', data)
      this.setState({ 
        id: data.movie.id,
        title: data.movie.title,
        poster_path: data.movie.poster_path,
        backdrop_path: data.movie.backdrop_path,
        release_date: data.movie.release_date,
        overview: data.movie.overview,
        genres: data.movie.genres,
        budget: data.movie.budget,
        revenue: data.movie.revenue,
        runtime: data.movie.runtime,
        tagline: data.movie.tagline,
        average_rating: data.movie.average_rating
      })
    })
  }

  makeDateDisplay = (release) => {
    const dateNums = release.split("-");
    const year = dateNums.shift();
    dateNums.push(year);
    return dateNums.join('~');
  };

  render() {
    return (
      <div className='movie-container' style={{
        backgroundImage: 'url(' + this.props.backdrop_path + ')'
      }}>
        {console.log('props: ', this.props)}
        {console.log('state: ', this.state)}

        <Info movie={this.state} makeDate={this.makeDateDisplay} showAll={this.showAll}/>
      </div>
    )
  }
}

export default DetailContainer





// // update component to class comp
// const DetailContainer = ({ movie, showAll }) => {
//   const makeDateDisplay = (release) => {
//     const dateNums = release.split("-");
//     const year = dateNums.shift();
//     dateNums.push(year);
//     return dateNums.join('~');
//   };

//   // add the Thing here (compDidMount to get movie data by id)

//   return (
//     <div className='movie-container' style={{
//       backgroundImage: 'url(' + movie.backdrop_path + ')'
//     }}>
//       <Info movie={movie} makeDate={makeDateDisplay} showAll={showAll}/>
//     </div>
//   )
// }

// export default DetailContainer