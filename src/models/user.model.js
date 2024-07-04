import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const  userSchema = new mongoose.Schema({
    watchHistory:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Video"

    }],
username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
},
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true
},
fullName:{
    type:String,
    required:true,
    trim:true,
    index:true

},
avatar:{
    type:String, // cloudnary
    required:true,
  

},
coverImage:{
    type:String, // cloudnary
    

},
password:{
    type:String,
    required:true,
    trim:true,
  

},
refreshToken:{
    type:String,
    required:true,
    unique:true,
 },






},{timestamps:true})


userSchema.pre("save", function(next){
    if(this.isModified(this.password)) return  next()
  this.password = bcrypt.hash(this.password,10)
next() 
})


userSchema.methods.checkPasswordCorrection =async function(password){
    return await bcrypt.compare(password,this.password)
}


userSchema.methods.generateAccessToken= function(){
    return jwt.sign(
        {
            _id : this._id,
            email : this.email,
            username : this.username,
            fullName : this.fullName,
            
        },
        process.env.ACCESS_TOKEN_SCERET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken= function(){
    return jwt.sign(
        {
            _id : this._id,
          
            
        },
        process.env.REFRESH_TOKEN_SCERET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}





export const User = mongoose.model("User",userSchema)