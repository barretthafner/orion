var mongoose = require("mongoose");
var User = require("./models/User");



var data = [
    {
        username: "barrett",
        password: "barrett",
        email: "barrett@orionapp.com",
        starScore: 5,
        list: [
            {
                title: "go to yoga",
                starValue: 1
            },
            {
                title: "get title/reg for party van",
                starValue: 2
            },
            {
                title: "write proposal for wta",
                starValue: 3
            }
        ]
    },
    {
        username: "katy",
        password: "katy",
        email: "katy@orionapp.com",
        starScore: 5,
        list: [
            {
                title: "yearly budget",
                starValue: 2
            },
            {
                title: "clean inside of car",
                starValue: 1
            },
            {
                title: "process day",
                starValue: 3
            }
        ]
    },
    {
        username: "testy",
        password: "testy",
        email: "testy@orionapp.com",
        starScore: 6,
        list: [
            {
                title: "test orion",
                starValue: 1
            },
            {
                title: "make a friend",
                starValue: 2
            },
            {
                title: "find love",
                starValue: 3
            }
        ]
    }
];


function seedDb() {
    // Remove all campgrounds
    User.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("emptied database!");
            data.forEach(function(seed){
                var newUser = new User({username: seed.username});
                User.register(newUser, seed.password, function(err, user){
                    if (err){
                        console.log(err);
                    } else {
                        user.email = seed.email;
                        user.starScore = seed.starScore;
                        user.list = seed.list;
                        user.save();
                        console.log("added a user: " + user.username);
                    }
                });
            });
        }
    });
}

module.exports = seedDb;