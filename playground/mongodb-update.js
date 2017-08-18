// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connection successful to MongoDB');

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({_id : new ObjectID('59968841da63fc54a536728b')},
  //   {
  //     $set : {
  //       completed : true
  //     }
  //   },
  //   {
  //     returnOriginal : false
  //   }).then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users').findOneAndUpdate({_id : new ObjectID('5991499c6bff711f701d475e')},
    {
      $set : {
        name: 'Sumeet1'
      },
      $inc : {
        age: 1
      }
    },
    {
      returnOriginal : false
    }).then((result) => {
      console.log(result);
    });

//  db.close();
});
