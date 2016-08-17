var mongoose = require("mongoose");
var friends = require("mongoose-friends");
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


UserSchema.plugin(friends());
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
