let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to My Node.js Project!',
    });
});

var registerController = require('../controller/register');
router.route('/register').post(registerController.register);

module.exports = router;