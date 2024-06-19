import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
// import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from "mongodb";

// defining the app
const app = express();

// the use of globalized cors in the application
app.use(cors());

// getting the port from env file
const port = process.env.PORT;
console.log(`my port is ${port}`);

// accessing the db
const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});



async function DatabaseRun() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    let db = client.db("sample_airbnb");

    console.log(db);
  } catch (err) {
    console.error(err);
  }
}

DatabaseRun()
  .then((response) => {
    console.log(`database connected and here is my response ${response}`);
  })
  .catch((error) => {
    console.log(`error is `, error);
  });

// export default db;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

app.get("/", (req: Request, res: Response) => {
  res.send(`hello world he is here`);
});

app.get("/home", (req: Request, res: Response) => {
  res.send(`hello world im at home so lets rock`);
});
