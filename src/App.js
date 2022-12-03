import React, { Component } from 'react';
import MovieTile from './MovieTile/MovieTile'
import AllMovies from './AllMovies/AllMovies';
import SingleView from './SingleView/SingleView';
import movieData from './movieData';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData
    }
    
  }

  showMore = (id) => {
    const selectedMovie = this.state.movies.filter(movie => movie.id === id)
    this.setState({movies: selectedMovie})
  }
  
  render() {
    return (
      <main className='App'>

        <h1> Rotten Tomitillos </h1>
        <AllMovies movies={this.state} showMore={this.showMore} />

      </main>
    )
  }
}

export default App;
