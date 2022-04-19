

// express web application framework for node JS
import express from "express";

//loads env variable from .env to process.env
import dotenv from "dotenv";
//for DataBase connection
import { Db, MongoClient } from "mongodb";
import cors from "cors";



dotenv.config();
const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Mongo is connect 👍✨✨");
    return client;
  }
  export const client = await createConnection();
  var corsOption = {
    origin: true,
  };
  app.use(cors(corsOption));
  app.use(express.json());

  app.use((res, req, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

//
console.log(`Port: ${PORT}`);

app.get("/",(req,res)=>{
    res.send(` 👩‍❤️‍👨👩‍❤️‍👨👩‍❤️‍👨👩‍❤️‍👨👩‍❤️  Finally reached Hackathon 2 👩‍❤️‍👨👩‍❤️‍👨👩‍❤️‍👨👩‍❤️‍👨👩‍❤️‍👨`);
})

app.post("/rent", async function (req, res) {
     const rent = req.body;
     const result = await client.db("rent").collection("rent").insertMany(rent);
    res.send(result);
  })

  app.get("/rent", async function (req, res) {
    const result = await client.db("rent").collection("rent").find({}).toArray();
     res.send(result);
   });
//Check Port is up or not
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});