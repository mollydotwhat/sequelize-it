const express = require('express');
const routes = require('./routes');
const sequelize = require('./sequelize');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
const okToSync = process.env.NODE_ENV === "production" ? false : true;
sequelize.sync({ force: okToSync }).then(() => {
  console.log(`App listening on port ${PORT}!`);
});

