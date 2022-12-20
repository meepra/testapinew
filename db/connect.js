const mongoose = require("mongoose")

// uri = "mongodb+srv://pradeep:UBG2FU0ykNfkoRBY@learnapi.0nxsltw.mongodb.net/learnAPI?retryWrites=true&w=majority";

const connectDb = (uri) => {
    console.log("connect db")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

}

module.exports = connectDb;