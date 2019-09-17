const router = require("express").Router();
const db = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.post("/signup", async (req,res)=>{

        req.body.email = req.body.email.toLowerCase();

        //has the password
         const password =  await bcrypt.hash(req.body.password, 10);

        //create user in database
        const user = await db.User.create({
                name: req.body.name,
                email: req.body.email,
                password: password,
        });
        
        //create cookie for user 
       const token= jwt.sign({_id: user._id}, process.env.APP_SECRET);

       res.cookie("token", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
            });

        console.log("\n\n\n\n\n\n\n\n\n", user);    

        res.json(user);
        



            
})

router.get("/user", (req,res)=>{
       res.json(req.user)
})
module.exports = router;
