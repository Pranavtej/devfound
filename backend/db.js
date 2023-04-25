const MongoClient = require('mongodb').MongoClient;

let db;

async function connectToDB(cb) {
    const uri = "mongodb+srv://devbydevs:ung84Ucl8lFLl9fh@cluster0.sl5qdqg.mongodb.net/?retryWrites=true&w=majority";
    
  const client = new MongoClient(uri);
  await client.connect();
  // console.log(`Name is ${req.params.name}`);

  db = client.db("devbydevs_users");

   cb();
}

export {
     db,
     connectToDB,
    };