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
    // console.log('App, componentDidMount')
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((response) => response.json())
      .then((data) => { 
        this.setState({ movies: data.movies })

        // console.log('the state',this.state)

      })
      .catch((error) => {
        this.setState({error: 'The server is experincing some issues please try  again later?'}) 
      });
  }
  
  render() {
    return (
      <main className='App'>
        <h1> Rotten Tomitillos </h1>

        {/* <AllMovies movies={this.state} showMore={this.showMore} /> */}
        {(this.state.selected) ? <SingleView movie={this.state.selected} showAll={this.showAll} /> : <AllMovies movies={this.state} showMore={this.showMore} />}

      </main>
    )
  }
}

export default App;
