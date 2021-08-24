const client = require('./database');

const dataMapper = {

    getAllRandomMovies : (callback) => {
        client.query(`SELECT movieid FROM "movie" ORDER BY RANDOM()`, (error, results) => {
        
            callback(error, results);
        })
    },

    getAllMoviesByName : (callback) => {
        client.query(`SELECT movieid FROM "movie" ORDER BY "name"`, (error, results) => {
        
            callback(error, results);
        })
    },

    getOneRandomMovie : (callback) => {
        client.query(`SELECT "movieid" FROM "movie" ORDER BY RANDOM() limit 1`, (error, results) => {
        
            callback(error, results);
        })
    },

   addMovie : (movieid, callback) => {
        console.log(Object.keys(movieid)[0])
        client.query(`INSERT INTO "movie" (movieid) VALUES ($1)`,[Object.keys(movieid)[0]], (error, results) => {
        
            callback(error, results);
        })
    },

    deleteMovie : (movieid, callback) => {
        console.log(movieid)
        client.query(`DELETE FROM "movie"  WHERE "movieid" = $1`,[movieid], (error, results) => {
        
            callback(error, results);
        })
    },
};

module.exports = dataMapper;



