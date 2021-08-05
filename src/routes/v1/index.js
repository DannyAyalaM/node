const userControllers = require('../../controllers/v1/users-controller');
const productControllers = require('../../controllers/v1/products-controller')


const createRoutesV1 = (app) => {
    app.get("/api/v1/users", userControllers.getUsers);
    app.get("/api/v1/users/:userId", userControllers.getUserById);
    app.get("/api/v1/products", productControllers.getProducts);
    app.get("/api/v1/products/:page", productControllers.getProducts);
}

module.exports = createRoutesV1