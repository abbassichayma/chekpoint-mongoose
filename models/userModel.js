const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String,required: true,default: "user",},
  age: {type: Number,default: 20, },
  favoriteFoods: { type: Array,default: ["Choclate", "Pizza"],},
});

module.exports =  mongoose.model("user", userSchema);