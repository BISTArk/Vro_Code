const router = require("express").Router();
const multer = require("multer");
const user = require("../models/user_mod");
const post = require("../models/post_mod");
const fs = require("fs");

//set up multer

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'images');
  },
  filename: function(req, file, cb) {   
      cb(null, "Bista" + '-' + req.body.img);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}

let upload = multer({ storage, fileFilter });


//Get all Timeline Post

router.get("/all/:userId", async (req, res) => {
  try {
    const currUser = await user.findById(req.params.userId);
    const myPosts = await post.find({ userid: currUser._id }).sort({time : -1 }).exec();
   
    const otherPosts = await Promise.all(
      currUser.following.map((fid) => {
        
        return post.find({ userid: fid }).sort({time: -1}).exec();
      })
    );
    res.status(200).json(myPosts.concat(...otherPosts));
  } catch (err) {
    console.log(err);
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
    console.log(err);
    res.status(500).json(err);
  }
});

//Create a Post

router.post("/", upload.single('imag'), async (req, res) => {
  console.log("got a new post");
  let newPost;
  if(req.body.img!="")
  newPost = new post({...req.body,img:req.file.filename});
  else
  newPost = new post(req.body.img)
  try {
    let curruser = await user.findById(req.body.userid);
    let x = curruser.postCount;
    await curruser.updateOne({ $set: { postCount: x+1 } })
    const currPost = await newPost.save();
    res.status(200).json(currPost);
  } catch (err) {
    console.log(err);
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
      await curruser.updateOne({ $set: { postCount: x-1 } })
      await currPost.deleteOne();
      fs.unlink("images/"+currPost.img,(err)=>{
        console.log(err);
        return
      });
      res.status(200).json("Post has been successfully deleted");
    } else {
      res.status(403).json("You cant delete the posts that u didnt create");
    }
  } catch (err) {
    console.log(err);
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
      res.status(200).json(finalPost);
    } else {
      res.status(403).json("Post not Found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
