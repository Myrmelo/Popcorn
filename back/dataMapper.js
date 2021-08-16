const client = require('./database');

const dataMapper = {

    getAllRandomMovies : (callback) => {
        client.query(`SELECT * FROM "movie" ORDER BY RANDOM()`, (error, results) => {
        
            callback(error, results);
        })
    },

    getAllMoviesByName : (callback) => {
        client.query(`SELECT * FROM "movie" ORDER BY "name"`, (error, results) => {
        
            callback(error, results);
        })
    },

    getOneRandomMovie : (callback) => {
        client.query(`SELECT * FROM "movie" ORDER BY RANDOM() limit 1`, (error, results) => {
        
            callback(error, results);
        })
    },

};

module.exports = dataMapper;



