import React from 'react';
import MovieTile from '../MovieTile/MovieTile';
import SingleView from '../SingleView/SingleView';
import './AllMovies.css'
import { Route, NavLink, Link } from 'react-router-dom';

const AllMovies = ({movies, showMore}) => {
  const movieTiles = movies.movies.map(movie => {

    return (
     
      <MovieTile 
        poster={movie.poster_path}
        id={movie.id}
        key={movie.id}
        showMore={showMore}
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