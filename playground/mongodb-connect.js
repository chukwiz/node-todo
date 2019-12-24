// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect to Mongodb server')
    }
    console.log('Connected to Mongodb server');
    const db = client.db('TodoApp');
    
    db.collection('Todos').find({completed:"false"}).toArray()
    .then((todo) => {
        console.log('Todos');
        console.log(JSON.stringify(todo, undefined, 2))
    }, (error) => {
        console.log('Could not find todos', error)
    });

    client.close();
});