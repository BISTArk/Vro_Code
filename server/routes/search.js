const router = require("express").Router();
const user = require("../models/user_mod");

router.get("/:term", async(req, res) => {
  let re = new RegExp(req.params.term, 'i')
  try {
     
      let users = [];
      
      // let x = await user.find({ Name: re });
      // users = users.concat(x);
      x = await user.find({ username: re });
     users = users.concat(x);
       res.status(200).json(users);   
    } catch (err) {
      res.redirect("/home");
    }
  });
  

module.exports = router;