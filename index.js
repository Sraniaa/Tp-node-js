// index.js

const express = require('express');
const bodyParser = require('body-parser');
const voituresRoutes = require('./routes/voitures'); // Importez les routes des voitures

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Utilisez les routes des voitures
app.use('/voitures', voituresRoutes);

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
