const express = require('express');
const mailgun= require('mailgun-js')
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
 //rewrite with es6
 
const MongoClient = require('mongodb').MongoClient;

let db;


async function connectToDB(cb) {
  const USER = "devbydevs";
  const PASS = "ung84Ucl8lFLl9fh";
  
    const uri = `mongodb+srv://${USER}:${PASS}@cluster0.sl5qdqg.mongodb.net/?retryWrites=true&w=majority`;
    
  const client = new MongoClient(uri);
  await client.connect();
  // console.log(`Name is ${req.params.name}`);

  db = client.db("devbydevs_users");

   cb();
}
// import { MongoClient,ServerApiVersion} from 'mongodb';
// const { MongoClient,  } = require('mongodb');

const DOMAIN = 'mail.devbydev.us';
const API_MAIL ='20741efebcdab2ac967813dac08bae35-eb38c18d-178c6950';
const mg = mailgun({apiKey: API_MAIL, domain: DOMAIN});

//'20741efebcdab2ac967813dac08bae35-eb38c18d-178c6950'

// const uri = "mongodb+srv://devbydevs:ung84Ucl8lFLl9fh@cluster0.sl5qdqg.mongodb.net/?retryWrites=true&w=majority";

app.get('/',async (req, res) => {
  res.send('devfound:');
});

app.get('/users/:name',async (req, res) => {

  const details = await db.collection('users').findOne({name: req.params.name});
  if (!details) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  res.json(details);
});
app.get('/api/devs/',async (req, res) => {

  const details = await db.collection('devs').find({}).toArray();
  if (!details) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  res.json(details);
});
app.get('/api/devs/:name',async (req, res) => {

  const details = await db.collection('devs').findOne({name: req.params.name});
  if (!details) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  res.json(details);
});

app.get('/api/Login/:name/:pass',async (req, res) => {

  const details = await db.collection('users').findOne({username: req.params.name}, { password: req.params.pass});
  if (!details) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  res.json(details);
});

app.post('/api/CreateAcc/:name/:pass/:email/:username',async (req, res) => {

  const myobj= 
    {username: req.params.username ,
    password: req.params.pass,
    email: req.params.email,
    name: req.params.name,
    role : "user",
  };
   db.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    
    return res;
    
  });
  res.json();
  // sendMail(req.params.email,req.params.name); 
});

app.get('/api/CreateAcc/cnfrmAcc/mail/:name/:email',async (req, res) => {
  const maildata = {
    from: 'Devbydev <pranav@devbydevs.co>',
    to:  req.params.email,
    subject: 'Confirm your Account ! '+req.params.name,
    template: "account_confirm",
    "v:user_name": req.params.name
  };
  mg.messages().send(maildata, function (error, body) {
    console.log(body);
  });
}) ;

app.get('/api/CreateAcc/dev/',async (req, res) => {

  const myobj= 
    [
      {username: "Pranav Teja" ,
      password: "123456",
      email: "Pranav_mcr@srkrec.edu.in",
      name: "PranavTeja",
      role : "dev",
      avatar : "https://pranavteja.vercel.app/img/profilepic.jpg"
    },
    
];
   db.collection("devs").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    return res;
    
  });
  res.json();
});

app.put('/updateuser/:name/:newname',async (req, res) => {

  const details = await db.collection("users").updateOne({ name: req.params.name }, { $set: { name: req.params.newname } })
  if (!details) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  res.json(details);
});


app.get('/login/:username/:pass',async (req, res) => {
  const details = await db.collection("users").findOne({ username: req.params.username, password: req.params.pass})
  if (!details) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  res.json(details);
});

app.get('/users',async (req, res) => {
  const details = await db.collection("users").find({}).toArray();
  if (!details) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  res.json(details);
});

app.get('api/users/find/:username',async (req, res) => {
  const details = await db.collection("users").find({username: req.params.username}).toArray();
  if (details.length == 0) {
     res.status(200).json({ error: 'User not found' });
    return;
  }
  res.status(404).json(details);
});

app.get('/DeleteAcc/:username',async (req, res) => {
  const details = await db.collection("users").deleteMany({username: req.params.username})
  if (!details) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  res.json(details);
});

// async function main() {
//   // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//   // const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/sample_airbnb?retryWrites=true&w=majority";
//   const client = new MongoClient(uri);

//   try {
//       // Connect to the MongoDB cluster
//       await client.connect();

//       // Make the appropriate DB calls
//       console.log("Databases:");
//       console.log(await client.db("devbydevs_users").collection("users").find().toArray());

//   } catch (e) {
//       console.error(e);
//   } finally {
//       // Close the connection to the MongoDB cluster
//       await client.close();
//   }
// }

// main().catch(console.error);
app.get('/h/:name', (req, res) => {
    console.log(`Name is ${req.params.name}`);
  res.send('Hello World!');
});

app.get('/api/signin/:username', (req, res) => {
    console.log(`username is ${req.params.username}`);
  res.send(`Name is ${req.params.username}`);
});

connectToDB ( () => {
  app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
  });
});
