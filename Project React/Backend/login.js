const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://hmovies957:abin@cluster0.g7tgkvq.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
   
})
.catch(err=>console.log(err))
let mongoschema = mongoose.Schema
const SignupSchema = new mongoschema({
    oname:String,
    onumber:Number,
    omail:String,
    opass:String
})

var Signup = mongoose.model("Signup",SignupSchema)
module.exports = Signup