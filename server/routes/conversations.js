const router = require("express").Router();
const Conversation = require("../models/Conversations");
const User = require("../models/user_mod");

//new conv

router.post("/", async (req, res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId],
    });
    try {
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation)

    } catch (err) {
        res.status(500).json(err)
    }
});


//get conv of a user

router.get("/:userId", async (req, res) => {
    try {
        const conversation = await Conversation.find({
            members: { $in: [req.params.userId] },
        });
        //console.log(conversation)
        res.status(200).json(conversation)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/:term", async (req, res) => {
    let re = new RegExp(req.params.term, 'i')
    try {

        let users = [];

        let x = await user.find({ Name: re });
        users = users.concat(x);
        x = await user.find({ username: re });
        users = users.concat(x);
        console.log(x);
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
    }
});


router.get("/find/:firstUserId/:secondUserId", async (req, res) => {
    try {
        const conversation = await Conversation.findOne({
            members: { $all: [req.params.firstUserId, req.params.secondUserId] },
        })
        res.status(200).json(conversation)

    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router;