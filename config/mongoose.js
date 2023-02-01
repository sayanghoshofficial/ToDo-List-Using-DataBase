// reqire the libray
const mongoose = require('mongoose');

//connect to the database
const url = 'mongodb+srv://Sayanghosh:sayan123@cluster0.fxab6ur.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url);
// mongoose.connect('mongodb+srv://Sayanghosh:OstPLek3KdQpcjsq@cluster0.fxab6ur.mongodb.net/?retryWrites=true&w=majority');

//acquire the connection(check it is connected or not)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up connecting print massage
db.once('open',function(){
    console.log('Sucessfully connected to the database');
});