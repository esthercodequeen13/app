const express = require('express')
require('dotenv/config')

//creating an express app
const app= express()
//HTTP Hyper Text transfer Protocol

//GET method



app.get('/', (req,res)=>{
    res .send('Hey Code Queen')

})

app.listen(process.env.PORT, ()=>{console.log('connected to the port')});


