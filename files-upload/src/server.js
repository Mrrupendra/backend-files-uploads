const express = require('express');

const connect = require("./configs/db");

const productController = require("./controllers/product.controller");

const app = express();

app.use(express.json());

app.use("/products", productController);

app.listen(2233, async function () {
    await connect();
    console.log("Listening on port 2233");
});