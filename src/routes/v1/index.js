const userRouter = require('./userRouter')
const productRouter = require('./productRouter')


const createRoutesV1 = (app) => {
    app.use('/api/v1/users', userRouter)
    app.use('/api/v1/products', productRouter)
}

module.exports = createRoutesV1