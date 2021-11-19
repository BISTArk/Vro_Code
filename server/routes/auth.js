const router = require("express").Router();
const User = require("../models/user_mod");
const bcrypt = require("bcrypt");

//register new user
router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    console.log(req.body.password);
    //create a new user
    const newUser = await new User({
      Name:req.body.Name,
      username: req.body.username,
      email: req.body.email,
      role: req.body.role,
      password: hashed,
    });

    //Save user to DB
    const user = await newUser.save();
    res.status(200).send("Works!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//login an existing user
router.post("/login", async (req, res) => {
  try {
    //Retrive user from DB
    const user = await User.findOne({ username: req.body.username });
    console.log(`${req.body.username}   `);
    !user && res.status(404).json({ error: "User not found" });

    //Validate Auth
    const validPass = await bcrypt.compare(req.body.password, user.password);
    !validPass && res.status(400).json("Wrong Password");
    console.log(req.body)

    //Login
    let x= user.rank<700?(user.rank +1):user.rank;
    console.log(user);
    await User.findByIdAndUpdate(user._id,{rank:x})
    console.log("Login success");
    const { password, updatedAt, ...other } = user._doc;
    console.log(other);
    res.status(200).json({user:other});
  } catch (err) {
    console.log(err);
    res.status(500).json({error:err});
  }
});

//Forget password
router.post("/forget", async (req, res) => {
  try {
      let mail = req.body.email;
      
      var newPassword = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < 8; i++) {
          newPassword += characters.charAt(Math.floor(Math.random() *
              charactersLength));
      }
      // found.password = newPassword;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(newPassword, salt);
    let found = await User.find({ email: mail }).updateOne({
      $set: {password: hashed}
    });

    
      // await found.save();
    
    if (found.modifiedCount>0) {
      console.log( found)
      res.status(200).json(newPassword);
      
    }
    else res.status(400).json("DB error")
  }
  catch (err) {
      console.log(err);
      res.status(404).json("Cannot find the email")
  }
})

module.exports = router;
