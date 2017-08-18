// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connection successful to MongoDB');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err)
  //     return console.log('Unable to insert todo', err);
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Sumeet',
  //   age: 38,
  //   location: 'Sydney'
  // }, (err, result) => {
  //   if (err)
  //     return console.log('Unable to insert todo', err);
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  //   console.log(result.ops[0]._id.getTimestamp());
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.close();
});
