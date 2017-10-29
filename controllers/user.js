'use strict'

var models = require('../models');


module.exports.controller = function( app, passport, passportJWT, ExtractJwt, JwtStrategy ) {
    var jwtOptions = {}
    jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    jwtOptions.secretOrKey = '34543534543';
    console.log('user');
    
    app.get('/user', function( req, res ) {
        models.User.findAll().then( function( users ) {
            console.log( JSON.stringify( users ) );
            res.send( users );
        })
        
    });
}