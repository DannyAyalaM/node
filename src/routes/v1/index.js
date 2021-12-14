const userControllers = require('../../controllers/v1/users-controller');
const productControllers = require('../../controllers/v1/products-controller')


const createRoutesV1 = (app) => {
    app.get("/api/v1/users", userControllers.getUsers);
    app.get("/api/v1/users/:userId", userControllers.getUserById);
    app.get("/api/v1/products", productControllers.getProducts);
    app.get("/api/v1/products/:productId", productControllers.getProductById);
    app.post("/api/v1/products/create", productControllers.createProduct)
    app.put("/api/v1/products/:productId", productControllers.updateProduct)
    app.patch("/api/v1/products/:productId", productControllers.partialUpdateProduct)
    app.delete("/api/v1/products/:productId", productControllers.deleteProductById)
}

module.exports = createRoutesV1