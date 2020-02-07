const router = require('express').Router();
const usersController = require('../../controllers/usersController');

router.route('/').get(usersController.getUser);

router.route('/signup').post(usersController.signup);

router.route('/login').post(usersController.login);

router.route('/logout').post(usersController.logout);
// .post(usersController.login);

module.exports = router;
