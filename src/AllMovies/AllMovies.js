import React from 'react';
import MovieTile from '../MovieTile/MovieTile';
import SingleView from '../SingleView/SingleView';
import './AllMovies.css'

const AllMovies = ({movies}) => {
  const movieTiles = movies.movies.map(movie => {
    // console.log(movie.poster_path)
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
        <SingleView  />
      </div>
    )

}

export default AllMovies;