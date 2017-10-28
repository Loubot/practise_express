var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.get('/', function( req, res, next ) {
    console.log(JSON.stringify(next));
    res.render('index', {title: 'hello'});
})

// router.get('/user', function(req, res) {
//   models.User.findAll()
//     .then(function(users) {
//         console.log(JSON.stringify(users))
//         res.render('index', {
//             title: 'Sequelize: Express Example',
//             users: users
//         });
//   });
// });

module.exports = router;