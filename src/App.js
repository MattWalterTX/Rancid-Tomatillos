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
      movies:[],
      error:null,
      selected: null
    }
    
  }

  showMore = (id) => {
    const selectedMovie = this.state.movies.find(movie => movie.id === id)
    this.setState({ selected: selectedMovie })
  }

  showAll = () => {
    console.log('SHIT SHIT SHIT')
    this.setState({ selected: null })
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((response) => response.json())
      .then((data) => { 
        this.setState({ movies: data.movies })
      })
   
  }
  
  render() {
    return (
      <main className='App'>
        <h1> Rotten Tomatillos </h1>
        {(this.state.selected) ? <SingleView movie={this.state.selected} showAll={this.showAll} /> : <AllMovies movies={this.state} showMore={this.showMore} />}
      </main>
    )
  }
}

export default App;
