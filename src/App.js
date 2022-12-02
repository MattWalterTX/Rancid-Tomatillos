import React, { Component } from 'react';
import MovieTile from './MovieTile/MovieTile'
import './App.css';

class App extends Component {
  constructor() {
    super();
    
  }
  
  render() {
    return (
      <main className='App'>
        <h1> Rotten Tomitillos </h1>
        <MovieTile />
      </main>
    )
  }
}

export default App;
