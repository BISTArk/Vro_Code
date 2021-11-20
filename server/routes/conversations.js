const router = require("express").Router();
const Conversation = require("../models/Conversations");
const User = require("../models/user_mod");

//new conv

router.post("/", async (req, res) => {
    let mem = [req.body.senderId, req.body.receiverId];
    const newConversation = new Conversation({
        members: mem,
    });
    const searchConv = await Conversation.find({ members: mem });
    // console.log(searchConv)
    try {
        if (searchConv.length == 0) {
            const savedConversation = await newConversation.save();
            res.status(200).json(savedConversation)
            // console.log("JD");
        }else{
            res.status(200).json(searchConv)
            // console.log("Jahf");
        }

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

// router.get("/:term", async (req, res) => {
//     let re = new RegExp(req.params.term, 'i')
//     try {

//         let users = [];

//         x = await User.find({ username: re });
//         users = users.concat(x);
//         console.log(users);
//         res.status(200).json(users);
//     } catch (err) {
//         console.log(err);
//         console.log("B");
//     }
// });


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