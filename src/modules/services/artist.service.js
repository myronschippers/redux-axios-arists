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

export {
    getArtists,
    postArtist,
};