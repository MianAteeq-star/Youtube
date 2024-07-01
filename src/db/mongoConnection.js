import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"


 const connectDB=    async()=>{
        try {
            const connection = await mongoose.connect( `${process.env.MONGOdB_URI}/${DB_NAME}`)
            console.log( `MongoDB connected !! and the host is : ${connection.connection.host}`)

        } catch (error) {
            console.log("Error in MongoDB connection ",error);
            throw new Error(error);    
            
        }
    }
export default connectDB;
