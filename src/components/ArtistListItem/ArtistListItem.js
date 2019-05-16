// ArtistListItem.js

import React, { Component } from 'react';
import { deleteArtist } from '../../modules/services/artist.service';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class ArtistListItem extends Component {
    deleteArtist = () => {
        deleteArtist(this.props.artist.id)
            .then((response) => {
                this.props.dispatch({
                    type: 'ADD_ARTISTS_LIST',
                    payload: response.data,
                })
            });
    }

    render() {
        return (
            <tr>
                <td>{this.props.artist.name}</td>
                <td><button onClick={this.deleteArtist}>DELETE</button></td>
            </tr>
        );
    }
}

export default connect(mapReduxStateToProps)(ArtistListItem);
