// Express 
const express = require('express');
const cors = require('cors')
// Assign Port 
const port = 8000;
// Database 
const db = require('./config/db');
// assigning functionality of express 
const app = express();

// Form data read
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Home Welcome route
app.get('/', (req, res)=>{
    res.json({message: "Welcome to API"})
})

// Main Routes
app.use('/admin', require('./route'))

// Server 
app.listen(port, function(err){
    if(err) {
        console.log('Error to running server', err);
    }
    console.log(`Server is running at ${port}`);
})