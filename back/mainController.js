const dataMapper = require('./dataMapper');

const mainController = {
  homePage: (req, res) => {
    dataMapper.getAllRandomMovies( (err, results) => {
      if(err) {
        console.error(err);
        return;
      }else  {
        console.log(results);
      
        res.send({movies : results.rows});
    }
    });
  },

  moviesByName : (req, res) => {
    dataMapper.getAllMoviesByName( (err, results) => {
      if(err) {
        console.error(err);
        return;
      }else  {
        console.log(results);
      
        res.send({movies : results.rows});
    }
    });
  },

  random: (req, res) => {
    dataMapper.getOneRandomMovie( (err, results) => {
      if(err) {
        console.error(err);
        return;
      }else  {
        console.log(results);
      
        res.send({movies : results.rows});
    }
    });
  },
}

module.exports = mainController;