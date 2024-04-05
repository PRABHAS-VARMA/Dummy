const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = process.env.PUBLIC_PORT || 3000;

const dotenv = require('dotenv');
dotenv.config();

const mongoDbUri = process.env.MongoDB_URL;

//Connect mongoDB
async function Connection() {
  await mongoose.connect(mongoDbUri);
  console.log("connected to DB");
}

app.get('/ping', (req,res)=> {
  res.json({message:"pong"});
})

Connection().then(() => {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
});
