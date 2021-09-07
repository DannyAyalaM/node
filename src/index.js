const express = require("express")
const { phone } = require('phone');
const appiV1 = require('./routes/v1');
require('dotenv').config();

const port = process.env.PORT
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

appiV1(app);

app.use((req, res) => {
    res.status(404).send("NOT FOUND")
})

app.listen(port, () => {
    console.log("running in PORT: ", port)
})