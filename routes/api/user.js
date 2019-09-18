const router = require("express").Router();
const usersController = require("../../controllers/usersController");


router.route("/")
        .get(usersController.getUser)
        .post(usersController.signUp)
        
module.exports = router;
