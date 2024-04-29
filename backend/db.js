const mongoose = require("mongoose");
const {mongo} = require("mongoose");
mongoose.connect("mongodb+srv://admin:Zubairkhan1@cluster0.sbrgvn8.mongodb.net/todoDB\n")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean

})

const todo = mongoose.model('todos',todoSchema);
module.exports ={
    todo
}