// dependency 
const express = require('express')
const router = express.Router()
const client = require("../connections");


async function run() {

    try {
  
      const userCollections = client.db("UserDB").collection("Users");
  
        // get all user 
        router.get('/all', async(req,res) =>{
        const query = { }
  
        const cursor = userCollections.find(query);
        const users = await cursor.toArray()
        res.send(users)
      } )
    //   get a random user 
        router.get('/random', async(req,res) =>{
        const query = { }
  
        const cursor = userCollections.find(query);
        const users = await cursor.toArray()
        const num =  Math.floor(Math.random() * users.length);
        res.send(users[num])
      } )
      
      // save a user 
      app.post("/save", async(req, res) => {
        const newUser = req.body;
        console.log("adding user", newUser);
        const result = await userCollections.insertOne(newUser)
        res.send(result)
      });
     
  
    
    } finally {
  
    //   await client.close();
  
    }
  
  }
  
  run().catch(console.dir);




module.exports = router;
