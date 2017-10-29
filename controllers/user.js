'use strict'

var models = require('../models');
var strategy = require('../config/strategy')

module.exports.controller = function( app, passport, passportJWT, ExtractJwt, JwtStrategy, jwt ) {
    
    console.log('user');

    app.get('/api/user', function( req, res ) {
        passport.authenticate( 'jwt', { session: false }), function( req, res ) {
                res.json('Reached')
            }( req, res)
    })

   
    
    app.get('/user', function( req, res ) {
        models.User.findAll().then( function( users ) {
            console.log( JSON.stringify( users ) );
            res.send( users );
        })
        
    });
}