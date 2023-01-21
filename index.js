const express = require("express")

const app = express();
require('dotenv').config();
const expressRouter = require('./router/routes')
const mongoose= require('mongoose');
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use("/api/v1",expressRouter);

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB)
.then(()=>console.log('mongodb is connected to DB'))
.catch(e=>console.log(e));

app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`)  
}) 

    
       
    


