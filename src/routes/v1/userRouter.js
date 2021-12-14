const { Router } = require('express');
const userControllers = require('../../controllers/v1/users-controller');

const router = Router()

router.get("/", userControllers.getUsers);
router.get("/:userId", userControllers.getUserById);
router.post('/login', userControllers.login)
router.post('/new', userControllers.newUser)


module.exports = router
