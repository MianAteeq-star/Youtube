import {asyncHandler} from "../utils/asycHandler.js"

const userRegisterController = asyncHandler(

    async(req,res)=>{
        res.status(200).json({
            message: "user registered successfully"
        })

}
) 


export {userRegisterController}