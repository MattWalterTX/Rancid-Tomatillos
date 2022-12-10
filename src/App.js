import React, { Component } from 'react'
import AllMovies from './AllMovies/AllMovies'
import SingleView from './SingleView/SingleView'
import { Route, NavLink } from 'react-router-dom'
import './App.css'

class App extends Component {
  constructor() {
    super()
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
    this.setState({ selected: null })
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((response) => response.json())
      .then((data) => { 
        this.setState({ movies: data.movies })
      })
      .catch((error) => {
        this.setState({error: 'The server is experiencing some issues please try  again later?'}) 
      });
  }
  
  render() {
    return (
      <main className='App'>
        <div style={{
      backgroundImage: `url("https://www.ruralsprout.com/wp-content/uploads/2021/04/tomato-blight-late-spoiled-720x465.jpg.webp")`
    }}>
          <img className='site-title' src='./coollogo_com-283914743.png' ></img>
      {this.state.error && <h2 className='errorMessage'>{this.state.error}</h2>}
    </div>
        <Route exact path='/' render={() => <AllMovies movies={this.state} showMore={this.showMore} />} />
        <Route exact path="/:id" render={({ match }) => {
          const movieToRender = this.state.movies.find(movie => movie.id === parseInt(match.params.id))
          return <SingleView movie={movieToRender} showAll={this.showAll} />
        }}
        />
      </main>
    )
  }       
}

export default App