const router = require("express").Router();
const Conversation = require("../models/Conversation");

//new conv

router.post("/",(req,res)=>{
    const newConversation = new Conversation({
        member: [req.body.senderId, req.body.receiverId],
    });

    try{
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation)

    }catch(err){
        req.status(500).json(err)
    }
});
//get conv of a user


module.exports = router;