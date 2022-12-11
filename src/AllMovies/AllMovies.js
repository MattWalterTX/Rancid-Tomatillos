import React from 'react'
import MovieTile from '../MovieTile/MovieTile'
import './AllMovies.css'

const AllMovies = ({movies, showMore}) => {
  const movieTiles = movies.movies.map(movie => {

    return (
      <MovieTile 
        poster={movie.poster_path}
        id={movie.id}
        key={movie.id}
        showMore={showMore}
        title={movie.title}
      />
    )
  })

    return (
      <div className='all-movies'>
        {movieTiles}
      </div>
    )
}

export default AllMovies