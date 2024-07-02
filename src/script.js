import express from "express"
import "dotenv/config"
import connectDB from "./db/mongoConnection.js"

const app = express()

app.get("/",(req, res)=>{
    res.send("welcome server is available")
})
const port = process.env.PORT || 4000

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`)
     
    })
}).catch((error)=>{
console.log("Mongo db connection failed !! " , error)
})

