var express     = require("express"),
    router      = express.Router();
    
// Root ("/") route
router.get("/", function(req, res){
    res.render("root");
});

module.exports = router;