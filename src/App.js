import React, { Component } from 'react';
import MovieTile from './MovieTile/MovieTile'
import AllMovies from './AllMovies/AllMovies';
import movieData from './movieData';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData
    }
    
  }
  
  render() {
    return (
      <main className='App'>
        <h1> Rotten Tomitillos </h1>
        <AllMovies movies={this.state} />
      </main>
    )
  }
}

export default App;
