const express = require('express');
const mongoose = require("mongoose");
const port = process.env.PUBLIC_PORT || 3000;
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

app.use(bodyParser.json());

const dotenv = require('dotenv');
dotenv.config();

const mongoDbUri = process.env.MongoDB_URL;

//Connect mongoDB
async function Connection() {
  await mongoose.connect(mongoDbUri);
  console.log("connected to DB");
}

app.use('/', routes);



Connection().then(() => {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
});
