// App.js

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ArtistList from './../ArtistList/ArtistList.js';

class App extends Component {
  // Called when the (App) component is created
  state = {
    artists: [],
  }
  
  // DOM is ready
  componentDidMount() { // react Component method
    this.refreshArtists();
  }

  refreshArtists = () => {
    // just like $.ajax()
    axios({
      method: 'GET',
      url: '/artist'
    }).then((response) => {
      console.log(response);
      // response.data will be the array of artists
      this.setState({
        artists: response.data,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Famous Artists</h1>
        </header>
        <br/>
        <ArtistList refreshArtists={this.refreshArtists} artistList={this.state.artists} />
      </div>
    );
  }
}

export default App;
