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
      error:null 
    }
    
  }

  showMore = (id) => {
    const selectedMovie = this.state.movies.filter(movie => movie.id === id)
    this.setState({movies: selectedMovie})
  }

  componentDidMount = () => {
    console.log('App, componentDidMount')
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((response) => response.json())
      .then((data) => { 
        this.setState({ movies: data.movies })
        console.log('the state',this.state)
      })
      // .catch((error) => {
      //   this.setState({ error: error })
      // });
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
