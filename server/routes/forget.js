const router = require("express").Router();
const user = require("../models/user_mod");

router.get("/", async (req, res) => {
    try {
        let mail = req.body.email;
        let found = await user.find({ email: mail });
        var newPassword = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 8; i++) {
            newPassword += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        found.password = newPassword;
        await found.save();
        res.status(200).json(newPassword);
    }
    catch (err) {
        console.log(err);
        res.status(404).json("Cannot find the email")
    }
})