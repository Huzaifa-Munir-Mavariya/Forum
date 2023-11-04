//express app Start
const express = require("express");
const Categories = require("./database");
const app = express();
const Thread = require("./thread");
const Questions = require("./questions");
const Answer = require("./thread");
const port = process.env.port || 8000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine", "ejs");

app.get("/", async (req,res)=>{
    const categories = await Categories.find({});
    res.render("index",{
        Category:categories
    });
})

app.get("/questions/:id", async (req,res) => {
    const {id} = req.params;
    const category = await Categories.findById({_id:id});
    const question = await Questions.find({type:category.title});

    res.render("questions",{
        Category:category,
        Question:question
    });
})

app.post("/questions", async (req,res) => {
    try{
        const questions = new Questions({
        title:req.body.title,
        description:req.body.description,
        type:req.body.type
        })
        const addData = await questions.save();
        res.redirect("/");
    }catch(e){
        console.log(e);
    }
})

app.get("/thread/:id", async (req,res) => {
    try{
    const {id} = req.params;
    const questions = await Questions.findById({_id:id});
    const thread = await Thread.find({question:questions.title});

    res.render("thread",{
        Question:questions,
        Thread:thread
    });
    }catch(e){
        console.log(e);
    }
})

app.post("/thread", async (req,res) => {
    try{
        const answer = new Answer({
            description:req.body.description,
            question:req.body.question
        })
        const addData = await answer.save();
        res.redirect("/")
    }catch(e){
        console.log(e);
    }
})



app.listen(port,()=>{
console.log("Listening to port no "+8000)
})