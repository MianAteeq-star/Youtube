import {v2 as cloudinary} from 'cloudinary'
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUD_Name,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET_KEY
});



const uploadOnCloudinary = async (filePath)=>{
    try {
        if(!filePath) return null
        else{
            const result = await cloudinary.uploader.upload(filePath , {
                resource_type: "auto"
            })
            // file has been uploaded successfull
        console.log("file is uploaded on cloudinary ", result.url);
        fs.unlinkSync(filePath)
        return result;
        }
        
    } catch (error) {
        fs.unlinkSync(filePath)
        return null;
        
    }
}

export {uploadOnCloudinary}
