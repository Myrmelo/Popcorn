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

  addMovie: (req, res) => {
    console.log(' chui le body tabernacle !', req.body)
    dataMapper.addMovie( req.body, (err, results) => {
      if(err) {
        console.error(err);
        return;
      }else  {
        console.log(results);
      
        res.send({movies : results.rows});
    }
    });
  },

  deleteMovie: (req, res) => {
    console.log(' chui l\' id du film tabernacle !', req.params.id)
    const id = req.params.id
    dataMapper.deleteMovie( id, (err, results) => {
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