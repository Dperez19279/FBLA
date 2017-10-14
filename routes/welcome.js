var express = require('express');
var router = express.Router();

/* GET welcome page. */
router.get('/', function(req, res, next) {
    res.render('welcome');
});

/* POST welcome page. */
router.post('/',function(req, res, next) {
    // Save library name to database
    // TODO: actually save library name to database (req.body.name)
    res.redirect('/');
});

module.exports = router;
