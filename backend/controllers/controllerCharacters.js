const fetch = require('node-fetch')

const url = 'https://rickandmortyapi.com/api/character/'

exports.getCharacters = (req, res ) => {
    fetch(url)
    .then((response)=> response.json())
    .then(data => {
        res.send(data);

    })
    .catch(err => console.log(err))
}