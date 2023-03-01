const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/moon.route")

// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled


async function main() {
  await mongoose.connect('mongodb://mongo:27017/acmedb').catch(error => console.log("Couldn't connect to mongodb"));
  
  
  const app = express()
    app.use(express.json()) // new
    app.use("/", routes)

    app.listen(8080, () => {
      console.log("Web server has started!")
    })
}

main().catch(err => console.log(err));
