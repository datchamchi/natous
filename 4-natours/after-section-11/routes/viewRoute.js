const express = require('express');
const authController = require('./../controllers/authController');
const viewController = require('./../controllers/viewController');

const router = express.Router();

router.use(authController.isLogin);
router.get('/', viewController.getOverview);
router.get('/login', viewController.login);

router.get('/tours/:slug', viewController.getTour);

module.exports = router;
