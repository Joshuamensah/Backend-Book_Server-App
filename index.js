//importing controllers
const {createBookController, viewBookController, updateBookController, deleteBookController} = require('./controllers') 
//importing packages
const express = require('express');

//creating express server instance
const server = express();

//middleware
server.use(express.json());



//routes
//create books - post method
server.post('/book', createBookController);
//View books - get method
server.get('/book', viewBookController);
//update book - patch method
server.patch('/book', updateBookController);
//delete book - delete method
server.delete('/book', deleteBookController);

//starting server
server.listen(3000, () => console.log('server is ready'));