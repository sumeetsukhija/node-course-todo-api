const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '59b3905841c07f1f1498cb02';

if (!ObjectID.isValid(id)) {
  console.log('Id not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  if (todos.length === 0)
    return console.log('Id not found');
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  if (!todo)
    return console.log('Id not found');
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo)
    return console.log('Id not found');
  console.log('Todo By Id', todo);
});
