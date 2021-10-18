const router = require("express").Router();
const user = require("../models/user_mod");
const bcrypt = require("bcrypt");

//update user
router.put("/:id",async (req,res)=>{
    if(req.params.id === req.body.id){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password,salt);
            }
            catch(err){
                res.status(500).json(err);
            }
        }
        try{
            const currUser = await user.findByIdAndUpdate(req.params.id,{
                $set: req.body
            });

        res.status(200).json("Account updated Successfully");
        }
        catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("You dont have permission to change this Account");
    }
})
//delete user

router.delete("/:id",async (req,res)=>{
    if(req.params.id === req.body.id){
        try{
            await user.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been successfully deleted");
        }
        catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("you dont have the permission to delete this Account");
    }
})

//get user 

router.get("/:id",async (req,res)=>{
        try{
            const currUser = await user.findById(req.params.id);                    //Test this and remove password and that jazz
            res.status(200).json(currUser);
        }
        catch(err){
            res.status(500).json(err);
        }
})
//follow user

router.put("/follow/:id",async (req,res)=>{
    if(req.body.id !== req.params.id){
        try{
            const currUser = await user.findById(req.body.id);
            const otherUser = await user.findById(req.params.id);

            if(currUser.following.includes(otherUser._id)){
                res.status(400).json("you alreay follow this user");
            }else{
                await currUser.updateOne({$push:{following:req.params.id}});
                await otherUser.updateOne({$push:{followers:req.body.id}});

                res.status(200).json("This account has been successfully followed");        //TEST 
            }
        }
        catch(err){
            res.status(500).json("error"+err);
        }
    }else{
        res.status(400).json("You cant follow yourself");
    }
})
//unfolow user

router.put("/unfollow/:id",async (req,res)=>{
    if(req.body.id !== req.params.id){
        try{
            const currUser = await user.findById(req.body.id);
            const otherUser = await user.findById(req.params.id);

            if(!currUser.following.includes(otherUser._id)){
                res.status(400).json("you dont follow this user");
            }else{
                await currUser.updateOne({$pull:{following:req.params.id}});
                await otherUser.updateOne({$pull:{followers:req.body.id}});

                res.status(200).json("This account has been successfully unfollowed");        //TEST 
            }
        }
        catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(400).json("You cant unfollow yourself");
    }
})


module.exports = router;