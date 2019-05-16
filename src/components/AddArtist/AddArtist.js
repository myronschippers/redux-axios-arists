import React, { Component } from 'react';
import { postArtist, getArtists } from '../../modules/services/artist.service';
import {connect} from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

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
        postArtist(artistObject)
            .then((response) => {
                getArtists()
                    .then((response) => {
                        this.props.dispatch({
                            type: 'ADD_ARTISTS_LIST',
                            payload: response.data
                        });

                        // navigate to list
                        this.props.history.push('/');
                    })
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
