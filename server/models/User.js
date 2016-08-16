var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
//    username: { type: String, required: true, index: { unique: true } },
    email: String,
    starScore: Number,
    list: [{
        title: String,
        starValue: Number
    }],
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
