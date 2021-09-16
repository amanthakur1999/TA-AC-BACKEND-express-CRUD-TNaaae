var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let userSechema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number },

    bio: { type: String },
    hobbies: { type: [String] },
  },
  { timestamps: true }
);

let User = mongoose.model('User', userSechema);
module.exports = User;
