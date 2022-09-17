// dependency 
const express = require("express");
const app = express();
var cors = require('cors');

const userRouter = require('./router/router.user') 

app.use(cors())
app.use(express.json())


// set user route 
app.use('/user',userRouter)

// for test
app.get("/", (req, res) => {
  res.send("hello man");
});


const port = process.env.PORT || 5000;







app.listen(port, () => {
  console.log("runing curd");
});