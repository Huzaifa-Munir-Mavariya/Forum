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
        title:{
            type:String,
            
        },
        description:{
            type:String,
        }
           

})

const language = new mongoose.model("language",schema);


module.exports = language;