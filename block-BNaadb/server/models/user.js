let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: { type: String },
    age: { type: Number },
    email: { type: String },
  },
  { timestamps: true }
);

let User = mongoose.model('User', userSchema);
module.exports = User;
