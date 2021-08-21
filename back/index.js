// Toujours commencer par importer les variables d'environnement !
require('dotenv').config();
const cors = require("cors");


const express = require('express');

// on importe le router
const router = require('./router');

// un peu de config
const PORT = process.env.PORT || 5000;


const app = express();

app.use(express.static('static'));
app.use(cors("*"));
app.use(express.urlencoded({ extended: true }));
app.use(router);


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
