'use strict'

var models = require( '../models' )

module.exports.controller = function( app, passport, passportJWT, ExtractJwt, JwtStrategy ){
    console.log( 'Authentication controller' )
    var jwtOptions = {}
    jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    jwtOptions.secretOrKey = '34543534543';


    app.post( '/login', function( req, res ) {
        
    })
}