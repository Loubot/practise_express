'use strict'

var models = require('../models');
var strategy = require('../config/strategy')

module.exports.controller = function( app, passport, passportJWT, ExtractJwt, JwtStrategy, jwt ) {
    var jwtOptions = {}
    jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    jwtOptions.secretOrKey = '34543534543';
    console.log('user');

    app.get('/api/user', passport.authenticate( 'jwt', { session: false }), function( req, res ) {
        res.json('Reached')
    })
    
    app.get('/user', function( req, res ) {
        models.User.findAll().then( function( users ) {
            console.log( JSON.stringify( users ) );
            res.send( users );
        })
        
    });
}