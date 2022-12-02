import React from 'react';
import MovieTile from '../MovieTile/MovieTile';
import './AllMovies.css'

const AllMovies = ({movies}) => {
  console.log(movies)
  const movieTiles = movies.movies.map(movie => {
    return (
      <MovieTile />
    )
  }) 

    return (
      <div className='all-movies'>
        {movieTiles}
      </div>
    )

}

export default AllMovies;