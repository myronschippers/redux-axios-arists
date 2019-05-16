// App.js

import React, { Component } from 'react';
import './App.css';
import ArtistList from './../ArtistList/ArtistList.js';
import {connect} from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { HashRouter as Router, Route } from "react-router-dom";
import AddArtist from '../AddArtist/AddArtist';
import { getArtists } from '../../modules/services/artist.service';

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
    getArtists()
      .then((response) => {
        console.log(response);
        // response.data will be the array of artists
        this.props.dispatch({
          type: 'ADD_ARTISTS_LIST',
          payload: response.data,
        })
        // this.setState({
        //   artists: response.data,
        // });
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Famous Artists</h1>
          </header>
          <br/>
          <Route exact path="/" component={ArtistList} />
          <Route path="/add-artist" component={AddArtist} />
        </div>
      </Router>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
