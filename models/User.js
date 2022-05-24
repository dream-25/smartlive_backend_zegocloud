const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    dob: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    gender: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    region: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    name: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    phone: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    levelProfile: {
      type: String,
      default: "1",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
      default: "Rocking is SmartLive",
    },
    city: {
      type: String,
      max: 50,
      default: "",
    },
    from: {
      type: String,
      max: 50,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
