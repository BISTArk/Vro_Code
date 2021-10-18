const  {Schema, model} = require("mongoose");

const postSchema = new Schema({
    userid:{
        type:String,
        required:true
    },
    content:{
        type:String,
        max:200
    },
    img:{
        type:String
    },
    likes:{
        type:Array,
        default:[]
    }//Impliment Comments
},
{
    timestamps:true
}
)

module.exports = model("post",postSchema);