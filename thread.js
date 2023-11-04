//Connect Mongo db database
const mongoose = require("mongoose");

const URI = "mongodb+srv://Huzaifa:Huzaifa@mydatabase.vad6c3b.mongodb.net/";

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connected to the database");
}).catch((e)=>{
    console.log("Connection failed");
})

//Create a schema

const schema = new mongoose.Schema({
        description:String,
        question:String

})

const Answer = new mongoose.model("Answer",schema);

module.exports = Answer;