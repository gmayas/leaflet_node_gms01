const router = require('express').Router(); //express is initialized for routes

//routes
router.get('/', (req, res) => {
    res.render('index'); //render file ejs
});

module.exports = router;