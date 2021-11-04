const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    Name:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    username :{
        type : String,
        required : true,
        minlength: 3,
        maxlength : 10,
        unique :true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
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