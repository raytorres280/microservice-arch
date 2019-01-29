const express = require("express");
const app = express();

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://main_admin:root@mongod-0.mongo,mongod-1.mongo,mongods-2.mongo:27017';
const dbName = 'test';

app.get("/api/boots" , (req, res) => {
    console.log("received request");
    try{
        MongoClient.connect(url, function(err, client) {
            if(!err) {
                console.log("Connected successfully to database");
                const db = client.db(dbName);
                const boots = db.collection("boots");
                boots.find().toArray((err, docs) => {
                    if(!err) {
                        res.json(docs);
                    } else {
                        res.send(err + ", connErr: " + connectionErr);
                    }
                })
            } else {
                connectionErr = err;
                res.send(err);
            }
            
            // client.close();
          });
    }
    catch(err) {
        res.send(err);
    }
});

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`boots_svc listening on ${port}`);
});