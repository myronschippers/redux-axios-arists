// artist.router.js

const express = require('express');
const router = express.Router();
// Using a array of data on the server, we will eventually
// move this back into the database.
const artists = require('../modules/artist.data');
let nextId = artists.length;

router.delete('/:id', (req, res) => {    
    // TODO: Use filter to remove the artist
    const matchId = req.params.id;
    let foundMatch = false;
    artists = artists.filter((artist, index) => {
        if (artist.id === matchId) {
            foundMatch = true;
        }
        return artist.id !== matchId;
    });

    if (foundMatch) {
        res.sendStatus(200);
    } else {
        console.log('There was no item to delete with that idea.')
        res.sendStatus(500);
    }
});

// GET all the books
router.post('/', (req, res) => {
    console.log('In artist POST with', req.body);
    const artistToAdd = req.body;
    // add an id to the incoming artist
    artistToAdd.id = nextId;
    nextId += 1;
    artists.push(artistToAdd);
    res.send(201);
}); // END GET Route

// GET all the books
router.get('/', (req, res) => {
    res.send(artists);
}); // END GET Route

module.exports = router;