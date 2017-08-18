// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connection successful to MongoDB');

  // db.collection('Todos').find({_id: new ObjectID('599148b6d73c3718b0a4eb69')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find({_id: new ObjectID('599148b6d73c3718b0a4eb69')}).count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find().count().then((count) => {
    console.log(`Users count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

//  db.close();
});
