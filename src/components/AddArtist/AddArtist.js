import React, { Component } from 'react';
import { postArtist, getArtists } from '../../modules/services/artist.service';
import {connect} from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import axios from 'axios';

class AddArtist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            enteredName: { name: '' },
        }
    }

    changeName = (event) => {
        const inputValue = event.target.value;
        console.log(inputValue);
        this.setState({
            enteredName: { name: inputValue },
        })
    }

    addArtist = (event) => {
        this.postNewArtist(this.state.enteredName);
    }

    postNewArtist(artistObject) {
        axios.post('/artist', artistObject)
            .then((response) => {
                // TODO - Get a fresh list of the artist from sever API
                // -- Need access to the get method from App.js

                // navigate to list page
                this.props.history.push('/');
            })
            .catch((err) => {
                alert('There was an error saving your artist.')
            });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Artist Name"
                    onChange={this.changeName}
                />
                <button onClick={this.addArtist}>Add Artist</button>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(AddArtist);
