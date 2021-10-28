const router = require("express").Router();
const User = require("../models/user_mod");
const bcrypt = require("bcrypt");

//register new user
router.post("/register", async (req, res) => {
  try {
    //generate hash of pass
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    //create a new user
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashed,
    });

    //Save user to DB
    const user = await newUser.save();
    res.status(200).send("DONE VRO!!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//login an existing user
router.post("/login", async (req, res) => {
  try {
    //Retrive user from DB
    const user = await User.findOne({ username: req.body.username });
    console.log(`${req.body.username} ${user}  `);
    !user && res.status(404).json({ error: "Who is u" });

    //Validate Auth
    const validPass = await bcrypt.compare(req.body.password, user.password);
    !validPass && res.status(400).json("Wrong Password");

    //Login
    user.rank = user.rank +1;
    await user.save();
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
