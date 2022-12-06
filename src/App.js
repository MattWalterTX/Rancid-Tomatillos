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
      .catch((error) => {
        this.setState({error: 'The server is experincing some issues please try  again later?'}) 
      });

  }
  
  render() {
    return (
      <main className='App'>
        <div  style={{
      backgroundImage: `url("https://www.ruralsprout.com/wp-content/uploads/2021/04/tomato-blight-late-spoiled-720x465.jpg.webp")`
    }}>
      <p className='title'>Rancid Tomatillos</p>
    </div>
        {(this.state.selected) ? <SingleView movie={this.state.selected} showAll={this.showAll} /> : <AllMovies movies={this.state} showMore={this.showMore} />}
      </main>
    )
  }
}

export default App;
