var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    starScore: Number,
    list: [{
        title: String,
        starValue: Number
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);