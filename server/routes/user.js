const router = require("express").Router();
const user = require("../models/user_mod");
const bcrypt = require("bcrypt");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    if (file.fieldname === "profileImag") {
      callback(null, "images/profile");
    } else {
      callback(null, "images/cover");
    }
  },
  filename: function (req, file, callback) {
    console.log(file);
    if (file.fieldname === "profileImag")
      callback(null, "profile" + file.originalname);
    else callback(null, "cover" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.put(
  "/pics",
  upload.fields([
    {
      name: "profileImag",
      maxCount: 1,
    },
    {
      name: "coverImag",
      maxCount: 1,
    },
  ]),
  async (req, res) => {
    console.log(req.files);
    try {
      const currUser = await user.findById(req.body.id);
      await currUser.update({
        $set: {
          profilePic: req.files.profileImag[0].filename,
          coverPic: req.files.coverImag[0].filename,
        },
      });
      const ret = {
        profilePic: req.files.profileImag[0].filename,
        coverPic: req.files.coverImag[0].filename,
        msg: "Updated sucessfully",
        hel:"hello",
      };
      console.log("hello");
      res.status(200).json(ret);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

router.get("/leader", async (req, res) => {
  try {
    const currUser = await user.find({}).sort({ rank: -1 }).limit(5);

    // console.log("Leader boi" + currUser)
    res.status(200).json(currUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update user
router.put("/:id", async (req, res) => {
  console.log(req.body);
  if (req.params.id === req.body.id) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        res.status(500).json(err);
      }
    }
    try {
      await user.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      const currUser = await user.findById(req.params.id);
      res.status(200).json(currUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You dont have permission to change this Account");
  }
});
//delete user

router.delete("/:id", async (req, res) => {
  if (req.params.id === req.body.id) {
    try {
      await user.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been successfully deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you dont have the permission to delete this Account");
  }
});

//get user

router.get("/:id", async (req, res) => {
  try {
    const currUser = await user.findById(req.params.id); //Test this and remove password and that jazz
    const { password, updatedAt, ...other } = currUser._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get multiple users

router.post("/multiple", async (req, res) => {
  let result = [];
  try {
    for (const x of req.body.list) {
      const currUser = await user.findById(x);
      if (currUser) {
        const { password, updatedAt, ...other } = currUser._doc;
        result.push(other);
      }
    }
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//follow user

router.put("/follow/:id", async (req, res) => {
  if (req.body.id !== req.params.id) {
    try {
      const currUser = await user.findById(req.body.id);
      const otherUser = await user.findById(req.params.id);

      if (currUser.following.includes(otherUser._id)) {
        res.status(400).json("you alreay follow this user");
      } else {
        await currUser.updateOne({ $push: { following: req.params.id } });
        await otherUser.updateOne({ $push: { followers: req.body.id } });

        res.status(200).json("This account has been successfully followed"); //TEST
      }
    } catch (err) {
      res.status(500).json("error" + err);
    }
  } else {
    res.status(400).json("You cant follow yourself");
  }
});
//unfolow user

router.put("/unfollow/:id", async (req, res) => {
  console.log("hello");
  if (req.body.id !== req.params.id) {
    try {
      const currUser = await user.findById(req.body.id);
      const otherUser = await user.findById(req.params.id);

      if (!currUser.following.includes(otherUser._id)) {
        res.status(400).json("you dont follow this user");
      } else {
        await currUser.updateOne({ $pull: { following: req.params.id } });
        await otherUser.updateOne({ $pull: { followers: req.body.id } });

        res.status(200).json("This account has been successfully unfollowed"); //TEST
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(400).json("You cant unfollow yourself");
  }
});

module.exports = router;
