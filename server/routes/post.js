const router = require("express").Router();
const multer = require("multer");
const user = require("../models/user_mod");
const post = require("../models/post_mod");
const fs = require("fs");
const { findById } = require("../models/user_mod");

//set up multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, "Bista" + "-" + req.body.img);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

//Get all Timeline Post

router.get("/all/:userId", async (req, res) => {
  try {
    const currUser = await user.findById(req.params.userId);
    const timeAtt = new Date(currUser.createdAt).toLocaleDateString();
    console.log("Tiem: " + timeAtt);
    const myPosts = await post
      .find({ userid: currUser._id })
      .sort({ createdAt: -1 })
      .exec();

    const otherPosts = await Promise.all(
      currUser.following.map((fid) => {
        return post.find({ userid: fid }).sort({ createdAt: -1 }).exec();
      })
    );
    const result2 = myPosts
      .concat(...otherPosts)
      .sort()
      .reverse(); //wow
    res.status(200).json(result2);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all my posts

router.get("/my/:userId", async (req, res) => {
  try {
    const currUser = await user.findById(req.params.userId);
    const myPosts = await post.find({ userid: currUser._id });
    res.status(200).json(myPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create a Post

router.post("/", upload.single("imag"), async (req, res) => {
  let newPost;
  if (req.file !== undefined) {
    newPost = new post({ ...req.body, img: req.file.filename });
  } else newPost = new post(req.body);
  try {
    let curruser = await user.findById(req.body.userid);
    let x = curruser.postCount;
    if (x < 0) x = 0;
    await curruser.updateOne({ $set: { postCount: x + 1 } });
    const currPost = await newPost.save();
    res.status(200).json(currPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete a Post

router.delete("/:id", async (req, res) => {
  try {
    const currPost = await post.findById(req.params.id);
    if (currPost.userid === req.body.id) {
      let curruser = await user.findById(currPost.userid);
      let x = curruser.postCount;
      await curruser.updateOne({ $set: { postCount: x - 1 } });
      await currPost.deleteOne();
      fs.unlink("images/" + currPost.img, (err) => {
        return;
      });
      res.status(200).json("Post has been successfully deleted");
    } else {
      res.status(403).json("You cannot delete the posts you didn't create");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/like/:id", async (req, res) => {
  try {
    const currPost = await post.findById(req.params.id);
    if (currPost) {
      if (!currPost.likes.includes(req.body.id)) {
        await currPost.updateOne({ $push: { likes: req.body.id } });
        const notiUser = await user.findById(currPost.userid);
        const likedUser = await user.findById(req.body.id);
        if (notiUser) {
          await notiUser.updateOne({
            $push: { notifi: { post: currPost, likedUser: likedUser } },
          });
        }
      } else {
        res.status(404).json("Cant find this post");
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/bookmark/:id", async (req, res) => {
  try {
    const userBook = await user.findById(req.body.id);
    if (userBook) {
      if (!userBook.savedArray.includes(req.params.id)) {
        await userBook.updateOne({ $push: { savedArray: req.params.id } });
      } else {
        await userBook.updateOne({ $pull: { savedArray: req.params.id } });
      }
      res.status(200).json(userBook.savedArray);
    } else {
      res.status(503).json("Cannot bookmark");
    }
  } catch (err) {
    res.status(404).json("Cant find this post");
  }
});

router.get("/bookmark/:id", async (req, res) => {
  let result = [];
  try {
    const currUser = await user.findById(req.params.id);
    if (currUser) {
      const saved = currUser.savedArray;
      for (const x of saved) {
        const currPost = await post.findById(x);
        result.push(currPost);
      }
      res.status(200).json(result);
    } else {
      res.status(404).json("Who are you");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get a Post

router.get("/:id", async (req, res) => {
  try {
    const currPost = await post.findById(req.params.id);
    console.log(currPost);
    if (currPost) {
      const currUser = await user.findById(currPost.userid);
      const result = {
        ...currPost._doc,
        profilePic: currUser.profilePic,
        username: currUser.username,
        Name: currUser.Name,
      };
      console.log(result);
      res.status(200).json(result);
    } else {
      res.status(403).json("Post not Found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
