var express = require('express');
var router = express.Router();

/* Cookie middleware. */
router.use(function(req, res, next) {
    // This middleware is to make sure that the user has the cookie sessionId so that they can be identified by the server.
    // This is to prevent the databases of the different users colliding
    if (req.cookies['sessionId'] === undefined) {

        // sessionId cookie has not been set, set it using a random number
        var randomNumber = Math.random().toString();
        randomNumber = randomNumber.substring(2, randomNumber.length);

        // Set the cookie with a max age of 1 year : 60 * 24 * 365 = 525600 seconds
        res.cookie('sessionId', randomNumber, { maxAge: 525600, httpOnly: true });

        // Send user to cookie page to make user the cookie was set
        if (req.path === '/cookie') {
            // Avoid redirect loop to cookie page
            next();
        } else {
            res.redirect('/cookie');
        }
    } else {
        // sessionId cookie has been set, allow user to reach webpage
        next();
    }
});

module.exports = router;
