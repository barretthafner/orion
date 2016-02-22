var express     = require("express"),
    router      = express.Router();
    
// 404 response----------------------------------------
router.get("*", function(req, res) {
    res.send("You're a shinning star! But, unfortunately, your page cannot be found.");
});

    
module.exports = router;