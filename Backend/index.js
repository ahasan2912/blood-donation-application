require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT;
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');

//middleware
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.w0iow.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.dir);

app.get('/', async(req, res) => {
    res.send("Blood Donation Application is Running");
})

app.listen(port, () => {
    console.log("Blood Donation Application is Running", port);
})