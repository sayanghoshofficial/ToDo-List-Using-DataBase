// create require file for requirement
// use express
const express = require('express');
// use path
const path = require('path');
// connect mongoose
const mongoose = require('./config/mongoose');
// connect with todo
const ToDo = require('./models/todo')
// create port
const port = 7000;
// create app from express
const app = express();

// url encoded form express 
app.use(express.urlencoded({ extended: true }));
// create object
app.use(express.json());
// use ejs
app.set('view engine','ejs');
// enable views
app.set('views', path.join(__dirname,'views'));
// enable assets
app.use(express.static('./assets'));


// render todos
app.get('/',function(req,res){
    ToDo.find({}, function(err,todo){
        if (err) {
            console.log('Error to fatching the todos from DB ');
            return;
        }
        // console.log('todo list',todo);
        return res.render('home',{
            title:"My To Do List",
            todo_list: todo
        });
        
    });
});
// submit to do to my data-base and render it
app.post('/create-to-do',function(req,res){
    ToDo.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    })
    return res.redirect('back');
})
//delete to do from my data-base 
app.post('/delete-to-do',function(req,res){
    let idArr = [req.body.todo];
        ToDo.deleteMany({_id:idArr[0]}, function (err, todos) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Deleted : ", todos);
            }
    });
    return res.redirect('back');
});

// connect to the port
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server ${err}`);
    }
    console.log(`Your server is running on port ${port}`);
})