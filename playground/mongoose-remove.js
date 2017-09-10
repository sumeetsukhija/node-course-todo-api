const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove();
Todo.findByIdAndRemove('59b517978d7b5627cccf8933').then((todo) => {
  console.log(todo);
});
