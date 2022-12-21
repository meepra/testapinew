require("dotenv").config();
const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors())


const connectDb = require("./db/connect")
const PORT = process.env.PORT || 5000
app.get("/", (req, res) => {
    res.send("hello")
})
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const products_routes = require("./routes/product")
// Meddle ware or set router

app.use("/api/products", products_routes)

const start = async () => {
    try {
        await connectDb(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} port is running`)
        })
    }
    catch (err) {
        console.log(err);
    }
}

start();