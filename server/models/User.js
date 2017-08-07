import mongoose, { Schema } from 'mongoose';
import friends from 'mongoose-friends';
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema({
    email: String,
    starScore: Number,
    list: [{
        title: String,
        starValue: Number
    }],
});


UserSchema.plugin(friends());
UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
export default mongoose.model('User', UserSchema);
