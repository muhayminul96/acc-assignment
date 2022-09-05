// dependency 

const { MongoClient, ServerApiVersion } = require('mongodb');

// connections 
const uri = "mongodb+srv://accAdmin:KJPJ2Qea45MY9XTV@acc.0nsaajz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

module.exports = client
