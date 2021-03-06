// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect to Mongodb server')
    }
    console.log('Connected to Mongodb server');
    const db = client.db('TodoApp');
    
    db.collection('Todos').findOneAndUpdate({_id: new ObjectID ('5e01b3dcb0d837ba17457b72')},
    {$set:{
        completed:true
    }},{
        returnOriginal:false
    }).then((result) => {
        console.log(result);
    });

    client.close();
});