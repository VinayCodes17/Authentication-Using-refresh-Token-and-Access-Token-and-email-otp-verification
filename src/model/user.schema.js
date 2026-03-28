import mongoose from 'mongoose'

const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:[true , "Username is required"],
        unique:[true , "username must be unique"],
    },
    password:{
        type:String,
        required:[true , "password is required"],
        unique:[true , "password must be unique"],
        
    },
    email:{
        type:String,
        required:[true , "email is required"],
        unique:[true , "email must be unique"],
    },
    role:{
        type:String, 
        default:"user",
    },
    verified:{
        type:String,
        default : "false",
    }
},
{
    timestamps:true,
})

const userModel = mongoose.model("users",userschema);

export default userModel ; 