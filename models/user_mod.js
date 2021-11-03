const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    Name:{
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    username :{
        type : String,
        required : true,
        min: 3,
        max : 10,
        unique :true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:50
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    profilePic:{
        type:String,
        default:""
    },
    coverPic:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type: Boolean,
        default:false
    },
    rank:{
        type:Number,
        default:"0"
    },
    role:{
        type:String,
        default:""
    }
},
{timestamps:true});

module.exports = model("user_mod",userSchema);