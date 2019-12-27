// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect to Mongodb server')
    }
    console.log('Connected to Mongodb server');
    const db = client.db('TodoApp');
    
    db.collection('Todos').deleteMany({text:"Something to eat"}).then((result) => {
        console.log('deleted todo', result)
    })

    client.close();
});