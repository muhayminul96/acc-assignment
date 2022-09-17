// dependency 
const express = require('express');
const { ObjectId } = require('mongodb');
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
      router.post("/save", async(req, res) => {
        console.log(req)
        const newUser = req.body;
        console.log(newUser)
        console.log("adding user", newUser);
        const result = await userCollections.insertOne(newUser)
        res.send(result)
      });



    //   delete a user 

    router.delete('/delete/:id',async(req,res) => {
        const id = req.params.id
        console.log(id)  
        const query = {_id: ObjectId(id)}
        const result = await userCollections.deleteOne(query)
        console.log(result)
        res.send(result)
      })


    // update a random user 
      router.patch("/update", async(req, res) => {
        const cursor = userCollections.find({});
        const users = await cursor.toArray()
        const num =  Math.floor(Math.random() * users.length);
        const id = users[num]._id;
        const updatedUser = req.body;
        const options = { upsert: true };
        const filter = {_id: ObjectId(id)}
        const updateDoc = {
          $set: {  
            name:updatedUser.name,
            gender:updatedUser.gender,
            contact:updatedUser.contact,
            address:updatedUser.address,
            photoUrl:updatedUser.photoUrl,
          },
        };
        const result = await userCollections.updateOne(filter,updateDoc,options);
     
        res.send(result)
  
      })
      router.patch("/bulk-update", async(req, res) => {
        result=[]
        for(const id of req.body.ids){
          
        const updatedUser = req.body.user;
        const options = { upsert: true };
        const filter = {_id: ObjectId(id)}
        const updateDoc = {
          $set: {  
            name:updatedUser.name,
            gender:updatedUser.gender,
            contact:updatedUser.contact,
            address:updatedUser.address,
            photoUrl:updatedUser.photoUrl,
          },
        };
         await result.push(userCollections.updateOne(filter,updateDoc,options));
     
        
        }

        res.send({"done":"all are updated"})
        
  
      })

    }

    

  
    
     
    finally {
  
    //   await client.close();
  
    }
  
  }
  
  run().catch(console.dir);




module.exports = router;
