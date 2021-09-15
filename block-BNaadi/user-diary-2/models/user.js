var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let userSechema = new Schema({
    name: {type:String},
    email:{type:String},
    age: {type:Number},

    bio: {type:String}

},{timestamps:true})

let User = mongoose.model("User" ,userSechema);
module.exports = User;