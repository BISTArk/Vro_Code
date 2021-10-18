const router = require("express").Router();
const user = require("../models/user_mod");
const post = require("../models/post_mod");

//Get all Timeline Post

router.get("/all", async (req, res) => {
  try {
    const currUser = await user.findById(req.body.uid);
    const myPosts = await post.find({ userid: currUser._id });
    const otherPosts = await Promise.all(
      currUser.following.map((fid) => {
        return post.find({ userid: fid });
      })
    );
    res.status(200).json(myPosts.concat(...otherPosts));
  } catch (err) {
    res.status(501).json(err);
  }
});

//Create a Post

router.post("/", async (req, res) => {
  const newPost = new post(req.body);
  try {
    const currPost = await newPost.save();
    res.status(200).json(currPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete a Post

router.delete("/:id", async (req, res) => {
  try {
    const currPost = post.findById(req.params.id);
    if (currPost.userid === req.body.id) {
      await currPost.deleteOne();
      res.status(200).json("Post has been successfully deleted");
    } else {
      res.status(403).json("You cant delete the posts that u didnt create");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Edit a Post

router.put("/:id", async (req, res) => {
  try {
    const currPost = await post.findById(req.params.id);
    if (req.body.id === currPost.userid) {
      await currPost.updateOne({ $set: req.body });
      res.status(200).json("Post has been updated Successfully");
    } else {
      res.status(403).json("You can only Edit/Update your posts");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Like a Post

router.put("/like/:id", async (req, res) => {
  try {
    const currPost = await post.findById(req.params.id);
    if (!currPost.likes.includes(req.body.id)) {
      await currPost.updateOne({ $push: { likes: req.body.id } });
      res.status(200).json("You have liked this post");
    } else {
      await currPost.updateOne({ $pull: { likes: req.body.id } });
      res.status(200).json("You have unliked this post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get a Post

router.get("/:id", async (req, res) => {
  try {
    const currPost = await post.findById(req.params.id);
    if (currPost) {
      res.status(200).json(currPost);
    } else {
      res.status(403).json("Post not Found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
