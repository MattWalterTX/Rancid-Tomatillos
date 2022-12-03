import React from 'react';
import MovieTile from '../MovieTile/MovieTile';
import './AllMovies.css'

const AllMovies = ({movies}) => {
  const movieTiles = movies.movies.map(movie => {
    return (
      <MovieTile 
        poster={movie.poster_path}
        key={movie.id}
      />
    )
  }) 

    return (
      <div className='all-movies'>
        {movieTiles}
      </div>
    )

}

export default AllMovies;