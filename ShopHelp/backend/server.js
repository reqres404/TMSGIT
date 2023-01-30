const express = require("express");
const itemsRoutes =require("./routes/items");
const mongoose = require("mongoose")
require("dotenv").config();
//setting up the paths and routes
const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next();
});

app.use("/api/items",itemsRoutes)

// connecting to db

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB and Listening to ${process.env.PORT}!`);
    });
  })
  .catch((error) => {
    console.log("Not connected!");
    console.log("reason : ", error);
  });
