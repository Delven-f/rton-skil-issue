// importing necessary modules
const router = require("express").Router();

// setting the route
router.get("/", (req, res) => {
    res.send("THANKS BUY OSM DELVEN STORE");
});

// exporting the router
module.exports = router;
