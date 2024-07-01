import express from "express"
import "dotenv/config"
import connectDB from "./db/mongoConnection.js"

const app = express()

app.get("/",(req, res)=>{
    res.send("welcome server is available")
})

connectDB()

const port = process.env.PORT || 400
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
 
})