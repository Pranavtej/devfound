const MongoClient = require('mongodb').MongoClient;

let db;


async function connectToDB(cb) {
  const USER = process.env.DB_USER;
  const PASS = process.env.DB_PASS;
  
    const uri = `mongodb+srv://${USER}:${PASS}@cluster0.sl5qdqg.mongodb.net/?retryWrites=true&w=majority`;
    
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