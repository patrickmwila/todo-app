// imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const date = require(__dirname + '/custom_modules/date.js');
const Item = require('./schemas/Items.js');
const item = require('./custom_modules/item.js');
const deleteItem = require('./custom_modules/deleteItem.js');

// connect to database
mongoose.connect('mongodb://localhost/db_todolist');

// setup express server
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs'); // make our app use ejs as its view engine

// handle get and post requests
app.get('/', (req, res) => { // home route

  // query database model  for a todo object
  Item.find({}, (err, result) => {
    if (err) {
      console.log(err.message);

    } else {
      // use ejs to render todo item in todo object
      res.render('list', {ejsTodosTitle: date.getDate(), ejsTodoItem: result});
    }
  })

});

app.post('/', (req, res) => { // home route
  let todoItem = req.body.todoItem;

  // only render non empty todo items
  if (todoItem.length === 0) {
    res.redirect('/');

  } else {
    Item.updateOne(item(todoItem));
    res.redirect('/');
  }
});

app.post('/delete', (req, res) => { // delete item route
  const checkedItemId = req.body.checkbox;
  deleteItem(checkedItemId);

  res.redirect('/');
});

// setup up server port number
app.listen(process.env.PORT || 3000, (req, res) => {
  console.log('Server started successfully');
});
