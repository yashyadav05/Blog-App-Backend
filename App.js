//env config
require("dotenv").config()

const express = require("express")
const app = express()

//Route connection
const Routes = require("./Routes/route")
const PORT = 2001

// Mongodb connection
const dbConnect = require("./Config/db")
dbConnect()



// Middleware to parse json request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

//connect to route
app.use("/api/v1",Routes)

app.listen(PORT, ()=> console.log(`Server connected to http://localhost:${PORT}`))