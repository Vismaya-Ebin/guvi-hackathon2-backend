

// express web application framework for node JS
import express from "express";

//loads env variable from .env to process.env
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT;
console.log(`Port: ${PORT}`);

app.get("/",(req,res)=>{
    res.send(` 👩‍❤️‍👨👩‍❤️‍👨👩‍❤️‍👨👩‍❤️‍👨👩‍❤️ Hackathon 2 👩‍❤️‍👨👩‍❤️‍👨👩‍❤️‍👨👩‍❤️‍👨👩‍❤️‍👨`);
})
//Check Port is up or not
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});