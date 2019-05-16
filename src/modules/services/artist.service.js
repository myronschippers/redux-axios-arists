import axios from 'axios';

const getArtists = () => {
    // just like $.ajax()
    return axios({
        method: 'GET',
        url: '/artist'
    });
}

const postArtist = (artistObject) => {
    return axios.post('/artist', artistObject);
}

const deleteArtist = (artistId) => {
    return axios({
        method: 'DELETE',
        url: `/artist/${artistId}`
    }).then((response) => {
        return getArtists();
    });
} 

export {
    getArtists,
    postArtist,
    deleteArtist,
};