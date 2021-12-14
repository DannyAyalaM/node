const { Router } = require('express');
const userControllers = require('../../controllers/v1/users-controller');
const productControllers = require('../../controllers/v1/products-controller');


const router = Router()

router.get("/", userControllers.getUsers);
router.get("/:userId", userControllers.getUserById);
router.get("/", productControllers.getProducts);
router.get("/:productId", productControllers.getProductById);
router.post("/create", productControllers.createProduct)
router.put("/:productId", productControllers.updateProduct)
router.patch("/:productId", productControllers.partialUpdateProduct)
router.delete("/:productId", productControllers.deleteProductById)

module.exports = router