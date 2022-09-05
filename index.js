// dependency 
const express = require("express");
const app = express();
require('dotenv').config()
var cors = require('cors');
const client = require("./connections");

app.use(cors())
app.use(express.json())


const port = process.env.PORT || 5000;



async function run() {

    try {
  
      const userCollections = client.db("sample_mflix").collection("movies");
  
      // query for movies that have a runtime less than 15 minutes
  
      const query = {};
      console.log('xxxx')
  
     
  
    //   const cursor = movies.find(query, options);
  
      // print a message if no documents were found
  
    //   if ((await cursor.count()) === 0) {
  
    //     console.log("No documents found!");
  
    //   }
  
      // replace console.dir with your callback to access individual elements
  
    //   await cursor.forEach(console.dir);
  
    } finally {
  
    //   await client.close();
  
    }
  
  }
  
  run().catch(console.dir);



app.get("/", (req, res) => {
  res.send("hello man");
});

app.listen(port, () => {
  console.log("runing curd");
});