const  {Schema, model} = require("mongoose");

const postSchema = new Schema({
    userid:{
        type:String,
        required:true
    },
    content:{
        type:String,
        max:200,
        default:"",
        required:true
    },
    img:{
        type:String,
        default:""
    },
    likes:{
        type:Array,
        default:[]
    },
    githubLink: {
        type: String,
    },
    code:{
        type:Boolean,
        default:false
    }
   
    
},
{
    timestamps:true
}
)

module.exports = model("post",postSchema);